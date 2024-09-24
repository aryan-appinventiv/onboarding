import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {Component} from 'react';
import Strings from '../../utils/string';
import Images from '../../assets';
import PrimaryButton from '../../components/buttons/primaryButton';
import Toast from 'react-native-simple-toast';
import CustomModal from '../../components/customModal/customModal';

export default class ForgotScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      showModal: false,
    };
  }
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
  handleEmailChange = value => {
    this.setState({email: value}, () => this.validateEmail(value));
  };
  onLogin = () => {
    const {email} = this.state;
    const default_email = 'ex@gmail.com';

    const isEmailValid = this.validateEmail(email);

    if (isEmailValid) {
      if (email === default_email) {
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
        this.setState({showModal:true});
      } else {
        this.updateLogin();
      }
    } else {
      this.updateLogin();
    }
  };

  updateLogin = () => {
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
  };

goto=()=>{
    this.setState({showModal:false});
    this.props.navigation.navigate('ResetScreen');
}
 

  render() {
    const {email, emailError} = this.state;
    const emailBorderColor = emailError ? 'red' : 'white';
    const emailTintColor = emailError ? 'red' : '#46a4ba';
    const emailUpperColor = emailError ? 'red' : 'gray';
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <CustomModal
           visible={this.state.showModal}
           onPress={this.goto}
           heading={'Link Send !'}
           description={'The link to reset your password has been sent on your email address.'}
           img = {Images.modalicon2}
           btnTxt = {'Go to Reset'}
        />

        <View style={styles.firstCont}>
          <TouchableOpacity onPress={()=>this.props.navigation.replace('SigninScreen')} style={styles.logo1 }>
            <Image source={Images.back_arrow} />
          </TouchableOpacity>
          <Image source={Images.mask_group} />
        </View>
        <View style={styles.secondCont}>
          <Text style={styles.heading}>{Strings.forgot_pass}</Text>
          <Text style={styles.subheading}>{Strings.subheading}</Text>
        </View>
        <View>
          <View style={[styles.textinput1, {borderColor: emailBorderColor}]}>
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
              <Image style={styles.errorIcon} source={Images.alert_circle} />
              <Text style={styles.errorText}>{emailError}</Text>
            </View>
          ) : null}
        </View>

        <PrimaryButton onPress={this.onLogin} marg={38} head={'Send Link'} />
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
  },
  errorIcon: {
    marginLeft: 24,
    marginTop: 5,
  },
  errorText: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
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
    paddingVertical: 15, 
    paddingHorizontal: 17,
    alignItems: 'center',
    height: 65, 
  },
  
  textinput11: {
    flex: 12,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 20,
    height: '100%', 
    justifyContent: 'center', 
  },
 

  
});
