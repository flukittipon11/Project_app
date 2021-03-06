import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Alert, ImageBackground } from 'react-native'
import firebase from '../../global'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Select from 'react-native-picker-select';
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

class FarmDetailScreen extends Component {
    constructor() {
        super();

        this.state = {
            key: '',
            Date: '',
            Farm_name: '',
            Farm_place: '',
            Farm_width: '',
            Detail: '',
            SheathCorn: '',
            Length_SheathBefore: '',
            Width_SheathBefore: '',
            Weight_BeforeCasing: '',
            Weight_BeforeBreakStem: '',
            Husk_Cover: '',
            Weight_AfterCasing: '',
            Diameter_Size: '',
            Total_LengthCorn: '',
            Total_NotAttached: '',
            Total_RowSeed: '',
            Total_Seed: '',
            Size_CornCob: '',
            Size_CornSeed: '',
            TotalWeigt_CornCob: '',
            TotalWeigt_CornMeat: '',
            isLoading: true
        }
    }

    componentDidMount() {
        const dbRef = global.firebase.firestore().collection('Corn-growth').doc(this.props.route.params.userKey);
        dbRef.get().then((res) => {
            if (res.exists) {
                const farm = res.data();
                this.setState({
                    key: res.id,
                    Date: farm.Date,
                    Farm_name: farm.Farm_name,
                    Farm_place: farm.Farm_place,
                    Farm_width: farm.Farm_width,
                    Detail: farm.Detail,
                    SheathCorn: farm.SheathCorn,
                    Length_SheathBefore: farm.Length_SheathBefore,
                    Width_SheathBefore: farm.Width_SheathBefore,
                    Weight_BeforeCasing: farm.Weight_BeforeCasing,
                    Weight_BeforeBreakStem: farm.Weight_BeforeBreakStem,
                    Husk_Cover: farm.Husk_Cover,
                    Weight_AfterCasing: farm.Weight_AfterCasing,
                    Diameter_Size: farm.Diameter_Size,
                    Total_LengthCorn: farm.Total_LengthCorn,
                    Total_NotAttached: farm.Total_NotAttached,
                    Total_RowSeed: farm.Total_RowSeed,
                    Total_Seed: farm.Total_Seed,
                    Size_CornCob: farm.Size_CornCob,
                    Size_CornSeed: farm.Size_CornSeed,
                    TotalWeigt_CornCob: farm.TotalWeigt_CornCob,
                    TotalWeigt_CornMeat: farm.TotalWeigt_CornMeat,
                    Corn_Varieties: farm.Corn_Varieties,
                    isLoading: false
                })
            } else {
                console.log('Document does not exist!');
            }
        })
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    async farmEdit() {
        this.props.navigation.navigate("ShowFarm")
    }

    updateUser() {
        this.setState({
            isLoading: true
        })
        const updateDBRef = global.firebase.firestore().collection('Corn-growth').doc(this.state.key);
        updateDBRef.set({
            Farm_name: this.state.Farm_name,
            Farm_place: this.state.Farm_place,
            Farm_width: this.state.Farm_width,
            Detail: this.state.Detail,
            Date: this.state.Date,
            SheathCorn: this.state.SheathCorn,
            Length_SheathBefore: this.state.Length_SheathBefore,
            Width_SheathBefore: this.state.Width_SheathBefore,
            Weight_BeforeCasing: this.state.Weight_BeforeCasing,
            Weight_BeforeBreakStem: this.state.Weight_BeforeBreakStem,
            Husk_Cover: this.state.Husk_Cover,
            Weight_AfterCasing: this.state.Weight_AfterCasing,
            Diameter_Size: this.state.Diameter_Size,
            Total_LengthCorn: this.state.Total_LengthCorn,
            Total_NotAttached: this.state.Total_NotAttached,
            Total_RowSeed: this.state.Total_RowSeed,
            Total_Seed: this.state.Total_Seed,
            Size_CornCob: this.state.Size_CornCob,
            Size_CornSeed: this.state.Size_CornSeed,
            TotalWeigt_CornCob: this.state.TotalWeigt_CornCob,
            TotalWeigt_CornMeat: this.state.TotalWeigt_CornMeat,
            Corn_Varieties: this.state.Corn_Varieties,
        }).then((docRef) => {
            this.setState({
                key: '',
                Date: '',
                Farm_name: '',
                Farm_place: '',
                Farm_width: '',
                Detail: '',
                Corn_Varieties: "",
                SheathCorn: '',
                Length_SheathBefore: '',
                Width_SheathBefore: '',
                Weight_BeforeCasing: '',
                Weight_BeforeBreakStem: '',
                Husk_Cover: '',
                Weight_AfterCasing: '',
                Diameter_Size: '',
                Total_LengthCorn: '',
                Total_NotAttached: '',
                Total_RowSeed: '',
                Total_Seed: '',
                Size_CornCob: '',
                Size_CornSeed: '',
                TotalWeigt_CornCob: '',
                TotalWeigt_CornMeat: '', 
                isLoading: false
            })
            this.props.navigation.navigate('ManageData');
        })
            .catch((err) => {
                console.error('Error:', err),
                    this.setState({
                        isLoading: false,
                    })
            })
    }

    deleteUser() {
        const dbRef = global.firebase.firestore().collection('Corn-growth').doc(this.props.route.params.userKey);
        dbRef.delete().then((res) => {
            console.log("Item removed from database");
            this.props.navigation.navigate('ManageData');
        })
    }

    openTwoButtonAlert = () => {
        Alert.alert(
            '????????????????????????????????????',
            '????????????????????????????????????????????????????????????????????????????????????????????????????????? ?',
            [
                { text: '?????????', onPress: () => this.deleteUser() },
                { text: '??????????????????', onPress: () => console.log('No item was removed'), style: 'cancel' }
            ],
            {
                cancelable: true
            }
        )
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        return (
            <ScrollView style={styles.bgManage}>
                {/* <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1537204319452-fdbd29e2ccc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }} style={styles.background}> */}
                <View style={styles.containerfarm}>
                    <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>??????????????????????????????????????????????????????????????????????????????</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>????????????????????????</Text>
                    <Input
                        placeholder={'????????????????????????'}
                        value={this.state.Farm_name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'Farm_name')}
                    />
                    <Text style={{ marginTop: 10 }}>????????????????????????????????????????????????</Text>
                    <Input
                        placeholder={'?????????????????????'}
                        value={this.state.Farm_place}
                        onChangeText={(val) => this.inputValueUpdate(val, 'Farm_place')}
                    />
                    <Text style={{ marginTop: 10 }}>?????????????????????????????????????????????????????????????????????</Text>
                    <Input
                        placeholder={'???????????????????????????'}
                        value={this.state.Farm_width}
                        onChangeText={(val) => this.inputValueUpdate(val, 'Farm_width')}
                    />
                    <Text style={{ marginTop: 10 }}>???????????????????????????????????????</Text>
                    <Input
                        placeholder={'???????????????????????????????????????'}
                        value={this.state.Corn_Varieties}
                        onChangeText={(val) => this.inputValueUpdate(val, 'Corn_Varieties')}
                    />
                    <Text style={{ marginTop: 10 }}>??????????????????????????????</Text>
                    <Input
                        placeholder={'??????????????????????????????'}
                        value={this.state.Detail}
                        onChangeText={(val) => this.inputValueUpdate(val, 'Detail')}
                    />
                    <Text style={{ marginBottom: 10 }}>????????? / ??????????????? / ??????</Text>
                    <DatePicker
                        style={{ width: 200, }}
                        date={this.state.Date}
                        value={this.state.Date}
                        mode="date"
                        placeholder="????????? / ??????????????? / ??????"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2021-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(val) => this.inputValueUpdate(val, 'Date')}
                    />
                </View>
                <View style={styles.containerform}>
                    <View style={{ alignSelf: 'center', marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>?????????????????????????????????????????????</Text>
                        <Text style={{ marginTop: 10 }}>??????????????????</Text>
                        <TextInput
                            value={this.state.SheathCorn}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'SheathCorn')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>????????????????????????????????????????????????????????? ( ??????????????????????????? )</Text>
                        <TextInput
                            value={this.state.Length_SheathBefore}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Length_SheathBefore')}
                            keyboardType="numeric"
                        />
                        <TextInput
                            value={this.state.Width_SheathBefore}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Width_SheathBefore')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>????????????????????????????????????????????? ( ???????????? )</Text>
                        <TextInput
                            value={this.state.Weight_BeforeCasing}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Weight_BeforeCasing')}
                            keyboardType="numeric"
                        />
                        <TextInput
                            value={this.state.Weight_BeforeBreakStem}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Weight_BeforeBreakStem')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>Husk Cover ( ????????????????????????????????? )</Text>
                        <TextInput
                            value={this.state.Husk_Cover}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'?????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Husk_Cover')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>????????????????????????????????????????????? ( ???????????? )</Text>
                        <TextInput
                            value={this.state.Weight_AfterCasing}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Weight_AfterCasing')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>??????????????????????????????????????????????????????????????? ( ??????????????????????????? )</Text>
                        <TextInput
                            value={this.state.Diameter_Size}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'???????????????????????????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Diameter_Size')}
                            keyboardType="numeric"
                        />
                        <TextInput
                            value={this.state.Total_LengthCorn}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'?????????????????????????????????????????????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Total_LengthCorn')}
                            keyboardType="numeric"
                        />
                        <TextInput
                            value={this.state.Total_NotAttached}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????????????????????????????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Total_NotAttached')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>????????????????????????????????????????????????????????????????????????</Text>
                        <TextInput
                            value={this.state.Total_RowSeed}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Total_RowSeed')}
                            keyboardType="numeric"
                        />
                        <TextInput
                            value={this.state.Total_Seed}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'???????????????????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Total_Seed')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>??????????????????????????????????????????????????????????????????????????? ( ??????????????????????????? )</Text>
                        <TextInput
                            value={this.state.Size_CornCob}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Size_CornCob')}
                            keyboardType="numeric"
                        />
                        <TextInput
                            value={this.state.Size_CornSeed}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'Size_CornSeed')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>???????????????????????????????????????????????????????????? ( ???????????? )</Text>
                        <TextInput
                            value={this.state.TotalWeigt_CornCob}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'??????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'TotalWeigt_CornCob')}
                            keyboardType="numeric"
                        />
                        <Text style={{ marginTop: 10 }}>????????????????????????????????????????????????????????? ( ???????????? )</Text>
                        <TextInput
                            value={this.state.TotalWeigt_CornMeat}
                            style={{ height: 40, margin: 12, borderBottomWidth: 1, fontSize: 16 }}
                            placeholder={'????????????????????????????????????'}
                            onChangeText={(val) => this.inputValueUpdate(val, 'TotalWeigt_CornMeat')}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
                    <TouchableOpacity style={styles.btclick} onPress={() => this.updateUser()}>
                        <Text style={{ color: '#fff', fontSize: 16 }}><Image source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/Ao2Bhy.png' }} style={{ width: 20, height: 20 }} /> ?????????????????????????????????</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btdelete} onPress={this.openTwoButtonAlert}>
                        <Text style={{ color: '#fff', fontSize: 16 }}><Image source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/Ao23YJ.png' }} style={{ width: 20, height: 20 }} /> ????????????????????????</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btedit} onPress={this.openTwoButtonAlert} onPress={() => this.farmEdit()}>
                    <Text style={{ color: '#594F4F', fontSize: 16 }}><Image source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/AoCwQV.png' }} style={{ width: 25, height: 25 }} /> ?????????????????????????????????????????????????????????</Text>
                </TouchableOpacity>
                {/* </ImageBackground> */}
            </ScrollView>
        )
    }
}


const theme = {
    Button: {
        raised: true
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    btedit: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: 310,
        height: 65,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DE0AD'
    },
    btclick: {
        borderRadius: 5,
        width: 150,
        height: 65,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F39C12'
    },
    btdelete: {
        marginLeft: 10,
        borderRadius: 5,
        width: 150,
        height: 65,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgManage: {
        backgroundColor: '#e2d0bc'
    },
    containerfarm: {
        alignSelf: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
        paddingBottom: 20,
        marginBottom: 20,
        width: 380,
        height: 640,
        marginTop: 20,
        borderRadius: 20,
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 10,
        backgroundColor: "white",
        flexBasis: '42%',
        marginHorizontal: 10,
    },
    containerform: {
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 30,
        marginBottom: 20,
        width: 380,
        height: 1400,
        marginTop: 5,
        borderRadius: 20,
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 10,
        backgroundColor: "white",
        flexBasis: '42%',
        marginHorizontal: 10,
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FarmDetailScreen;