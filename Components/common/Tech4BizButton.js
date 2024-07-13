// JVDButton.js

import React, { Component } from "react";
import {
  Button as RNButton,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { OffWhite } from "../../config/theme";

class JVDButton extends Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.button, this.props.style]}
      >
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
  },
});

export default JVDButton;
