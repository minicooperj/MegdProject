import { combineReducers } from 'redux';
import * as types from '../types';

const event = (
  state = {},
  action
) => {
  switch (action.type) {
    case types.CREATE_EVENT_REQUEST:
      return {
        ownerUserId: action.ownerUserId,
        locationId: action.locationId,
        players: action.players,
        dateTimeFrom: action.dateTimeFrom,
        dateTimeTo: action.dateTimeTo,
        playerCount: action.playerCount,
        playerLimit: action.playerLimit,
        isFull: action.isFull,
        text: action.text,
        id: action.id

      };
    case types.INCREMENT_EVENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count + 1 };
      }
      return state;
    case types.DECREMENT_EVENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count - 1 };
      }
      return state;
    default:
      return state;
  }
};

const events = (
  state = [],
  action
) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_EVENT_REQUEST:
      return [...state, event(undefined, action)];
    case types.CREATE_EVENT_FAILURE:
      return state.filter(t => t.id !== action.id);
    case types.DESTROY_EVENT:
      return state.filter(t => t.id !== action.id);
    case types.INCREMENT_EVENT_COUNT:
    case types.DECREMENT_EVENT_COUNT:
      return state.map(t => event(t, action));
    default:
      return state;
  }
};

const newEvent = (
  state = '',
  action
) => {
  switch (action.type) {
    case types.TYPING_EVENT:
      return action.newEvent;
    case types.CREATE_EVENT_REQUEST:
      return '';
    default:
      return state;
  }
};

const eventReducer = combineReducers({
  events,
  newEvent
});

export default eventReducer;
