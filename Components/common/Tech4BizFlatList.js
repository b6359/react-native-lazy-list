// JVDFlatList.js

import React, { Component } from "react";
import { FlatList as RNFlatList, StyleSheet } from "react-native";

class JVDFlatList extends Component {
  render() {
    return (
      <RNFlatList {...this.props} style={[styles.flatList, this.props.style]} />
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    // Add your JVD styles here
  },
});

export default JVDFlatList;
