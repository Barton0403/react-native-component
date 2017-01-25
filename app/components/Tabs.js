'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
const { height, width } = Dimensions.get('window');

class IconButton extends Component {
	render() {
		const { onPress, icon, color, title } = this.props;

		return (
			<TouchableWithoutFeedback onPress={onPress} style={{flex: 1, borderColor: '#ccc', borderWidth: 1}}>
				<View style={styles.iconButton}>
					<Icon name={icon} color={color} size={30} />
					<Text style={[styles.title, {color: color}]}>{title}</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

class TabBar extends Component {
	render() {
		const { onSelect, selectedIndex, children } = this.props;

		return (
				<View style={styles.tabBar}>
	        {
	          children.map((tab, index) => (
	            <IconButton
	            	key={index}
	            	color={selectedIndex === index ? "#3b5998" : "#ccc"}
	            	icon={tab.props.icon}
	            	title={tab.props.title}
	            	onPress={() => onSelect(index)}
	            />
	          ))
	        }
	      </View>
		);
	}
}

class Tabs extends Component {
	constructor(props) {
	  super(props);

	  this._selectTab = this._selectTab.bind(this);

		let { children } = props;
	  this.state = {
	  	selectedIndex: 0, 
	  	// 设置已经加载的tab
			tabs: {
				[children[0].props.name]: children[0],
			},
	  };
	}

	_selectTab(index) {
		let { tabs, selectedIndex } = this.state;
		let { children } = this.props;

		if (index === selectedIndex) {
			return ;
		}

		// 储存新的状态
		let state;
		let nextkey = children[index].props.name
		let nextScene = tabs[nextkey];
		// 判断是否已经加载
		if (!nextScene) {
			state = {
	  		selectedIndex: index,
	  		tabs: {
					...tabs,
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

  render() {
  	let { children } = this.props;
  	let { selectedIndex, tabs } = this.state;

    return (
	  	<View style={styles.container}>
	  		{
	  			children.map((tab, index) => (
	  				<View
	  					key={index}
	  					style={[styles.tab, selectedIndex === index && { zIndex: 999 }]}>
	  					{tabs[tab.props.name] && tab}
	  				</View>
	  			))
	  		}
	  		<TabBar
	  			onSelect={this._selectTab}
	  			selectedIndex={selectedIndex}
	  			>
	  			{children}
	  		</TabBar>
	  	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		// 防止TabBar被键盘上推
		// 25 状态栏高度
		height: height - 25,
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
		flexDirection: 'row',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
	iconButton: {
		flex: 1,
		paddingTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 10,
		fontWeight: '200',
		color: '#ccc',
	}
});


export default Tabs;