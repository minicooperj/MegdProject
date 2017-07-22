import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import EventTextInput from '../components/EventTextInput';
import styles from '../css/components/entrybox';

const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
const EventEntryBox = ({onEntryChange, onEntrySave, event}) => {
  return (
    <div className={cx('entrybox')}>
      <h1 className={cx('header')}>Event Name Go Here</h1>
      <EventTextInput
        className={cx('input')}
        value={event}
        placeholder="Date Selector"
        onEntryChange={onEntryChange}
        onEntrySave={onEntrySave} />
    </div>
  );
};

EventEntryBox.propTypes = {
  event: PropTypes.string,
  onEntryChange: PropTypes.func.isRequired,
  onEntrySave: PropTypes.func.isRequired
};

export default EventEntryBox;
