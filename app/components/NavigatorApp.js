'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Navigator,
  Text,
  TouchableOpacity
} from 'react-native';

import Index from './Index';
import ModelExmple from './ModelExmple';

// 导航栏
const NavigationBarRouteMapper = {

  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null;
    }

    // 获取上个route
    let previousRoute = navState.routeStack[index - 1];
    return (
      <Icon.Button
          name="chevron-left"
          borderRadius={0}
          backgroundColor="#fff"
          color="#000"
          size={16}
          onPress={() => navigator.pop()}>
        {previousRoute.title}   
      </Icon.Button>
    );
  },

  RightButton: (route, navigator, index, navState) => {
    return null;
  },

  Title: (route, navigator, index, navState) => {
    return <Text style={styles.navBarText}>{route.title}</Text>;
  },

};

class NavigatorApp extends Component {
	constructor(props) {
	  super(props);
		this._renderScene=this._renderScene.bind(this);
	  this.state = {
      modalVisible: false,
    };
	}

	_renderScene(route, navigator) {
    const { modalVisible } = this.state;
		let Scene = route.component;

		return (
      <View style={{flex: 1}}>
        <ModelExmple
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          closeModel={() => this.setState({modalVisible: false})}
          onShow={() => console.log('modelShow')}
        />
        <Scene 
          navigator={navigator}
          showModel={() => {
            this.setState({modalVisible: true});

            setTimeout(() => this.setState({modalVisible: false}), 2000);
          }}
        />
      </View>
		);
	}

  render() {
    let { showNavBar } = this.state;
    const navigationBar = (
      <Navigator.NavigationBar
        routeMapper={NavigationBarRouteMapper}
        style={[styles.navBar]}
      />
    );

    
      return (
        <Navigator
          initialRoute={{title: '主页', component: Index, navBar: true}}
          renderScene={this._renderScene}
          navigationBar={navigationBar}
        />
      );
  }
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#EAEAEA',
    paddingTop: 44,
  },
  navBar: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  navBarText: {
    fontSize:   16,
    fontWeight: '500',
    color: '#000',
  },
});


export default NavigatorApp;