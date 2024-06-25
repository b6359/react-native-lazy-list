// Tech4BizTextInput.js

import React, { Component } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

class Tech4BizTextInput extends Component {
  render() {
    return <RNTextInput {...this.props} style={[styles.input, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  input: {
    // Add your Tech4Biz styles here
  },
});

export default Tech4BizTextInput;
