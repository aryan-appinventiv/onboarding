import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Images from '../../assets';

class TutorialScreen1 extends Component {

  onPress = (navigation) => {
    navigation.replace('TutorialScreen2');
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.title}>Welcome to the Tutorial</Text>
        <Text style={styles.subtitle}>
          Learn how to use this app effectively.
        </Text>
        </View>
        <View style={styles.tutoCont}>
        <Image resizeMethod='cover' style={styles.tuto} source={Images.white}/>
        </View>
        <TouchableOpacity
          onPress={() => this.onPress(navigation)}
          style={styles.butnCont}>
          <Text style={styles.butn}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#486284',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 40,
    alignSelf:'center',
  },
  butnCont:{
    backgroundColor:'white',
    borderRadius:5,
    padding:5,
    width:100,
  },
  butn:{
    color:'#486284',
    fontSize:20,
    fontWeight:'600',
    textAlign:'center',
  },
  tutoCont:{
    width:200,
    height:200,
  },
  tuto:{
    width:200,
    height:200,
    resizeMode:'contain'
  },
 
});

export default TutorialScreen1;
