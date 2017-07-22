import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/topic-item';

const cx = classNames.bind(styles);

const EventItem = ({ text, id, incrementCount, decrementCount, destroyEvent }) => {
  const onIncrement = () => {
    incrementCount(id);
  };
  const onDecrement = () => {
    decrementCount(id);
  };
  const onDestroy = () => {
    destroyEvent(id);
  };

  return (
    <li className={cx('topic-item')} key={id}>
      <span className={cx('topic')}>{text}</span>
      {/* <button
        className={cx('button', 'increment')}
        onClick={onIncrement}>+</button>
      <button
        className={cx('button', 'decrement')}
        onClick={onDecrement}>-</button> */}
      <button
        className={cx('button', 'destroy')}
        onClick={onDestroy}>{String.fromCharCode(215)}</button>
    </li>
  );
};

EventItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  destroyEvent: PropTypes.func.isRequired
};

export default EventItem;
