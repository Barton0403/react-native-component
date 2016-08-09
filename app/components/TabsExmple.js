'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import Tabs from './Tabs';
import BTRow from './BTRow';

// Tab界面
class MyTab extends Component {
	render() {
		return (
			<View>
				<TextInput defaultValue={this.props.title} />
				<BTRow
					text="返回"
					onPress={() => this.props.navigator.pop()}
				/>
			</View>
		);
	}
}

class tabsExmple extends Component {
  render() {
    return (
      <Tabs>
      	<MyTab name="inbox" title="主页" navigator={this.props.navigator} />
      	<MyTab name="history" title="历史" navigator={this.props.navigator} />
      	<MyTab name="user-secret" title="个人" navigator={this.props.navigator} />
      </Tabs>
    );
  }
}

const styles = StyleSheet.create({

});


export default tabsExmple;