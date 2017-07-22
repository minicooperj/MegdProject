import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>Meg'd - Urban Pick-up Soccer Community</h1>
      <div className={cx('description')}>
        <p>Meg'd was created to help people find a pick-up soccer game fast.
          <br/>
          Registered Users can log in and find / create pick-up soccer events anywhere.
        </p>
      </div>
      <div className={cx('contribute')}>
        <p>RoadMap: </p>
          <ul>
              <li> Add Styles for responsiveness </li>
              <li> Add geocoder functionality </li>
              <li> Add advanced user and field profiles </li>
              <li> Add schedule data and show available field time to users</li>

          </ul>

      </div>
    </div>
  );
};

export default About;
