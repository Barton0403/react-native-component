'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  RefreshControl
} from 'react-native';

class DownReftrsh extends Component {
	constructor(props) {
	  super(props);
		
		// 下拉刷新触发事件
	  this._onRefresh = this._onRefresh.bind(this);

	  this.state = {
	  	// 决定RefreshControl是否显示
	  	refreshing: false,
	  	// 测试使用，和代码无关
	  	rows: [
	  		"row 0",
	  		"row 1",
	  		"row 2",
	  		"row 3",
	  		"row 4",
	  	]
	  };
	}

	_onRefresh() {
		const { rows } = this.state;

		this.setState({refreshing: true});

		// 异步测试代码
		setTimeout(() => {
			rows.push('Row' + rows.length);
			this.setState({refreshing: false});
		}, 2000);
	}

  render() {
  	const { navigator } = this.props;
  	const { rows } = this.state;

    return (
    	<ScrollView
    		style={styles.scrollView}
    		refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
    	>
    		{rows.map((row, index) => (
						<Text key={index} style={styles.row}>{row}</Text>
				))}
    	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	scrollView: {
		marginTop: 56,
		backgroundColor: '#eaeaea',
	},
	row: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 10,
		backgroundColor: '#fff',
		marginBottom: 10,
	}
});


export default DownReftrsh;