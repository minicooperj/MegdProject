import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EventEntryBox from '../components/EventEntryBox';
import EventMainSection from '../components/EventMainSection';
import EventScoreboard from '../components/EventScoreboard';
import { createEvent, typing, incrementCount,
  decrementCount, destroyEvent } from '../actions/events';
import styles from '../css/components/vote';

const cx = classNames.bind(styles);

class EventVote extends Component {
  render() {
    const {newEvent, events, typing, createEvent, destroyEvent, incrementCount, decrementCount } = this.props;
    return (
      <div className={cx('vote')}>
        <EventEntryBox
          event={newEvent}
          onEntryChange={typing}
          onEntrySave={createEvent} />
        <EventMainSection
          events={events}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyEvent} />
        <EventScoreboard events={events} />
      </div>
    );
  }
}

EventVote.propTypes = {
  events: PropTypes.array.isRequired,
  typing: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
  destroyEvent: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  newEvent: PropTypes.string
};

function mapStateToProps(state) {
  return {
    events: state.event.events,
    newEvent: state.event.newEvent
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { createEvent, typing, incrementCount, decrementCount, destroyEvent })(EventVote);
