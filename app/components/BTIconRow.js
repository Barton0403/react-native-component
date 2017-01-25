'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  TouchableHighlight
} from 'react-native';

class IconButton extends Component {
	render() {
		const { onPress, name, color, title } = this.props;

		return (
			<TouchableHighlight onPress={onPress} style={{flex: 1}}>
				<View style={styles.iconButton}>
					<Icon name={name} color={color} size={30} />
					<Text style={styles.title}>{title}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

class BTIconRow extends Component {
	constructor(props) {
	  super(props);

	  // 测试使用，正式中需分配多个按钮事件
		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		alert('test');
	}

  render() {
    return (
    	<View style={styles.row}>
	    	<IconButton
	    		onPress={this._onPress}
	    		name="qq"
	    		color="#3b5998"
	    		title="qq"
	    	/>
	    	<IconButton
	    		onPress={this._onPress}
	    		name="qq"
	    		color="#3b5998"
	    		title="qq"
	    	/><IconButton
	    		onPress={this._onPress}
	    		name="qq"
	    		color="#3b5998"
	    		title="qq"
	    	/><IconButton
	    		onPress={this._onPress}
	    		name="qq"
	    		color="#3b5998"
	    		title="qq"
	    	/>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderColor: '#ccc',
		borderTopWidth: 1 / PixelRatio.get(),
		borderBottomWidth: 1 / PixelRatio.get(),
		height: 60,
	},
	iconButton: {
		flex: 1,
		paddingTop: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 10,
		fontWeight: '200',
		color: '#000',
	}
});


export default BTIconRow;