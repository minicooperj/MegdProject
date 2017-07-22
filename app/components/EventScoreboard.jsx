import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/scoreboard';

const cx = classNames.bind(styles);

const EventScoreboard = ({events}) => {
  const eventListItems = events.map((event, key) => {
    return (
      <li className={cx('item')} key={key}>
        <span className={cx('topic')}>{event.text}</span>
      </li>
    );
  });
  return (
    <div className={cx('scoreboard')}>
      <h3 className={cx('header')}>Open Field Times coming soon</h3>
      <ul className={cx('list')}>
        {eventListItems}
      </ul>
    </div>
  );
};

EventScoreboard.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventScoreboard;
