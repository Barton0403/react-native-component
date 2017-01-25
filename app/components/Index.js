'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
} from 'react-native';

import BTRow from './BTRow';
import BTIconRow from './BTIconRow';
import TabsExmple from './TabsExmple';
import DownRefresh from './DownRefresh';
import AlertExmple from './AlertExmple';

class Index extends Component {
  render() {
  	const { navigator, showModel } = this.props;

  	//console.log(navigator);
  	
  	// navigationExpertimental 跳转方法
  	// <BTRow
	  //     		text="跳转到例子"
	  //     		onPress={() => 
	  //     			navigator('push', {
	  //     				key: 'TabsExmple',
	  //     				title: '',
	  //     				component: TabsExmple,
	  //     				navBar: false,
	  //     			})
	  //     		}
	  //     	/>
	  //   		<Text style={styles.title}>下拉刷新</Text>
	  //     	<BTRow
	  //     		text="跳转到例子"
	  //     		onPress={() => 
	  //     			navigator('push', {
	  //     				key: 'DownReftrsh',
	  //     				title: '下拉刷新',
	  //     				component: DownRefresh,
	  //     				navBar: true,
	  //     			})
	  //     		}
	  //     	/>

    return (
    	<ScrollView
  			style={styles.scrollView}
    	>
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
      				key: 'TabsExmple',
      				title: '',
      				component: TabsExmple,
      				navBar: false,
      			})
      		}
      	/>
    		<Text style={styles.title}>下拉刷新</Text>
      	<BTRow
      		text="跳转到例子"
      		onPress={() => 
      			navigator.push({
      				key: 'DownReftrsh',
      				title: '下拉刷新',
      				component: DownRefresh,
      				navBar: true,
      			})
      		}
      	/>
    		<Text style={styles.title}>Modal</Text>
      	<BTRow
      		text="弹出，主要用于异步"
      		onPress={showModel}
      	/>
    		<Text style={styles.title}>Alert</Text>
    		<AlertExmple />
    	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: "#eaeaea",
		paddingTop: 56,
	},
	scrollView: {
		marginTop: 56,
		backgroundColor: '#eaeaea',
	},
	title: {
		padding: 5,
	},
});


export default Index;