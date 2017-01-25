'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Alert,
  Text,
} from 'react-native';

import BTRow from './BTRow';

// Alert测试文本
let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

class AlertExmple extends Component {
  render() {
    return (
      <View>
      	<BTRow
      		text="android"
      		onPress={() => Alert.alert(
            'android最多3个按钮',
            "以这个布局为android提示框标准",
            [
              {text: '稍后再说', onPress: () => console.log('稍后再说')},
              {text: '取消', onPress: () => console.log('取消')},
              {text: '确定', onPress: () => console.log('确定')},
            ]
          )}
      	/>
      	<BTRow
      		text="ios以后测试"
      		onPress={() => null}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default AlertExmple;