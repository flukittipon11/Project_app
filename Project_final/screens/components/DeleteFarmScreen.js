// import React, { Component } from 'react'
// import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
// import { ListItem, Badge } from 'react-native-elements'
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
// import firebase from '../../global'

// class DeleteFarmScreen extends Component {
//     constructor() {
//         super();

//         this.firestoreRef = global.firebase.firestore().collection('Corn-growth');
//         this.state = {
//             isLoading: true,
//             userArr: []
//         }
//     }

//     componentDidMount() {
//         this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
//     }

//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     getCollection = (querySnapShot) => {
//         const userArr = [];
//         querySnapShot.forEach((res) => {
//             const { Farm_name, Farm_place, Farm_width, Detail } = res.data();
//             userArr.push({
//                 key: res.id,
//                 res,
//                 Farm_name,
//                 Farm_place,
//                 Farm_width,
//                 Detail
//             })
//         })
//         this.setState({
//             userArr,
//             isLoading: false
//         })
//     }
//     deleteFarm() {
//         const dbRef = firebase.firestore().collection('Corn-growth').doc(this.props.route.params.userKey);
//         dbRef.delete().then((res) => {
//             console.log("Item removed from database");
//             this.props.navigation.navigate('DeleteFarm');
//         })
//     }

//     openTwoButtonAlert = () => {
//         Alert.alert(
//             'Delete User',
//             'Are you sure?',
//             [
//                 { text: 'Yes', onPress: () => this.deleteUser() },
//                 { text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel' }
//             ],
//             {
//                 cancelable: true
//             }
//         )
//     }

//     render() {

//         if (this.state.isLoading) {
//             return (
//                 <View style={styles.preloader}>
//                     <ActivityIndicator size="large" color="#9E9E9E" />
//                 </View>
//             )
//         }

//         return (
//             <ScrollView>
//                 {
//                     this.state.userArr.map((item, i) => {
//                         return (
//                             <ListItem
//                                 key={i}
//                                 bottomDivider
//                                 onPress={() => {
//                                     this.props.navigation.navigate('FarmDetail', {
//                                         userKey: item.key
//                                     })
//                                 }}
//                             >
//                                 <Badge
//                                     value={i + 1}
//                                 />
//                                 <ListItem.Content>
//                                     <ListItem.Title>{item.Farm_name}</ListItem.Title>
//                                     <ListItem.Subtitle>{'สถานที่ : ' + item.Farm_place}</ListItem.Subtitle>
//                                 </ListItem.Content>
//                                 <ListItem.Chevron />
//                             </ListItem>
//                         )
//                     })
//                 }
//             </ScrollView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     preloader: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// })

// export default DeleteFarmScreen;