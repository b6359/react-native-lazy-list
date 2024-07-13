// JVDTextInput.js

import React, { Component } from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

class JVDTextInput extends Component {
  render() {
    return (
      <RNTextInput {...this.props} style={[styles.input, this.props.style]} />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    // Add your JVD styles here
  },
});

export default JVDTextInput;
