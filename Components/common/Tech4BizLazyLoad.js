// Tech4BizLazyLoad.js

import React, { Component } from 'react';
import LazyLoad from 'react-native-lazyload';

class Tech4BizLazyLoad extends Component {
  render() {
    const { children, debounce, height, offsetVertical } = this.props;

    return (
      <LazyLoad debounce={debounce} height={height} offsetVertical={offsetVertical}>
        {children}
      </LazyLoad>
    );
  }
}

export default Tech4BizLazyLoad;
