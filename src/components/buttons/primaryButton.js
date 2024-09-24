import { Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Strings from '../../utils/string';


export default class primaryButton extends Component {
  render() {
    const {marg,head} = this.props;
    return (
        <TouchableOpacity onPress={this.props.onPress} style={[styles.primaryCont, {marginTop: marg}]}>
           <Text style={styles.primary}>{head}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  
    primary:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    primaryCont:{
        backgroundColor:'rgba(42, 123, 187, 1)',
        marginHorizontal:24,
        alignItems:'center',
        padding: 15,
        borderRadius: 8, 
    },
  
})