// Tech4BizText.js

import React, { Component } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

class Tech4BizText extends Component {
  render() {
    return <RNText {...this.props} style={[styles.text, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  text: {
    // Add your Tech4Biz styles here
  },
});

export default Tech4BizText;
