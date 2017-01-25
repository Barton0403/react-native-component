'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Modal,
} from 'react-native';

class ModelExmple extends Component {
  render() {
  	const { animationType, transparent, visible, closeModel, onShow } = this.props;

    // 设置整个背景透明度
  	let modalBackgroundStyle = {
      backgroundColor: transparent ? 'transparent' : 'rgba(0, 0, 0, 0.5)',
    };
    // 设置弹出框背景
    let innerContainerTransparentStyle = transparent
      ? {backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 20}
      : {backgroundColor: '#fff', padding: 20};
    // 设置内容字体颜色
    let textTransparentStyle = transparent
      ? {color: '#fff'}
      : {color: '#000'};

    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={visible}
        onRequestClose={closeModel}
        onShow={onShow}
        >
        <View style={[styles.container, modalBackgroundStyle]}>
          <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
            <Text style={[styles.text, textTransparentStyle]}>This is a modal in Navigator Scene</Text>
            <Text style={[styles.text, textTransparentStyle]}>根据route</Text>
            <Text style={[styles.text, textTransparentStyle]}>改变Navigator内的Model</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '200',
  }
});


export default ModelExmple;