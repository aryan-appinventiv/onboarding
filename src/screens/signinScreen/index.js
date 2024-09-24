import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
  
} from 'react-native';
import React, {Component} from 'react';
import Images from '../../assets';
import Strings from '../../utils/string';
import PrimaryButton from '../../components/buttons/primaryButton';
import Toast from 'react-native-simple-toast';
import CustomModal from '../../components/customModal/customModal';

export default class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      loginAttempts: 0,
      isAccountLocked: false,
      showModal: false,
    };
  }

  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  goto= () => {this.setState({showModal: false})}

  togglePass = () => {
    this.setState({showPass: !this.state.showPass});
  };

  validateEmail = email => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      this.setState({emailError: Strings.email_error});
      return false;
    } else {
      this.setState({emailError: ''});
      return true;
    }
  };

  validatePassword = password => {
    if (password.length < 6) {
      this.setState({passwordError: Strings.pass_error});
      return false;
    } else {
      this.setState({passwordError: ''});
      return true;
    }
  };

  handleEmailChange = value => {
    this.setState({email: value}, () => this.validateEmail(value));
  };

  handlePasswordChange = value => {
    this.setState({password: value}, () => this.validatePassword(value));
  };

  updateLogin = () => {
    const newLoginAttempts = this.state.loginAttempts + 1;
    this.setState({loginAttempts: newLoginAttempts});

    if (newLoginAttempts >= 5) {
      this.setState({isAccountLocked: true});
      this.setState({showModal: true});
    } else {
      Toast.showWithGravity(
        'Invalid credentials. Please try again',
        Toast.SHORT,
        Toast.TOP,
        {
          backgroundColor: '#f04439',
          padding: 10,
          borderRadius: 8,
        },
      );
    }
  };

  onLogin = () => {
    const {email, password, isAccountLocked} = this.state;
    const default_email = 'ex@gmail.com';
    const default_password = '123456';

    if (isAccountLocked) {
        this.setState({showModal: true});
      return;
    }

    const isEmailValid = this.validateEmail(email);
    const isPasswordValid = this.validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      if (email === default_email && password === default_password) {
        this.setState({loginAttempts: 0});
        Toast.showWithGravity(
          'Success! Login successful',
          Toast.SHORT,
          Toast.TOP,
          {
            backgroundColor: 'lightgreen',
            padding: 10,
            borderRadius: 8,
          },
         
        );
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTabNavigator' }]
     });
        
      } else {
        this.updateLogin();
      }
    } else {
      this.updateLogin();
    }
  };

  

  render() {
    const {showPass, email, password, emailError, passwordError} = this.state;
    const emailBorderColor = emailError ? 'red' : 'white';
    const passwordBorderColor = passwordError ? 'red' : 'white';
    const emailTintColor = emailError ? 'red' : '#46a4ba';
    const passwordTintColor = passwordError ? 'red' : '#46a4ba';
    const emailUpperColor = emailError ? 'red' : 'gray';
    const passwordUpperColor = passwordError ? 'red' : 'gray';

    const data = [
      {id: 1, text1: 'Aesthetical', text2: 'Graphics', img: Images.L1},
      {id: 2, text1: 'Real time', text2: 'Statistics', img: Images.L2},
      {id: 3, text1: 'Track economy', text2: 'Usage', img: Images.L1},
    ];

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
       
        <CustomModal
           visible={this.state.showModal}
           onPress={this.goto}
           heading={Strings.account_locked}
           description={Strings.locked}
           img = {Images.lock}
           btnTxt = {'Okay'}
        />
        <View style={styles.top}>
          <ImageBackground source={Images.imgBack} style={styles.imgBack} />
          <View style={styles.topInside}>
            <Image style={styles.white2} source={Images.white2} />
            <Image
              style={styles.quivioYourPersonal}
              source={Images.quivioYourPersonal}
            />
            <FlatList
              style={styles.flatList}
              data={data}
              renderItem={({item}) => {
                return (
                  <View style={styles.flat}>
                    <View>
                      <Image source={item.img} />
                    </View>
                    <View>
                      <Text style={styles.text}>{item.text1}</Text>
                      <Text style={styles.text}>{item.text2}</Text>
                    </View>
                  </View>
                );
              }}
              horizontal={true}
              ItemSeparatorComponent={<View style={{width: 60}}></View>}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
          <ScrollView bounces={false}>
            <View style={styles.bottom}>
              <View style={styles.bottom1}>
                <Text style={styles.signin}>{Strings.signin}</Text>
                <Text style={styles.signinText}>{Strings.signinText}</Text>
              </View>

              <View>
                <View
                  style={[styles.textinput1, {borderColor: emailBorderColor}]}>
                  <Image
                    source={Images.email}
                    style={{flex: 1, tintColor: emailTintColor}}
                  />
                  <View style={{flex: 11}}>
                    {email ? (
                      <Text style={[styles.upper, {color: emailUpperColor}]}>
                        Email Address
                      </Text>
                    ) : null}
                    <TextInput
                      style={styles.textinput11}
                      placeholder="Email Address"
                      placeholderTextColor={'gray'}
                      autoCapitalize="none"
                      value={email}
                      onChangeText={this.handleEmailChange}
                      onBlur={() => this.validateEmail(email)}
                    />
                  </View>
                </View>
                {emailError ? (
                    <View style={styles.errorView}>
                   <Image style={styles.errorIcon} source={Images.alert_circle}/>   
                  <Text style={styles.errorText}>{emailError}</Text>
                  </View>
                ) : null}
              </View>

              <View>
                <View
                  style={[
                    styles.textinput1,
                    {borderColor: passwordBorderColor},
                  ]}>
                  <Image
                    source={Images.pass}
                    style={{flex: 1, tintColor: passwordTintColor}}
                  />
                  <View style={{flex: 11}}>
                    {password ? (
                      <Text style={[styles.upper, {color: passwordUpperColor}]}>
                        Password
                      </Text>
                    ) : null}
                    <TextInput
                      secureTextEntry={showPass}
                      style={styles.textinput11}
                      placeholder="Password"
                      placeholderTextColor={'gray'}
                      value={password}
                      onChangeText={this.handlePasswordChange}
                      onBlur={() => this.validatePassword(password)}
                    />
                  </View>
                  <TouchableOpacity onPress={this.togglePass}>
                    <Image
                      style={styles.eyeImg}
                      source={showPass ? Images.eye : Images.hide}
                    />
                  </TouchableOpacity>
                </View>
                {passwordError ? (
                    <View style={styles.errorView}>
                        <Image style={styles.errorIcon} source={Images.alert_circle}/>
                        <Text style={styles.errorText}>{passwordError}</Text>
                  </View>
                ) : null}
              </View>

              <View style={styles.forgotText}>
                <TouchableOpacity onPress={()=> {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'ForgotScreen' }]
   })}}>
                  <Text style={styles.forgot}>{Strings.forgot_pass}</Text>
                </TouchableOpacity>
              </View>

              <PrimaryButton 
                    onPress={this.onLogin} 
                    marg={38} head={'Primary'}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBack: {
    width: '100%',
    height: '100%',
  },
  top: {
    flex: Platform.OS === 'ios' ? 3.5: 4.5,
  },
  bottom: {
    flex: 5,
    backgroundColor: '#e7edf3',
  },
  topInside: {
    position: 'absolute',
    paddingLeft: 30,
    paddingTop: 90,
  },
  quivioYourPersonal: {
    marginTop: 27,
  },
  flat: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  flatList: {
    marginTop: 80,
  },
  text: {
    color: 'white',
  },
  signin: {
    fontWeight: '700',
    fontSize: 24,
  },
  signinText: {
    color: 'rgba(79, 95, 114, 1)',
    fontWeight: '400',
    fontSize: 15,
    paddingTop: 4,
  },
  bottom1: {
    paddingLeft: 30,
    paddingTop: 32,
  },
  textinput1: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 27,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  forgot: {
    fontWeight: '600',
  },
  forgotText: {
    marginTop: 28,
    marginHorizontal: 24,
    alignItems: 'flex-end',
  },
  upper: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  eyeImg: {
    width: 20,
    height: 20,
    flex: 1,
    resizeMode: 'contain',
  },
  errorView:{
    flexDirection:'row',
  },
  errorIcon:{
    marginLeft:24,
    marginTop:5,
  },
  errorText: {
    fontSize: 12,
    marginTop: 5,
    marginLeft:5
  },
  textinput11: {
    flex: 10,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  
});

// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
// import BackgroundImage from '../../components/BackgroundImage';
// import CustomTextInput from '../../components/CustomTextInput';
// import AccountLockedModal from '../../components/AccountLockedModal';
// import styles from './styles';
// import Toast from 'react-native-toast-message';
// import { NavigationContext } from '@react-navigation/native';
// class SigninScreen extends Component {
//     static contextType = NavigationContext;
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       errors: {},
//       isModalVisible: false,
//       flag: true,
//     };
//   }

//   handleEmailChange = (email) => {
//     this.setState({ email }, this.validateInputs);
//   };

//   handlePasswordChange = (password) => {
//     this.setState({ password }, this.validateInputs);
//   };

//   validateInputs = () => {
//     const { email, password } = this.state;
//     const errors = {};

//     if (!email.trim()) {
//       errors.email = 'Email Address is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Email Address is invalid';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     }

//     this.setState({ errors });
//   };

//   handleLogin = () => {
//     const { email, password } = this.state;
//     const validEmail = 'Test@gmail.com';
//     const validPassword = '123';

//     if (email !== validEmail || password !== validPassword) {
//       Toast.show({
//         type: 'error',
//         text1: 'Invalid credentials. Please try again',
//       });
//       return;
//     }

//     Toast.show({
//       type: 'success',
//       text1: 'Login successful!',
//     });
//   };

