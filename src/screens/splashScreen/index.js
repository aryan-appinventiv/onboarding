
import React, {Component} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Images from '../../assets';


class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('TutorialScreen1');
    }, 2000);
  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.landing_page} style={styles.landing}/>
        <Image source={Images.white} style={styles.white}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  white:{
    position:'absolute',

  },
  landing:{
    width:'100%',
    height:'100%',
  }

});

export default SplashScreen;
