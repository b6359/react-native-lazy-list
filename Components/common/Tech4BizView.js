// Tech4BizView.js

import React, { Component } from 'react';
import { View as RNView, StyleSheet } from 'react-native';

class Tech4BizView extends Component {
  render() {
    return <RNView {...this.props} style={[styles.view, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  view: {
    // Add your Custom styles here
  },
});

export default Tech4BizView;
