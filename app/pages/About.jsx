import React, { Component } from 'react';
import Page from '../pages/Page';
import AboutContainer from '../containers/About';

class About extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'About | Meg\'d';
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
        <AboutContainer {...this.props} />
      </Page>
    );
  }
}

export default About;
