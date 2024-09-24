
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Images from '../../assets'; 
import Strings from '../../utils/string';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true, 
    };
  }


  handleTextChange = (value) => {
    this.setState({ inputValue: value }, () => this.validateInput(value));
  };

  render() {
    const { placeholder, isPassword, keyboardType } = this.props;
    const { showPass, errorMessage, inputValue } = this.state;

    return (
    
        
       
          <TextInput
            secureTextEntry={isPassword ? this.state.showPass : false}
            style={styles.textinput11}
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            keyboardType={keyboardType || 'default'}
            value={inputValue}
            onChangeText={this.handleTextChange}
            onBlur={() => this.validateInput(inputValue)}  
          />
         
       
         
        
       
      
        
  
    );
  }
}

const styles = StyleSheet.create({
  textinput1: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 27,
    borderWidth: 1,

    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  textinput11: {
    flex: 10,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  upper:{
    fontSize:14,
    fontWeight: '500',
    paddingHorizontal:20,
   // color:'gray',
  },
//   eyeImg: {
//     width: 20,
//     height: 20,
//     flex: 1,
//     resizeMode: 'contain',
//   },
//   errorText: {
//     fontSize: 12,
//     marginLeft: 24,
//     marginTop: 5,
//   },
});
