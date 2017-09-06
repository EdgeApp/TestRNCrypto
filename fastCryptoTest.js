/**
 * Created by paul on 9/5/17.
 */
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
  constructor (props) {
    super(props)
    this.state = {
      status: 'Testing...'
    }
  }

  componentDidMount () {
    async function test (t) {
      try {
        await testRNFastCrypto()
        console.log('Success')
        t.setState({status: 'Success'})
      } catch (e) {
        console.log(e)
        t.setState({status: 'Failed'})
      }
    }

    test(this)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          { this.state.status }
        </Text>
      </View>
    )
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

const checkVal = [89, 199, 21, 130, 17, 137, 139, 168, 34, 81, 4, 42, 10, 189, 176, 6, 98, 206, 15, 141, 97, 221, 165, 201, 92, 73, 106, 141, 97, 201, 236, 229]

async function testRNFastCrypto () {
  let passwd  = Uint8Array.from([45, 80, 92, 250, 67, 86, 92])
  let salt    = Uint8Array.from([12, 253, 67, 8, 36, 90, 256, 23, 16, 24, 57])
  const result = await crypto.scrypt(passwd, salt, 16384, 8, 1, 32)
  const arrayVal = Array.from(result)

  for (let n = 0; n < result.length; n++) {
    if (result[n] !== checkVal[n]) {
      throw new Error('FAILED scrypt test')
    }
  }
}
