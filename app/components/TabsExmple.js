'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import Tabs from './Tabs';

// Tab界面
class MyTab extends Component {
	render() {
		return (
			<View style={{marginTop: 56}}>
				<TextInput defaultValue={this.props.title} />
			</View>
		);
	}
}

class tabsExmple extends Component {
  render() {
    return (
      <Tabs>
      	<MyTab icon="inbox" title="主页" navigator={this.props.navigator} />
      	<MyTab icon="history" title="历史" navigator={this.props.navigator} />
      	<MyTab icon="user-secret" title="个人" navigator={this.props.navigator} />
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({

});


export default tabsExmple;