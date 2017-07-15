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
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
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
  let passwd  = Uint8Array.from([45, 80, 92, 250, 67, 86, 92])
  let salt    = Uint8Array.from([12, 253, 67, 8, 36, 90, 256, 23, 16, 24, 57])
  const result = await crypto.scrypt(passwd, salt, 16384, 8, 1, 32)
  console.log(result)
}

helloCrypto()

AppRegistry.registerComponent('TestRNCrypto', () => TestRNCrypto);
