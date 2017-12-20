/**
 * Created by paul on 9/5/17.
 */
/**
 * Sample React Native App for testing react-native-fast-crypto
 */
import crypto from 'react-native-fast-crypto'

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class TestRNCrypto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'Testing...'
    }
  }

  async runtest () {
    testScrypt(this.log)
  }

  log = (s) => {
    const newlog = this.state.status + '\n' + s
    this.setState({ status: newlog })
  }

  componentDidMount () {
    this.runtest()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.status}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5
  // }
})

const checkVal = [
  89,
  199,
  21,
  130,
  17,
  137,
  139,
  168,
  34,
  81,
  4,
  42,
  10,
  189,
  176,
  6,
  98,
  206,
  15,
  141,
  97,
  221,
  165,
  201,
  92,
  73,
  106,
  141,
  97,
  201,
  236,
  229
]

async function testScrypt (log) {
  const passwd = Uint8Array.from([45, 80, 92, 250, 67, 86, 92])
  const salt = Uint8Array.from([12, 253, 67, 8, 36, 90, 256, 23, 16, 24, 57])
  const result = await crypto.scrypt(passwd, salt, 16384, 8, 1, 32)

  for (let n = 0; n < result.length; n++) {
    if (result[n] !== checkVal[n]) {
      log('FAILED scrypt')
      return
    }
  }
  log('PASSED scrypt')
}
