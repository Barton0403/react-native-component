'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import NavigatorApp from './NavigatorApp';
import NavigatorIOSApp from './NavigatorIOSApp';
import NavigationExperimentalApp from './NavigationExperimentalApp';

class App extends Component {
  render() {
    return (
    	<NavigatorApp />
    );
  }
}


export default App;