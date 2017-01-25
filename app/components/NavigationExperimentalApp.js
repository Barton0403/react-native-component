/**
 * 一个简单的一层架构路由器
 */

'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  NavigationExperimental
} from 'react-native';

import Index from './Index';

// 取出需要用到的组件
const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  Header: NavigationHeader,
} = NavigationExperimental;

class Navigator extends Component {

  constructor(props, context) {
    super(props, context);
    // 原生返回按钮事件
    this._back = this._back.bind(this);

    // 场景配置
    this._renderScene = this._renderScene.bind(this);
    // 配置一个覆盖层
    this._renderOverlay = this._renderOverlay.bind(this);
  }

  // Now we finally get to use the `NavigationCardStack` to render the scenes.
  // 配置NavigationCardStack
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        renderOverlay={this._renderOverlay}
        style={styles.navigator}
      />
    );
  }

  
  _renderScene(sceneProps) {
  	//console.log(sceneProps);

  	let Scene = sceneProps.scene.route.component;

    return (
      <Scene
        navigator={this.props.onNavigationChange}
      />
    );
  }

  _back() {
  	this.props.onNavigationChange('pop');
  }

  _renderOverlay(sceneProps) {
  	// 判断是否显示顶部导航栏
  	// let showNavBar = sceneProps.scene.route.navBar;

    // 这里只是简单的配置了一个默认的顶部导航
    // 可以根据实际项目，自己定制一个需要的顶部导航栏
  	return (
  		<NavigationHeader
  			{...sceneProps}
        renderTitleComponent={(props) => (
      		<NavigationHeader.Title>
      			{props.scene.route.title}
    			</NavigationHeader.Title>
      	)}
        onNavigateBack={this._back}
  		/>
  	);
  }
}

class NavigationExperimentalApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // 初始导航状态
      navigationState: {
        index: 0, // 一级导航
        routes: [{
        	key: 'Index',
        	title: '主页',
        	component: Index,
        	navBar: true,
        }], // 初始状态只有一个场景
      },
    };

    // 判断执行的导航命令
    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  _onNavigationChange(type, route) {
  // Extract the navigationState from the current state:
  let {navigationState} = this.state;

  switch (type) {
    case 'push':
      // 入栈
      navigationState = NavigationStateUtils.push(navigationState, route);
      break;

    case 'pop':
      // 出栈
      navigationState = NavigationStateUtils.pop(navigationState);
      break;
  }

  // 判断状态是否需要改变
  if (this.state.navigationState !== navigationState) {
    this.setState({navigationState});
  }
}

  render() {
    return (
      <Navigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});


export default NavigationExperimentalApp;