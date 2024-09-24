// import {
//   Text,
//   View,
//   Image,
//   FlatList,
//   StatusBar,
//   Dimensions,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import Images from '../../assets';
// import React, {Component} from 'react';
// import GetStartedModal from '../../components/customModal/getStartedModal';

// const windowWidth = Dimensions.get('screen').width;

// export class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showModal: true,
//       benefits: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}],
//     };
//   }

//   callModal=()=>{
//     this.setState({showModal: true})
//   }

//   getStarted = () => {
//     const {navigation} = this.props;
//     this.setState({showModal: false});
//     setTimeout(() => {
//       navigation.navigate('AddPhone');
//     }, 800);
//     console.log('getStarted');
//   };

//   renderItem = ({item}) => (
//     <View style={styles.unload}>
//       <Image source={Images.white} style={styles.unloadImage} />
//     </View>
//   );

//   handleRebuild = () => {
//     this.props.navigation.reset({
//       index: 0,
//       routes: [{name: 'SplashScreen'}],
//     });
//   };



//   handleLogout = () => {
//     this.props.navigation.reset({
//       index: 0,
//       routes: [{name: 'SigninScreen'}],
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
        
//         <StatusBar barStyle="dark-content" />

//         <GetStartedModal
//           visible={this.state.showModal}
//           onPress={this.getStarted}
//           heading={'Secure your Account ?'}
//           description={
//             'Setup two-factor authentication to secure your account in just two steps.'
//           }
//           img={Images.img_modal}
//         />

//         <View style={styles.upper}>
//           <View style={styles.topimgbox}>
//             <Image source={Images.modalicon2} style={styles.img1} />
//           </View>
//           <View>
//             <Text style={styles.location}>LOCATION</Text>
//             <View style={styles.sub}>
//               <TouchableOpacity style={{flexDirection: 'row'}}>
//                 <Text style={styles.sub2}>QUIVIO-all in one </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <Image source={Images.modal_reset} style={styles.img2} />
//           <TouchableOpacity style={[styles.topimgbox, {marginLeft: 11}]} onPress={this.callModal}>
//             <Image source={Images.email} style={styles.img3} />
//           </TouchableOpacity>
//         </View>
//         <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
//           <FlatList
//             bounces={false}
//             horizontal
//             data={this.state.benefits}
//             renderItem={this.renderItem}
//             keyExtractor={item => item.id}
//           />
//           <View style={styles.secondBoxCont}>
//             <View style={styles.leftSecond}>
//               <View style={styles.leftOne}>
//                 <Image source={Images.white2} style={styles.nextUnloadImg} />
//               </View>
//               <View style={styles.leftTwo}>
//                 <Image source={Images.white2} style={styles.nextUnloadImg} />
//               </View>
//             </View>
//             <View style={styles.leftSecond}>
//               <View style={styles.right}>
//                 <Image source={Images.white2} style={styles.nextUnloadImg} />
//               </View>
//               <View style={styles.right}>
//                 <Image source={Images.white2} style={styles.nextUnloadImg} />
//               </View>
//               <View style={styles.right}>
//                 <Image source={Images.white2} style={styles.nextUnloadImg} />
//               </View>
//             </View>
//           </View>
//           <View style={styles.third}>
//             <Text style={styles.thirdText}>
//               Never Miss a Wash – Set your Reminders!
//             </Text>
//             <Text style={styles.thirdText2}>
//               Set Email & SMS Alerts to Keep Your Wash Visits on Track!{' '}
//             </Text>
//             <TouchableOpacity style={styles.thirdText3Cont}>
//               <Text style={styles.thirdText3}>Set Reminder</Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.head1}>MY MEMBERSHIP</Text>
//           <View style={styles.packageCont}>
//             <View
//               style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//               <View style={{flexDirection: 'row'}}>
//                 <View style={styles.packageContimgbox}>
//                   <Image source={Images.lock} />
//                 </View>
//                 <View style={styles.packageContTextbox}>
//                   <Text style={styles.packageContTextbox1}>YOU HAVE</Text>
//                   <Text style={styles.packageContTextbox2}>Package Name</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//         <View style={styles.navBottom}>
//           <TouchableOpacity>
//             <Image source={Images.lock} style={styles.bottomIcon} />
//             <Text style={styles.navText}>User</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.handleRebuild}>
//             <Image source={Images.lock} style={styles.bottomIcon} />
//             <Text style={styles.navText}>Rebuild</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={this.handleLogout}>
//             <Image source={Images.lock} style={styles.bottomIcon} />
//             <Text style={styles.navText}>Logout</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image source={Images.lock} style={styles.bottomIcon} />
//             <Text style={styles.navText}>ACCOUNT</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   upper: {
//     backgroundColor: '#486284',
//     height: windowWidth > 400 ? 123 : 100,
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     borderBottomEndRadius: 20,
//     borderBottomLeftRadius: 20,
//   },
//   sub: {
//     flexDirection: 'row',
//   },
//   sub2: {
//     fontWeight: '700',
//     color: 'white',
//     fontSize: 16,
//     marginBottom: 20,
//     paddingLeft: 8,
//   },
//   img1: {
//     width: 24,
//     height: 24,
//   },
//   img2: {
//     width: windowWidth > 400 ? 45 : 40,
//     height: windowWidth > 400 ? 45 : 40,
//     marginBottom: 22,
//     marginLeft: windowWidth > 400 ? windowWidth / 7 : windowWidth / 14,
//   },
//   img3: {
//     width: 24,
//     height: 24,
//   },
//   location: {
//     fontWeight: '500',
//     fontSize: 11,
//     color: 'white',
//     paddingLeft: 8,
//     paddingBottom: 8,
//   },
//   unload: {
//     height: windowWidth > 400 ? 370 : 300,
//     backgroundColor: '#e7edf3',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: windowWidth,
//   },

