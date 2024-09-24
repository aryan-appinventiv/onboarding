import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Images from '../../assets';

class TutorialScreen2 extends Component {

  onPressNext = (navigation) => {
    // navigation.replace('SigninScreen');
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'SigninScreen' }]
 });
  }

  onPressPrevious = (navigation) => {
    navigation.replace('TutorialScreen1');
  }

  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View>
        <Text style={styles.title}>Welcome to the Tutorial</Text>
        <Text style={styles.subtitle}>
          Learn how to use this app more effectively in detail.
        </Text>
        </View>
        <View style={styles.tutoCont}>
        <Image resizeMethod='cover' style={styles.tuto} source={Images.white}/>
        </View>
        <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => this.onPressPrevious(navigation)}
          style={styles.butnCont}>
          <Text style={styles.butn}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.onPressNext(navigation)}
          style={styles.butnCont}>
          <Text style={styles.butn}>Next</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'skyblue',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf:'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 40,
    alignSelf:'center',
  },
  butnCont:{
    borderRadius:5,
    backgroundColor:'white',
    padding:5,
    width: 100,
    
  },
  butn:{
    color:'white',
    fontSize:20,
    fontWeight:'600',
    color:'#663300',
    textAlign:'center'
  },
  tutoCont:{
    width:200,
    height:200,
    alignSelf:'center',
  },
  tuto:{
    width:200,
    height:200,
    resizeMode:'contain',
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-around',
  }
});

export default TutorialScreen2;
