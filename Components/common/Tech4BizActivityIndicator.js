// Tech4BizActivityIndicator.js

import React, { Component } from 'react';
import { ActivityIndicator as RNActivityIndicator, StyleSheet } from 'react-native';

class Tech4BizActivityIndicator extends Component {
  render() {
    return <RNActivityIndicator {...this.props} style={[styles.activityIndicator, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    // Add your Tech4Biz styles here
  },
});

export default Tech4BizActivityIndicator;