//   unloadImage: {
//     width: 200,
//     height: 88,
//     resizeMode: 'contain',
//   },

//   head1: {
//     fontWeight: '700',
//     fontSize: 16,
//     lineHeight: 17,
//     marginLeft: 16,
//     marginTop: 40,
//   },
//   head2: {
//     fontWeight: '600',
//     fontSize: 14,
//     lineHeight: 17,
//     marginLeft: 24,
//     marginTop: 35,
//   },

//   cardimg: {
//     width: 75,
//     height: 75,
//     alignSelf: 'center',
//   },
//   navBottom: {
//     height: windowWidth > 400 ? 94 : 70,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingTop: 12,
//     borderTopWidth: 1,
//     borderColor: 'lightgrey',
//   },
//   navText: {
//     fontWeight: '500',
//     color: '#8A91A5',
//     marginBottom: 12,
//   },
//   bottomIcon: {
//     height: 22,
//     width: 22,
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   packageCont: {
//     height: 142,
//     borderWidth: 1,
//     borderColor: '#E5E5E5',
//     marginTop: 23,
//     marginLeft: 24,
//     marginRight: 21,
//     borderRadius: 4,
//     marginBottom: 32,
//   },
//   packageContimgbox: {
//     height: windowWidth > 400 ? 44 : 40,
//     width: windowWidth > 400 ? 44 : 40,
//     borderRadius: 50,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 25,
//   },
//   packageContTextbox: {
//     marginLeft: 12,
//     marginTop: 30,
//   },
//   packageContTextbox1: {
//     fontSize: 11,
//     fontWeight: '400',
//     color: 'rgba(0, 0, 0, 0.7)',
//   },
//   packageContTextbox2: {
//     fontSize: windowWidth > 400 ? 18 : 16,
//     fontWeight: '700',
//   },

//   topimgbox: {
//     backgroundColor: 'rgba(217, 217, 217, 0.1)',
//     height: windowWidth > 400 ? 45 : 40,
//     width: windowWidth > 400 ? 45 : 40,
//     borderRadius: 50,
//     marginLeft: 20,
//     marginBottom: 22,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   secondBoxCont: {
//     flexDirection: 'row',
//     gap: 15,
//     marginHorizontal: 16,
//     paddingTop: 33,
//     paddingBottom: 24,
//   },
//   leftSecond: {flex: 1, gap: 12},

//   leftOne: {
//     backgroundColor: 'lightblue',
//     flex: 7,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 40,
//   },
//   leftTwo: {
//     backgroundColor: 'lightblue',
//     flex: 6,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 50,
//   },
//   right: {
//     backgroundColor: 'lightblue',
//     flex: 1,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   third: {
//     height: 172,
//     backgroundColor: 'rgba(72, 98, 132, 1)',
//     marginHorizontal: 16,
//     borderRadius: 16,
//   },
//   thirdText: {
//     width: windowWidth / 2,
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '700',
//     paddingTop: 20,
//     marginLeft: 20,
//   },
//   thirdText2: {
//     color: 'white',
//     width: windowWidth / 1.6,
//     marginTop: 10,
//     marginLeft: 20,
//     fontWeight: '500',
//     fontSize: 11,
//   },
//   thirdText3: {
//     fontWeight: '700',
//     fontSize: 13,
//     paddingVertical: 12,
//     textAlign: 'center',
//   },
//   thirdText3Cont: {
//     backgroundColor: 'white',
//     marginHorizontal: 20,
//     borderColor: 'white',
//     marginTop: 10,
//     borderWidth: 1,
//     borderRadius: 50,
//   },
// });

// export default Home;
