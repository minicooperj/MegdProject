import React, { Component } from 'react';
import Page from '../pages/Page';
import CoverContainer from '../containers/Cover';

class Cover extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Cover | Meg\'d';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Urban Pick-Up Soccer Community' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <CoverContainer {...this.props} />
      </Page>
    );
  }
}

export default Cover;
