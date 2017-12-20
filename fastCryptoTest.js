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
    testPublicKeyCreate(this.log)
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

async function testPublicKeyCreate (log) {
  let privateKeyHex = '7bd083869bd02e57786d119a81d406ac1524a765470acee90834c60f841e6236'
  let publicKeyHex = '02fce1b65c7470270fb89e5aa1dda253406b3370b948eae8a2a3539c4f25894283'
  let result
  let time
  privateKeyHex = '7bd083869bd02e57786d119a81d406ac1524a765470acee90834c60f841e6236'
  publicKeyHex = '02fce1b65c7470270fb89e5aa1dda253406b3370b948eae8a2a3539c4f25894283'
  time = Date.now()
  result = await crypto.secp256k1.publicKeyCreate(privateKeyHex, true)
  time = Date.now() - time
  if (result !== publicKeyHex) {
    log('FAILED secp256k1.publicKeyCreate 1')
    return
  }
  log('PASSED secp256k1.publicKeyCreate 1. Time:' + time.toString())

  privateKeyHex = 'e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35'
  publicKeyHex = '0339a36013301597daef41fbe593a02cc513d0b55527ec2df1050e2e8ff49c85c2'
  result = await crypto.secp256k1.publicKeyCreate(privateKeyHex, true)
  if (result !== publicKeyHex) {
    log('FAILED secp256k1.publicKeyCreate 2')
    return
  }
  log('PASSED secp256k1.publicKeyCreate 2')

  privateKeyHex = 'b7aaa6c8f5b4013e7b1755ae877b9fad530e9b2e86f68cec7420a6cea38e81b0'
  publicKeyHex = '031cd583c3ffb87477c539012859195f821e33b16435e8f3da0b40247056158618'
  result = await crypto.secp256k1.publicKeyCreate(privateKeyHex, true)
  if (result !== publicKeyHex) {
    log('FAILED secp256k1.publicKeyCreate 3')
    return
  }
  log('PASSED secp256k1.publicKeyCreate 3')

  privateKeyHex = '00000055378cf5fafb56c711c674143f9b0ee82ab0ba2924f19b64f5ae7cdbfd'
  publicKeyHex = '02b3e3e297165289611a2387e8089fcaf099926e4d31fdddb50c0ae0dfa36c97e6'
  result = await crypto.secp256k1.publicKeyCreate(privateKeyHex, true)
  if (result !== publicKeyHex) {
    log('FAILED secp256k1.publicKeyCreate 4')
    return
  }
  log('PASSED secp256k1.publicKeyCreate 4')

  privateKeyHex = 'f1d52574bfbc006ef23c6f513fb1cfd76fe8f6fedd842ac9ca62f1722a5c24c7'
  publicKeyHex = '02d87551d78c8bf6ea5bfacf9d547e864833f41b337a8de2cac89c891e9b98bff9'
  result = await crypto.secp256k1.publicKeyCreate(privateKeyHex, true)
  if (result !== publicKeyHex) {
    log('FAILED secp256k1.publicKeyCreate 5')
    return
  }
  log('PASSED secp256k1.publicKeyCreate 5')

  privateKeyHex = '8eb1015391987e1e83c95ffe3352b61387dc2a78b6da813c8e35231f3a1ebcb7'
  publicKeyHex = '028296aa04520743938d2bedd5999294e0882fc341075918e0e8df3e74ba9916ef'
  result = await crypto.secp256k1.publicKeyCreate(privateKeyHex, true)
  if (result !== publicKeyHex) {
    log('FAILED secp256k1.publicKeyCreate 6')
    return
  }
  log('PASSED secp256k1.publicKeyCreate 6')

  log('PASSED secp256k1.publicKeyCreate ALL')
}
