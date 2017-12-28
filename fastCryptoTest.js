/**
 * Created by paul on 9/5/17.
 */
/**
 * Sample React Native App for testing react-native-fast-crypto
 */
import crypto from 'react-native-fast-crypto'

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Buffer = require('buffer/').Buffer

export default class TestRNCrypto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'Testing...'
    }
  }

  async runtest () {
    await testScrypt(this.log)
    await testPublicKeyCreate(this.log)
    await testPrivateKeyTweakAdd(this.log)
    await testPublicKeyTweakAdd(this.log)
    await testPbkdf2Sha512(this.log)
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 5
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
  let privateKeyHex
  let publicKeyHex
  let result
  let time
  let testName
  let privateKey

  testName = 'secp256k1.publicKeyCreate 1'
  privateKeyHex = '7bd083869bd02e57786d119a81d406ac1524a765470acee90834c60f841e6236'
  publicKeyHex = '02fce1b65c7470270fb89e5aa1dda253406b3370b948eae8a2a3539c4f25894283'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  result = await crypto.secp256k1.publicKeyCreate(privateKey, true)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== publicKeyHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + ' Time:' + time.toString())

  testName = 'secp256k1.publicKeyCreate 2'
  privateKeyHex = 'e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35'
  publicKeyHex = '0339a36013301597daef41fbe593a02cc513d0b55527ec2df1050e2e8ff49c85c2'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  result = await crypto.secp256k1.publicKeyCreate(privateKey, true)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== publicKeyHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + ' Time:' + time.toString())

  testName = 'secp256k1.publicKeyCreate 3'
  privateKeyHex = 'b7aaa6c8f5b4013e7b1755ae877b9fad530e9b2e86f68cec7420a6cea38e81b0'
  publicKeyHex = '031cd583c3ffb87477c539012859195f821e33b16435e8f3da0b40247056158618'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  result = await crypto.secp256k1.publicKeyCreate(privateKey, true)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== publicKeyHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + ' Time:' + time.toString())

  testName = 'secp256k1.publicKeyCreate 4'
  privateKeyHex = '00000055378cf5fafb56c711c674143f9b0ee82ab0ba2924f19b64f5ae7cdbfd'
  publicKeyHex = '02b3e3e297165289611a2387e8089fcaf099926e4d31fdddb50c0ae0dfa36c97e6'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  result = await crypto.secp256k1.publicKeyCreate(privateKey, true)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== publicKeyHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + ' Time:' + time.toString())

  testName = 'secp256k1.publicKeyCreate 5'
  privateKeyHex = 'f1d52574bfbc006ef23c6f513fb1cfd76fe8f6fedd842ac9ca62f1722a5c24c7'
  publicKeyHex = '02d87551d78c8bf6ea5bfacf9d547e864833f41b337a8de2cac89c891e9b98bff9'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  result = await crypto.secp256k1.publicKeyCreate(privateKey, true)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== publicKeyHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + ' Time:' + time.toString())

  testName = 'secp256k1.publicKeyCreate 6'
  privateKeyHex = '8eb1015391987e1e83c95ffe3352b61387dc2a78b6da813c8e35231f3a1ebcb7'
  publicKeyHex = '028296aa04520743938d2bedd5999294e0882fc341075918e0e8df3e74ba9916ef'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  result = await crypto.secp256k1.publicKeyCreate(privateKey, true)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== publicKeyHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + ' Time:' + time.toString())

  log('PASSED secp256k1.publicKeyCreate ALL')
}

async function testPrivateKeyTweakAdd (log) {
  let privateKeyHex
  let tweakHex
  let privateKeyTweakAddHex
  let privateKey
  let tweak
  let result
  let time
  let testName

  testName = 'secp256k1.privateKeyTweakAdd 1'
  privateKeyHex = '7bd083869bd02e57786d119a81d406ac1524a765470acee90834c60f841e6236'
  tweakHex = 'e65bfe78107a0d9b60086753695f7e0b55ae4dd1248f2779803582c27a946ea1'
  privateKeyTweakAddHex = '622c81feac4a3bf2d87578edeb3384b8b024184fbc515626c897ea452e7c8f96'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  tweak = Buffer.from(tweakHex, 'hex')
  result = await crypto.secp256k1.privateKeyTweakAdd(privateKey, tweak)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== privateKeyTweakAddHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())

  testName = 'secp256k1.privateKeyTweakAdd 2'
  privateKeyHex = 'f1c7c871a54a804afe328b4c83a1c33b8e5ff48f5087273f04efa83b247d6a2d'
  tweakHex = 'c9b5714c12f44f0df4caf76a557670dfeb4310bd7db193b6370b5ad5ccde8337'
  privateKeyTweakAddHex = 'bb7d39bdb83ecf58f2fd82b6d918341cbef428661ef01ab97c28a4842125ac23'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  tweak = Buffer.from(tweakHex, 'hex')
  result = await crypto.secp256k1.privateKeyTweakAdd(privateKey, tweak)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== privateKeyTweakAddHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())

  testName = 'secp256k1.privateKeyTweakAdd 3'
  privateKeyHex = '704addf544a06e5ee4bea37098463c23613da32020d604506da8c0518e1da4b7'
  tweakHex = '817cea7c60aa11ec1973e7dbeb5b87182d22516f2fb122ee9746e7e9965fc576'
  privateKeyTweakAddHex = 'f1c7c871a54a804afe328b4c83a1c33b8e5ff48f5087273f04efa83b247d6a2d'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  tweak = Buffer.from(tweakHex, 'hex')
  result = await crypto.secp256k1.privateKeyTweakAdd(privateKey, tweak)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== privateKeyTweakAddHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())

  testName = 'secp256k1.privateKeyTweakAdd 4'
  privateKeyHex = '877c779ad9687164e9c2f4f0f4ff0340814392330693ce95a58fe18fd52e6e93'
  tweakHex = 'e8ce665a6b37fcf9fafbae7fa34738e19aa8edd3c98ad5f687eb3d4e89257765'
  privateKeyTweakAddHex = '704addf544a06e5ee4bea37098463c23613da32020d604506da8c0518e1da4b7'
  time = Date.now()
  privateKey = Buffer.from(privateKeyHex, 'hex')
  tweak = Buffer.from(tweakHex, 'hex')
  result = await crypto.secp256k1.privateKeyTweakAdd(privateKey, tweak)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== privateKeyTweakAddHex) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())

  log('PASSED secp256k1.privateKeyTweakAdd ALL')
}

