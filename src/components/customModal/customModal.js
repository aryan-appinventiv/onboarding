import { Text, StyleSheet, View, Image, TouchableOpacity, Modal} from 'react-native'
import React, { Component } from 'react'

export default class CustomModal extends Component {
  render() {
    const {visible, heading, description, img, btnTxt, btnNo, btnNoVar} = this.props;
    return (
        <Modal
        transparent
        visible={visible}
        animationType="fade"
        >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image source={img} />
            <Text style={styles.accountText}>{heading}</Text>
            <Text style={styles.modalText}>
            {description}
            </Text>
            <View style={styles.btnCont}>

              {btnNoVar && (<TouchableOpacity
              onPress={this.props.onPressNo}
              style={[styles.primaryCont,{backgroundColor:'#F6F7F7'}]} >
              <Text style={[styles.primary,{color:'black'}]}>{btnNo}</Text>
            </TouchableOpacity>)}
            
            <TouchableOpacity
              onPress={this.props.onPress}
              style={styles.primaryCont} >
              <Text style={styles.primary}>{btnTxt}</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        width: 346,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 60,
      },
      accountText: {
        marginTop: 16,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#0B1721',
      },
      modalText: {
        color: '#60707D',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '400',
        marginTop: 6,
        marginBottom: 28,
      },
      primaryCont: {
        backgroundColor: 'rgba(42, 123, 187, 1)',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
      },
     
      primary: {
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
      },
    
      btnCont:{
        flexDirection:'row'
      }
})