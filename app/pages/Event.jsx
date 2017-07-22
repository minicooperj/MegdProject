import React, { Component } from 'react';
import Page from '../pages/Page';
import EventContainer from '../containers/Event';

class Event extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Meg\'d | Urban Pick-Up Soccer';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Meg\'d Skeleton' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <EventContainer {...this.props} />
      </Page>
    );
  }
}

export default Event;
