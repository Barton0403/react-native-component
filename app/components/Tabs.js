'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');

class Tabs extends Component {
	constructor(props) {
	  super(props);
		let { children } = props;
	  this.state = {
	  	selectedIndex: 0, 
			routes: {
				[children[0].props.name]: children[0],
			},
	  };
	}

	selectTab(index) {
		let { routes, selectedIndex } = this.state;
		let { children } = this.props;

		if (index === selectedIndex) {
			return ;
		}

		// 储存新的状态
		let state;
		let nextkey = children[index].props.name
		let nextScene = routes[nextkey];
		// 判断是否已经加入
		if (!nextScene) {
			state = {
	  		selectedIndex: index,
	  		routes: {
					...routes,
					[nextkey]: children[index]
	  		}
			}
		} else {
			state = {
	  		selectedIndex: index
			}
		}

		this.setState(state);
	}

	renderTabBar() {
		let { children } = this.props;
		let { selectedIndex } = this.state;

		// 添加底部导航栏
		return(
			<View style={styles.tabBar}>
				<View style={styles.row}>
	        {
	          children.map((tab, index) => (
	            <TouchableOpacity
	              key={index}
	              onPress={() => this.selectTab(index)}>
	              <View style={styles.item}>
	                <Icon name={tab.props.name} size={30}
	                  color={selectedIndex === index ? '#3b5998' : '#ccc'}
	                  style={styles.icon}
	                />
	                <Text style={[styles.title,
	                  selectedIndex === index ? {color: '#3b5998'} : {color: '#ccc'}]}>
	                  {tab.props.title}
	                </Text>
	              </View>
	            </TouchableOpacity>
	          ))
	        }
	      </View>
			</View>
		);
	}

  render() {
  	let { children } = this.props;
  	let { selectedIndex, routes } = this.state;

    return (
	  	<View style={styles.container}>
	  		{
	  			children.map((tab, index) => (
	  				<View
	  					key={index}
	  					style={[styles.tab, selectedIndex === index && { zIndex: 999 }]}>
	  					{routes[tab.props.name] && tab}
	  				</View>
	  			))
	  		}
	  		{this.renderTabBar()}
	  	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		// 防止TabBar被键盘上推
		// 25 状态栏高度，44 顶部导航高度 
		height: height - 25 - 44,
		width,
	},
	tab:{
		backgroundColor: '#eaeaea',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 60,
	},
	tabBar: {
		height: 60,
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
	row: {
		flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around'
	},
  item: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    paddingTop: 10,
  },
  title: {
    fontSize: 10,
    color: '#ccc'
  }
});


export default Tabs;