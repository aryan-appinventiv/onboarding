
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView, Alert } from 'react-native';
import Images from '../../assets';
import PrimaryButton from '../../components/buttons/primaryButton';
import Toast from 'react-native-simple-toast';

class Verify extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        code: ['', '', '', '','',''],
        attemptsRemaining: 6,
    };
    this.inputs = {};
  }

  handleInputChange = (text, index) => {
    const newCode = [...this.state.code];
    const sanitizedText = text.replace(/[^0-9]/g, ''); 
    newCode[index] = sanitizedText;

    if (sanitizedText && index < 5) {
      this.inputs[index + 1].focus();
    } else if (!sanitizedText && index > 0) {
      this.inputs[index - 1].focus();
    }

    this.setState({ code: newCode });
  };

  handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && index > 0 && !this.state.code[index]) {
      this.inputs[index - 1].focus();
    }
  };

  handleConfirmCode = () => {
    const otpCode = this.state.code.join('');
    if (otpCode.length === 6) {
      console.log("Code confirmed:", otpCode);
    } else {
      this.setState(prevState => ({
        attemptsRemaining: prevState.attemptsRemaining - 1
      }));
    }
  };

  handleResendCode = () => {
    this.setState({
      code: ['', '', '', '','',''], 
    });
    this.inputs[0].focus(); 
  };

  handleLogin = () => {
    if (this.state.code.join('').length !== 6) {
        Toast.showWithGravity(
            'Please enter a valid OTP',
            Toast.SHORT,
            Toast.TOP,
            {
              backgroundColor: '#f04439',
              padding: 10,
              borderRadius: 8,
            },
        );
    }
    else{
      const {navigation} = this.props;
      navigation.navigate('BottomTabNavigator');
   
    }
  };


  

  render() {
    const { code } = this.state;
    const { navigation } = this.props;
    
    return (
      <SafeAreaView style={styles.container}>
         <View style={{justifyContent:'space-around'}}>
        <View style={styles.back}>
          <TouchableOpacity onPress={()=> navigation.replace('AddPhone')}>
            <Image
              source={Images.back_arrow}
              style={styles.backicon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 32 }}>
           
          <Text style={styles.title}>Verify Account Access</Text>
          <Text style={styles.subtitle}>Enter the verification code sent to {'\n'}+1-788-895-5435</Text>
          
          <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.codeInput, digit && styles.successBorder]}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text) => this.handleInputChange(text, index)}
              onKeyPress={(e) => this.handleKeyPress(e, index)}
              value={digit}
              ref={input => (this.inputs[index] = input)}
            />
          ))}
        </View>
      
         

          
          <TouchableOpacity  onPress={this.handleResendCode}>
            <Text style={styles.forget}>Resend</Text>
          </TouchableOpacity>
          </View>
          <View  style={styles.verifyButton}>
          <View>
          <PrimaryButton head={'confirm code'} marg={40} onPress={this.handleLogin}/>

          </View>
          </View>
         
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f3f7"
  },
  back: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 36,
  },
  backicon: {
    left: 20,
    width: 40,
    height: 40,
    border: 2
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 55
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 6,
    color: '#4F5F72'
  },
  subtitle1: {
    fontSize: 14,
    fontWeight:'bold',
    color: '#4F5F72',
  },
  subtitle2: {
    fontSize: 14,
    color: '#7B8293',
    marginTop: 24,
  },
  email: {
    backgroundColor:"#ffffff",
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 12,
    height: 55,
    marginTop: 12,
    marginBottom: 28,
    paddingHorizontal: 17
  },
  pass: {
    backgroundColor:"#ffffff",
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 17
  },

 
  login: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#d2d3d8",
    backgroundColor: 'rgba(49, 60, 74, 1)',
    marginTop: 44,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28
  },
  logintext: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700
  },


  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop:12
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
   
    fontSize: 18,
    textAlign: 'center',
    backgroundColor:"#ffffff",
    borderColor:"#ffffff"
  },
  successBorder: {
    borderColor: '#4CAF50',
  },


});

export default Verify;