// JVDText.js

import React, { Component } from "react";
import { Text as RNText, StyleSheet } from "react-native";

class JVDText extends Component {
  render() {
    return <RNText {...this.props} style={[styles.text, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  text: {
    // Add your JVD styles here
  },
});

export default JVDText;