//   handleHelp = () => {
//     this.setState({ isModalVisible: true });
//   };

//   closeModal = () => {
//     this.setState({ isModalVisible: false });
//   };

//   isButtonDisabled = () => {
//     const { email, password, errors } = this.state;
//     return Object.keys(errors).length > 0 || !email || !password;
//   };

//   handleClickPassword=()=>{
//     const navigation = this.context;
//             navigation.navigate('forgetPassword');
//   }

//   handlePress = () => {
//     const { email, password } = this.state;
//     const validEmail = 'Test@gmail.com';
//     const validPassword = '123';

//     if (email !== validEmail || password !== validPassword) {
//       this.handleLogin();
//     } else {
//       this.handleHelp();
//     }
//   };

//   render() {
//     const { email, password, errors, isModalVisible } = this.state;
//     const buttonDisabled = this.isButtonDisabled();

//     return (
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.container}
//       >
//         <BackgroundImage>
//           <View style={styles.loginBox}>
//             <Text style={styles.title}>Sign In</Text>
//             <Text style={styles.subtitle}>with your valid credentials</Text>

//             <CustomTextInput
//               email={email}
//               password={password}
//               handleEmailChange={this.handleEmailChange}
//               handlePasswordChange={this.handlePasswordChange}
//               errors={errors}
//             />

//             <TouchableOpacity onPress={this.handleClickPassword}>
//               <Text style={styles.forgotPassword}>Forgot Password</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[styles.loginButton, buttonDisabled ? styles.loginButtonDisabled : styles.loginButtonEnabled]}
//               onPress={this.handlePress}
//               disabled={buttonDisabled}
//             >
//               <Text style={styles.loginButtonText}>Primary</Text>
//             </TouchableOpacity>
//           </View>
//         </BackgroundImage>

//         <AccountLockedModal
//           visible={isModalVisible}
//           closeModal={this.closeModal}
//         />
//       </KeyboardAvoidingView>
//     )
//   }
// }

// export default SigninScreen;
