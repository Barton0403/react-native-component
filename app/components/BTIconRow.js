'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  PixelRatio,
} from 'react-native';

class BTIconRow extends Component {
  render() {
  	const { onPress, name, backgroundColor } = this.props;

    return (
    	<View style={styles.row}>
				<Icon.Button
					iconStyle={styles.iconButton}
					name="qq"
					borderRadius={0}
					backgroundColor="#3b5998"
					color="#fff"
					size={30}
					onPress={() => alert(1)} />
				<Icon.Button
					iconStyle={styles.iconButton}
					name="qq"
					borderRadius={0}
					backgroundColor="transparent"
					color="#3b5998"
					size={30}
					onPress={() => alert(2)} />
				<Icon.Button
					iconStyle={styles.iconButton}
					name='qq'
					borderRadius={0}
					backgroundColor="#3b5998"
					color="#fff"
					size={30}
					onPress={() => alert(3)} />
				<Icon.Button
					iconStyle={styles.iconButton}
					name='qq'
					borderRadius={0}
					size={30}
					backgroundColor="transparent"
					color="#3b5998"
					onPress={() => alert(4)} />
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#fff',
		borderColor: '#ccc',
		borderTopWidth: 1 / PixelRatio.get(),
		borderBottomWidth: 1 / PixelRatio.get(),
	},
	iconButton: {
		marginLeft: 10,
		marginRight: 10,
		marginVertical: 10,
	},
});


export default BTIconRow;