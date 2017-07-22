import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import EventItem from '../components/EventItem';
import styles from '../css/components/main-section';

const cx = classNames.bind(styles);

const EventMainSection = ({ events, onIncrement, onDecrement, onDestroy }) => {
  const eventItems = events.map((event, key) => {
    return (
      <EventItem
        index={key}
        id={event.id}
        key={key}
        text={event.text}
        incrementCount={onIncrement}
        decrementCount={onDecrement}
        destroyEvent={onDestroy} />);
  });

  return (
    <div className={cx('main-section')}>
      <h3 className={cx('header')}>Created Events will go here</h3>
      <ul className={cx('list')}>{eventItems}</ul>
    </div>
  );
};

EventMainSection.propTypes = {
  events: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default EventMainSection;
