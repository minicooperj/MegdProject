import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';
import footballPng from '../images/football.png';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
      <nav className={cx('navigation')} role="navigation">
        <img className={cx('item', 'logo', 'logo-image')} alt="logo" src={footballPng} />
        <Link
          to="/"
          className={cx('item', 'logo')}
          activeClassName={cx('active')}>
          Meg'd
        </Link>
          { user.authenticated ? (
            <Link
              onClick={logOut}
              className={cx('item')} to="/">Logout</Link>
          ) : (
            <Link className={cx('item')} to="/login">Log in</Link>
          )}
        <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
        <Link to="/event" className={cx('item')} activeClassName={cx('active')}>Event</Link>
      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
