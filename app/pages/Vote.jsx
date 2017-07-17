import React, { Component } from 'react';
import Page from '../pages/Page';
import VoteContainer from '../containers/Vote';

class Vote extends Component {
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
        <VoteContainer {...this.props} />
      </Page>
    );
  }
}

export default Vote;
