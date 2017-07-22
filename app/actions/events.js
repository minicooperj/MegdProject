/* eslint consistent-return: 0, no-else-return: 0*/
import md5 from 'spark-md5';
import * as types from '../types';
import { eventService } from '../services';

function increment(id) {
  return { type: types.INCREMENT_EVENT_COUNT, id };
}

function decrement(id) {
  return { type: types.DECREMENT_EVENT_COUNT, id };
}

function destroy(id) {
  return { type: types.DESTROY_EVENT, id };
}

function createEventRequest(data) {
  return {
    type: types.CREATE_EVENT_REQUEST,
    ownerUserId: data.ownerUserId,
    locationId: data.locationId,
    players: data.players,
    dateTimeFrom: data.dateTimeFrom,
    dateTimeTo: data.dateTimeTo,
    playerCount: data.playerCount,
    playerLimit: data.playerLimit,
    isFull: data.isFull,
    text: data.text,
    id: data.id
  };
}

function createEventSuccess() {
  return {
    type: types.CREATE_EVENT_SUCCESS
  };
}

function createEventFailure(data) {
  return {
    type: types.CREATE_EVENT_FAILURE,
    id: data.id,
    error: data.error
  };
}

function createEventDuplicate() {
  return {
    type: types.CREATE_EVENT_DUPLICATE
  };
}

export function typing(text) {
  return {
    type: types.TYPING_EVENT,
    newEvent: text
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createEvent(text) {
  return (dispatch, getState) => {
    // If the text box is empty
    if (text.trim().length <= 0) return;

    const id = md5.hash(text);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const { event } = getState();
    const data = {
      // count: 1,
      id,
      text
    };

    // Conditional dispatch
    // If the event already exists, make sure we emit a dispatch event
    if (event.events.filter(eventItem => eventItem.id === id).length > 0) {
      // Currently there is no reducer that changes state for this
      // For production you would ideally have a message reducer that
      // notifies the user of a duplicate event
      return dispatch(createEventDuplicate());
    }

    // First dispatch an optimistic update
    dispatch(createEventRequest(data));

    return eventService().createEvent({ id, data })
      .then((res) => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_EVENT_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
          return dispatch(createEventSuccess());
        }
      })
      .catch(() => {
        return dispatch(createEventFailure({ id, error: 'Oops! Something went wrong and we couldn\'t create your event'}));
      });
  };
}

export function incrementCount(id) {
  return (dispatch) => {
    return eventService().updateEvent({
      id,
      data: {
        isFull: false,
        isIncrement: true
      }
    })
      .then(() => dispatch(increment(id)))
      .catch(() => dispatch(createEventFailure({id, error: 'Oops! Something went wrong and we couldn\'t add your event'})));
  };
}

export function decrementCount(id) {
  return (dispatch) => {
    return eventService().updateEvent({
      id,
      data: {
        isFull: false,
        isIncrement: false
      }
    })
      .then(() => dispatch(decrement(id)))
      .catch(() => dispatch(createEventFailure({id, error: 'Oops! Something went wrong and we couldn\'t add your event'})));
  };
}

export function destroyEvent(id) {
  return (dispatch) => {
    return eventService().deleteEvent({ id })
      .then(() => dispatch(destroy(id)))
      .catch(() => dispatch(createEventFailure({id,
        error: 'Oops! Something went wrong and we couldn\'t add your event'})));
  };
}