async function testPublicKeyTweakAdd (log) {
  const publicKeyHex = '02fce1b65c7470270fb89e5aa1dda253406b3370b948eae8a2a3539c4f25894283'
  const tweakHex = '5e7ab5c14484291796c82b7ffd7ae72bc6a57cc53cc0d3b4312ddcf050c4a8af'
  const publicKeyTweakAddHex = '02e7eddf4cfa267c3b33a7e9387f28c55b6e806a79824c797b0f5acdfcdccc73e8'
  const publicKey = Buffer.from(publicKeyHex, 'hex')
  const tweak = Buffer.from(tweakHex, 'hex')
  let time = Date.now()
  let result = await crypto.secp256k1.publicKeyTweakAdd(publicKey, tweak, true)
  result = result.toString('hex')
  time = Date.now() - time
  if (result !== publicKeyTweakAddHex) {
    log('FAILED secp256k1.publicKeyTweakAdd 1')
    return
  }
  log('PASSED secp256k1.publicKeyTweakAdd 1. Time:' + time.toString())

  log('PASSED secp256k1.publicKeyTweakAdd ALL')
}

async function testPbkdf2Sha512 (log) {
  let key = ''
  let salt = ''
  let iter = 0
  let outputBytes = 0
  let result = ''
  let time = 0
  let hash = ''
  let keyBuf = []
  let saltBuf = []
  let testName = ''

  testName = 'pbkdf2.deriveAsync 1'
  key = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'
  salt = 'mnemonicTREZOR'
  hash = 'c55257c360c07c72029aebc1b53c05ed0362ada38ead3e3e9efa3708e53495531f09a6987599d18264c1e1c92f2cf141630c7a3c4ab7c81b2f001698e7463b04'
  iter = 2048
  outputBytes = 64
  time = Date.now()
  keyBuf = Buffer.from(key, 'utf8')
  saltBuf = Buffer.from(salt, 'utf8')
  result = await crypto.pbkdf2.deriveAsync(keyBuf, saltBuf, iter, outputBytes, 'sha512')
  result = result.toString('hex')
  time = Date.now() - time
  if (result.toLowerCase() !== hash.toLowerCase()) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())

  testName = 'pbkdf2.deriveAsync 2'
  key = 'passDATAb00AB7YxDTT'
  salt = 'saltKEYbcTcXHCBxtjD'
  hash = 'CBE6088AD4359AF42E603C2A33760EF9D4017A7B2AAD10AF46F992C660A0B461ECB0DC2A79C2570941BEA6A08D15D6887E79F32B132E1C134E9525EEDDD744FA'
  iter = 1
  outputBytes = 64
  time = Date.now()
  keyBuf = Buffer.from(key, 'utf8')
  saltBuf = Buffer.from(salt, 'utf8')
  result = await crypto.pbkdf2.deriveAsync(keyBuf, saltBuf, iter, outputBytes, 'sha512')
  result = result.toString('hex')
  time = Date.now() - time
  if (result.toLowerCase() !== hash.toLowerCase()) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())

  testName = 'pbkdf2.deriveAsync 3'
  key = 'legal winner thank year wave sausage worth useful legal winner thank yellow'
  salt = 'mnemonicTREZOR'
  hash = '2e8905819b8723fe2c1d161860e5ee1830318dbf49a83bd451cfb8440c28bd6fa457fe1296106559a3c80937a1c1069be3a3a5bd381ee6260e8d9739fce1f607'
  iter = 2048
  outputBytes = 64
  time = Date.now()
  keyBuf = Buffer.from(key, 'utf8')
  saltBuf = Buffer.from(salt, 'utf8')
  result = await crypto.pbkdf2.deriveAsync(keyBuf, saltBuf, iter, outputBytes, 'sha512')
  result = result.toString('hex')
  time = Date.now() - time
  if (result.toLowerCase() !== hash.toLowerCase()) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())

  testName = 'pbkdf2.deriveAsync 4'
  key = 'letter advice cage absurd amount doctor acoustic avoid letter advice cage above'
  salt = 'mnemonicTREZOR'
  hash = 'd71de856f81a8acc65e6fc851a38d4d7ec216fd0796d0a6827a3ad6ed5511a30fa280f12eb2e47ed2ac03b5c462a0358d18d69fe4f985ec81778c1b370b652a8'
  iter = 2048
  outputBytes = 64
  time = Date.now()
  keyBuf = Buffer.from(key, 'utf8')
  saltBuf = Buffer.from(salt, 'utf8')
  result = await crypto.pbkdf2.deriveAsync(keyBuf, saltBuf, iter, outputBytes, 'sha512')
  result = result.toString('hex')
  time = Date.now() - time
  if (result.toLowerCase() !== hash.toLowerCase()) {
    log('FAILED ' + testName)
    return
  }
  log('PASSED ' + testName + '. Time:' + time.toString())
}
