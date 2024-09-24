import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import Images from '../../assets';
import Toast from 'react-native-simple-toast';
import CustomModal from '../../components/customModal/customModal';
import Strings from '../../utils/string';

class AddPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
      countryCode: 'US',
      callingCode: '1',
      phoneNumber: '',
    };
  }
  
  No=()=>{
     this.setState({showModal:false})
  }

  Yes=()=>{
    this.setState({showModal:false})
    this.props.navigation.navigate('BottomTabNavigator')
  }


  handleCountrySelect = country => {
    this.setState({
      countryCode: country.cca2,
      callingCode: country.callingCode[0],
    });
  };

  handleSendCode = () => {
    const {phoneNumber} = this.state;
    if (phoneNumber.length > 10 || phoneNumber.length < 10) {
 
    Toast.showWithGravity(
        'Phone Number Should have 10 digits',
        Toast.SHORT,
        Toast.TOP,
        {
          backgroundColor: '#f04439',
          padding: 10,
          borderRadius: 8,
        },
    );
    } else {
      if (phoneNumber === '7037427373') {
     
        Toast.showWithGravity(
            'User exists. Try a different number.',
            Toast.SHORT,
            Toast.TOP,
            {
              backgroundColor: '#f04439',
              padding: 10,
              borderRadius: 8,
            },
        );
      } else {
        this.props.navigation.navigate('Verify');
      }
    }
  };



  render() {
    const {isFocus, countryCode, phoneNumber} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#E6EDF3'}}>

            <CustomModal
             visible={this.state.showModal}
             onPressNo={this.No}
             onPress={this.Yes}
             heading={'Exit 2FA ?'}
             description={'Are you sure you want to exit 2FA, You will need to redo it again.'}
             img = {Images.exit2FA}
             btnTxt = {'Yes, Exit'}
             btnNo = {'No, Continue'}
             btnNoVar={true}
            />
          <View style={styles.container}>
            <TouchableOpacity
            onPress={() => this.setState({showModal:true})}
             >
              <Image
                source={Images.back_arrow}
              />
            </TouchableOpacity>
            <Text style={{marginTop: 60, fontSize: 26, fontWeight: '700'}}>
              Add Phone Number{' '}
            </Text>
            <Text style={{marginTop: 10, fontSize: 15, color: '#4F5F72'}}>
              To initiate the two-factor authentication,provide your phone
              number below.
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity style={styles.country}>
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withCallingCode
                    withCallingCodeButton
                    onSelect={this.handleCountrySelect}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <TextInput
                  style={styles.phone}
                  keyboardType="number-pad"
                  placeholder="Phone Number"
                  placeholderTextColor={'#60707D'}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChangeText={e => this.setState({phoneNumber: e})}
                />
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleSendCode}>
                <Text style={{color: 'white'}}>Send Code</Text>
              </TouchableOpacity>
            </View>
          </View>
       
        
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default AddPhone;
