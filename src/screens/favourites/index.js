import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Favourites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Favourites</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})