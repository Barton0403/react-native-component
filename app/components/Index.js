'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import BTRow from './BTRow';
import BTIconRow from './BTIconRow';
import TabsExmple from './TabsExmple';

class Index extends Component {
  render() {
  	const { navigator } = this.props;

    return (
      <View style={styles.container}>
	    	<ScrollView>
	    		<Text style={styles.title}>行按钮</Text>
	      	<BTRow
	      		text="测试"
	      		onPress={() => alert('测试')}
	      	/>
	    		<Text style={styles.title}>图标按钮行</Text>
	      	<BTIconRow />
	    		<Text style={styles.title}>Tabs</Text>
	      	<BTRow
	      		text="跳转到例子"
	      		onPress={() => 
	      			navigator.push({
	      				title: 'tabs演示页面',
	      				component: TabsExmple
	      			})
	      		}
	      	/>
	    	</ScrollView>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: "#eaeaea",
	},
	title: {
		padding: 5,
	},
});


export default Index;