// JVDActivityIndicator.js

import React, { Component } from "react";
import {
  ActivityIndicator as RNActivityIndicator,
  StyleSheet,
} from "react-native";

class JVDActivityIndicator extends Component {
  render() {
    return (
      <RNActivityIndicator
        {...this.props}
        style={[styles.activityIndicator, this.props.style]}
      />
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    // Add your JVD styles here
  },
});

export default JVDActivityIndicator;
