import { Text, StyleSheet, SafeAreaView} from 'react-native'
import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView  style={styles.container}>
        <Text>ProfileScreen</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})