'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';

import Index from './Index';

class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Index,
          title: '主页',
          navigationBarHidden: false
        }}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({

});


export default NavigatorIOSApp;