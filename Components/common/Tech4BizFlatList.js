// Tech4BizFlatList.js

import React, { Component } from 'react';
import { FlatList as RNFlatList, StyleSheet } from 'react-native';

class Tech4BizFlatList extends Component {
  render() {
    return <RNFlatList {...this.props} style={[styles.flatList, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  flatList: {
    // Add your Tech4Biz styles here
  },
});

export default Tech4BizFlatList;
