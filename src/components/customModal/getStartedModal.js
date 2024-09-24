import {
  Text,
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import React, {Component} from 'react';
import Images from '../../assets';

export default class GetStartedModal extends Component {
  render() {
    const {visible, heading, description, img, onPress, onContinuePress} = this.props;
    if (!visible) return null;
    return (
      <Modal
        transparent
        visible={visible}
        animationType="slide">
        <TouchableWithoutFeedback onPress={onPress}>

        <View style={styles.modalOverlay}/>
        </TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <Image source={img} style={styles.img} />
            <View style={styles.cont}>
              <Text style={styles.accountText}>{heading}</Text>
              <Text style={styles.modalText}>{description}</Text>
              <View style={styles.row}>
                <Image source={Images.m1} />
                <Text>Link your account with your phone number</Text>
              </View>
              <View style={styles.row}>
                <Image source={Images.m2} />
                <Text>Enter the one-time passcode</Text>
              </View>
              <View style={styles.row}>
                <Image source={Images.m3} />
                <Text>Secure your account</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.primaryCont}
              onPress={onContinuePress}>
              <Text style={styles.primary}>Get Started</Text>
            </TouchableOpacity>
          </View>
        
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  img: {
    alignSelf: 'center',
    marginTop: 32,
  },
  modalContainer: {
    height: '75%',
    backgroundColor: '#E6EDF3',
    borderRadius: 20,
    paddingVertical: 20,
  },
  accountText: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: '700',
    color: '#0B1721',
  },
  modalText: {
    color: '#60707D',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 6,
    marginBottom: 28,
  },
  primaryCont: {
    backgroundColor: 'rgba(42, 123, 187, 1)',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 24,
    marginTop: 36,
    borderRadius: 8,
  },
  primary: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  cont: {
    paddingHorizontal: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
