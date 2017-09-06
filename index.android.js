/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import crypto from 'react-native-fast-crypto'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TestRNCrypto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

async function helloCrypto () {
  console.log("Starting crypto")
  try {
    var passwd  = new Uint8Array([45, 80, 92, 250, 67, 86, 92])
    var salt    = new Uint8Array([12, 253, 67, 8, 36, 90, 256, 23, 16, 24, 57])
    let result = await crypto.scrypt(passwd, salt, 16384, 8, 1, 32)
    console.log("crypto ran. result = " + result);
  } catch (e) {
    console.error(e);
  }
}

helloCrypto()

AppRegistry.registerComponent('TestRNCrypto', () => TestRNCrypto);
