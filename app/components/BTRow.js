'use strict';

import React, { Component, PropTypes } from 'react';
import globalStyles from './styles';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  PixelRatio,
} from 'react-native';

// 行按钮类
class BTRow extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

  render() {
  	const { text, onPress } = this.props;

    return (
    	<TouchableHighlight
    		underlayColor="#b5b5b5"
    		onPress={onPress}
    	>
	    	<View style={styles.row}>
	      	<Text style={globalStyles.titleFont}>{text}</Text>
	    	</View>
    	</TouchableHighlight>
    );
  }
}

// 传入内容和点击事件
BTRow.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		paddingLeft: 15,
		paddingVertical: 15, 
		backgroundColor: '#fff',
		justifyContent: 'center',
		borderColor: '#ccc',
		borderBottomWidth: 1 / PixelRatio.get(),
	},
});


export default BTRow;