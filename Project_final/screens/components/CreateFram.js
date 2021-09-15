import React, { Component, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TouchableOpacity, Text, Alert } from 'react-native';
import firebase from '../../global';
import { ThemeProvider, Button, Input, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import ImagePicker from 'react-native-image-crop-picker';
import { } from 'uuid';

class CreatFarm extends Component {
    constructor() {

        super();
        this.dbRef = global.firebase.firestore().collection('Corn-growth');
        this.state = {

            image_cornUri: null,
            Farm_name: "",
            Farm_place: "",
            Farm_width: "",
            Detail: "",
            Corn_Varieties: "",
            isloading: false
        }
    }
    /************s*** pickerImage ********************/

    choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }
    /*************** pickerImage ********************/



    openTwoButtonAlertCancel = () => {
        Alert.alert(
            'ยกเลิกการสร้าง',
            'คุณต้องการยกเลิกใช่หรือไม่ ?',
            [
                { text: 'ใช่', onPress: () => this.props.navigation.navigate("CreatFarm") },
                { text: 'ไม่ใช่', onPress: () => console.log('No item was removed'), style: 'cancel' }
            ],
            {
                cancelable: true
            }
        )
    }
    inputvalueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    storeUser() {
        if (this.state.Farm_name == '') {
            alert('กรุณากรอกข้อมูลให้ครบ !')
        } else {
            this.setState({
                isloading: true
            })
            this.dbRef.add({
                Farm_name: this.state.Farm_name,
                Farm_place: this.state.Farm_place,
                Farm_width: this.state.Farm_width,
                Detail: this.state.Detail,
                Corn_Varieties: this.state.Corn_Varieties,
            })
            .then((res) => {
                this.setState({
                    Farm_name: "",
                    Farm_place: "",
                    Farm_width: "",
                    Detail: "",
                    Corn_Varieties: "",
                    isloading: false
                })
                this.props.navigation.navigate("CreatFarm")
            })
                .catch((err) => {
                    console.log('Error found: ', err);
                    this.setState({
                        isloading: false
                    })
                })
        }
    }

    //************** function UploadImage ******************/
    addImage = async ({ localUri }) => {
        const remoteUri = await this.uploadPhotoAsync(localUri);

        return new Promise((res, rej) => {
            this.firestore
                .collection("")
                .add({
                    uid: this.uid,
                    timestamp: this.timestamp,
                    image: remoteUri
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    uploadPhotoAsync = async uri => {
        const path = 'photos/${this.uid}/${Date.now()}.jpg';

        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = global.firebase
                .storage()
                .ref(path)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => { },
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        })
    }





    render() {
        if (this.state.isloading) {
            return (
                <View style={style.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <ThemeProvider theme={theme}>
                <ScrollView style={style.container}>
                    <View style={style.btnImage}>
                        <Image
                            style={style.Image}
                            source={{ uri: 'https://images.unsplash.com/photo-1567547920970-65999ed2024a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' }}
                        />
                    </View>
                    <View>
                        <Text style={style.contenttext}>ชื่อแปลง</Text>
                        <Input placeholder={'ชื่อฟาร์ม'}
                            style={{ width: 100 }}
                            value={this.state.Farm_name}
                            onChangeText={(val) => this.inputvalueUpdate(val, 'Farm_name')}
                        />
                        <Text style={style.contenttext}>สถานที่</Text>
                        <Input placeholder={'สถานที่'}
                            value={this.state.Farm_place}
                            onChangeText={(val) => this.inputvalueUpdate(val, 'Farm_place')}
                        />
                        <Text style={style.contenttext}>ลำดับแถว</Text>
                        <Input
                            keyboardType={'numeric'}
                            placeholder={'ลำดับแถว'}
                            value={this.state.Farm_width}
                            onChangeText={(val) => this.inputvalueUpdate(val, 'Farm_width')}
                        />
                        <Text style={style.contenttext}>พันธุ์ข้าวโพด</Text>
                        <Input
                            placeholder={'พันธุ์ข้าวโพด'}
                            value={this.state.Corn_Varieties}
                            onChangeText={(val) => this.inputvalueUpdate(val, 'Corn_Varieties')}
                        />
                        <Text style={style.contenttext}>รายละเอียด</Text>
                        <Input placeholder={'รายละเอียด'}
                            value={this.state.Detail}
                            onChangeText={(val) => this.inputvalueUpdate(val, 'Detail')}
                        />
                        <Button title='บันทึก'
                            onPress={() => this.storeUser()}
                        />
                        <Button
                            onPress={() => this.openTwoButtonAlertCancel()}

                            containerStyle={{
                                marginTop: 10,

                            }} title='ยกเลิก'
                            buttonStyle={{
                                backgroundColor: "red"
                            }} />

                    </View>
                </ScrollView>
            </ThemeProvider>

        )
    }
}
const theme = {
    Button: {
        raised: true
    }
}
const style = StyleSheet.create({
    container: {
        paddingLeft: 35,
        paddingRight: 35,
        marginTop: 17,

    },
    preloader: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        alignContent: 'center',
        justifyContent: 'center'
    },
    Image: {
        borderRadius: 10,
        height: 200,
        width: 300,
        alignSelf: 'center'
    },
    btnImage: {
        shadowColor: '#00000021',
        borderRadius: 10,
        position: 'relative',
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 20,

        shadowOffset: {
            width: 0,
            height: 6,

        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    contenttext: {
        fontSize: 18,
        fontWeight: '900'

    }


})
export default CreatFarm;