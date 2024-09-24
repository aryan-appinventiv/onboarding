import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Strings from '../../utils/string';
import Images from '../../assets';
import PrimaryButton from '../../components/buttons/primaryButton';
import Toast from 'react-native-simple-toast';
import CustomModal from '../../components/customModal/customModal';

export default class ResetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      passwordError: '',
      showPass: true,
      showPass2: true,
      showModal: false,
      conditions: {
        length: false,
        specialChar: false,
        number: false,
        case: false,
      },
    };
  }

  togglePass = () => {
    this.setState({showPass: !this.state.showPass});
  };
  togglePass2 = () => {
    this.setState({showPass2: !this.state.showPass2});
  };

  handlePasswordChange = value => {
    this.setState({
      password: value,
      conditions: {
        length: value.length >= 8,
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        number: /\d/.test(value),
        case: /(?=.*[a-z])(?=.*[A-Z])/.test(value),
      },
    });
  };

  handleConfirmPasswordChange = value => {
    this.setState({
      confirmPassword: value,
      passwordError:
        value === this.state.password ? '' : 'Passwords do not match',
    });
  };

  onLogin=()=>{
    if(this.state.conditions.case  && this.state.conditions.length && this.state.conditions.number && this.state.conditions.specialChar && !this.state.passwordError){
      this.setState({showModal:true});
    }
    else{
        Toast.showWithGravity(
            'Your password does not match',
            Toast.SHORT,
            Toast.TOP,
            {
              backgroundColor: '#f04439',
              padding: 10,
              borderRadius: 8,
            },
          );
    }
  }

  backToLogin=()=>{
    console.log('backtologin pressed');
    this.setState({showModal:false});
      this.props.navigation.navigate('SigninScreen');
  }

  render() {
    const {
      password,
      confirmPassword,
      passwordError,
      conditions,
      showPass,
      showPass2,
    } = this.state;
    const passwordBorderColor = passwordError ? 'red' : 'white';
    const passwordTintColor = !conditions ? 'red' : '#46a4ba';
    const confirmpasswordTintColor = passwordError ? 'red' : '#46a4ba';

    const passwordUpperColor = passwordError ? 'red' : 'gray';
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
          
         <CustomModal
           visible={this.state.showModal}
           onPress={this.backToLogin}
           heading={'Password Updated !'}
           description={'Your new password has been updated successfully.'}
           img = {Images.modal_reset}
           btnTxt = {'Back to Login'}
        />
        <ScrollView bounces={false}>
        <View style={styles.firstCont}>
          <Image source={Images.vector_reset} style={styles.logo1} />
          <Image source={Images.mask_group} />
        </View>
        <View style={styles.secondCont}>
          <Text style={styles.heading}>{Strings.reset_pass}</Text>
          <Text style={styles.subheading}>{Strings.reset_subheading}</Text>
        </View>

        <View>
          <View style={[styles.textinput1, {borderColor: passwordBorderColor}]}>
            <Image
              source={Images.pass}
              style={{flex: 1, tintColor: passwordTintColor}}
            />
            <View style={{flex: 11}}>
              {password ? (
                <Text style={[styles.upper, {color: passwordUpperColor}]}>
                  New Password
                </Text>
              ) : null}
              <TextInput
                style={styles.textinput11}
                placeholderTextColor={'gray'}
                placeholder="New Password"
                secureTextEntry={showPass}
                value={password}
                onChangeText={this.handlePasswordChange}
              />
            </View>
            <TouchableOpacity onPress={this.togglePass}>
              <Image
                style={styles.eyeImg}
                source={showPass ? Images.eye : Images.hide}
              />
            </TouchableOpacity>
          </View>

          {password && (
            <View style={styles.validationContainer}>
              <Text style={conditions.length ? styles.valid : styles.invalid}>
                {conditions.length ? '✔' : '✘'} 8 characters or above
              </Text>
              <Text
                style={conditions.specialChar ? styles.valid : styles.invalid}>
                {conditions.specialChar ? '✔' : '✘'} 1 or more special
                characters
              </Text>
              <Text style={conditions.number ? styles.valid : styles.invalid}>
                {conditions.number ? '✔' : '✘'} 1 or more numbers
              </Text>
              <Text style={conditions.case ? styles.valid : styles.invalid}>
                {conditions.case ? '✔' : '✘'} Upper and lowercase
              </Text>
            </View>
          )}
        </View>

        <View>
          <View style={[styles.textinput1, {borderColor: passwordBorderColor}]}>
            <Image
              source={Images.pass}
              style={{flex: 1, tintColor: confirmpasswordTintColor}}
            />
            <View style={{flex: 11}}>
              {confirmPassword ? (
                <Text style={[styles.upper, {color: passwordUpperColor}]}>
                  Confirm Password
                </Text>
              ) : null}
              <TextInput
                style={styles.textinput11}
                placeholderTextColor={'gray'}
                secureTextEntry={showPass2}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={this.handleConfirmPasswordChange}
              />
            </View>
            <TouchableOpacity onPress={this.togglePass2}>
              <Image
                style={styles.eyeImg}
                source={showPass2 ? Images.eye : Images.hide}
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

        <PrimaryButton onPress={this.onLogin} marg={200} head={'Continue'} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7edf3',
  },
  firstCont: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo1: {
    alignSelf: 'center',
    marginLeft: 24,
  },
  secondCont: {
    paddingHorizontal: 24,
  },
  heading: {
    fontWeight: '700',
    fontSize: 24,
    paddingBottom: 2,
  },
  subheading: {
    fontSize: 15,
    color: '#4F5F72',
  },

  errorView: {
    flexDirection: 'row',
    paddingTop:15,
    paddingHorizontal: 24,
  },
  errorIcon: {
    marginRight:5,
  },

  textinput11: {
    flex: 12,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  upper: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  textinput1: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 27,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 17,
    alignItems: 'center',
  },

  

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
  },
  validationContainer: {
    marginTop:15,
    paddingHorizontal:40,
  },
  valid: {
    color: 'green',
    marginBottom:7,
  },
  invalid: {
    color: 'red',
    marginBottom:7,
  },


  eyeImg: {
    width: 25,
    height: 20,
  },
});
