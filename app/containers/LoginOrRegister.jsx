import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from '../actions/users';
import styles from '../css/components/login';
import hourGlassSvg from '../images/hourglass.svg';

const cx = classNames.bind(styles);

class LoginOrRegister extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { manualLogin, signUp, user: { isLogin } } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;

    if (isLogin) {
      manualLogin({email, password});
    } else {
      const username = ReactDOM.findDOMNode(this.refs.username).value;
      const phone = ReactDOM.findDOMNode(this.refs.phone).value;
      signUp({ email, password, username, phone });
    }
  }

  renderHeader() {
    const { user: { isLogin }, toggleLoginMode } = this.props;
    if (isLogin) {
      return (
        <div className={cx('header')}>
          <h1 className={cx('heading')}>Login with Email</h1>
          <div className={cx('alternative')}>
            First Time Sign Up?
            <a
              className={cx('alternative-link')}
              onClick={toggleLoginMode}
            > Register an Account</a>
          </div>
        </div>
      );
    }

    return (
      <div className={cx('header')}>
        <h1 className={cx('heading')}>Register with Email</h1>
        <div className={cx('alternative')}>
          Already have an account?
          <a
            className={cx('alternative-link')}
            onClick={toggleLoginMode}
          > Login</a>
        </div>
      </div>
    );
  }

  render() {
    const { isWaiting, message, isLogin } = this.props.user;
    if(isLogin){
      return (
      <div
        className={cx('login', {
          waiting: isWaiting
        })}
      >
        <div className={cx('container')}>
          { this.renderHeader() }
          <img className={cx('loading')} alt="loading" src={hourGlassSvg} />
          <div className={cx('email-container')}>
            <form onSubmit={this.handleOnSubmit}>
              <input
                className={cx('input')}
                type="email"
                ref="email"
               placeholder="email"
              />
              <input
                className={cx('input')}
                type="password"
               ref="password"
                placeholder="password"
              />
              <div className={cx('hint')}>
                <div>Hint</div>
                <div>email: example@megd.com password: megd</div>
              </div>
              <p
                className={cx('message', {
                'message-show': message && message.length > 0
              })}>{message}</p>
              <input
                className={cx('button')}
                type="submit"
                value={isLogin ? 'Login' : 'Register'} />
            </form>
          </div>

        </div>
      </div>
      );
    } // end if (isLogin)

  return (
    <div
      className={cx('login', {
        waiting: isWaiting
      })}
    >
      <div className={cx('container')}>
        { this.renderHeader() }
        <img className={cx('loading')} alt="loading" src={hourGlassSvg} />
        <div className={cx('email-container')}>
          <form onSubmit={this.handleOnSubmit}>
            <input
              className={cx('input')}
              type="email"
              ref="email"
             placeholder="email"
            />
            <input
              className={cx('input')}
              type="password"
             ref="password"
              placeholder="password"
            />
            <input
              className={cx('input')}
              type="username"
             ref="username"
              placeholder="username"
            />
            <input
              className={cx('input')}
              type="phone"
             ref="phone"
              placeholder="phone"
            />
            <div className={cx('hint')}>
              <div>Hint</div>
              <div>email: example@ninja.com password: ninja</div>
            </div>
            <p
              className={cx('message', {
              'message-show': message && message.length > 0
            })}>{message}</p>
            <input
              className={cx('button')}
              type="submit"
              value={isLogin ? 'Login' : 'Register'} />
          </form>
        </div>

      </div>
    </div>

  )
  }
}

LoginOrRegister.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps({user}) {
  return {
    user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps, { manualLogin, signUp, toggleLoginMode })(LoginOrRegister);
