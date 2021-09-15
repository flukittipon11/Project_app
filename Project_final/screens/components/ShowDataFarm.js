import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Alert } from 'react-native'
import firebase from '../../global'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Select from 'react-native-picker-select';
import { TextInput } from 'react-native'
import { ImageBackground } from 'react-native'

class ShowDataFarm extends Component {
    constructor() {
        super();

        this.state = {
            key: '',
            Farm_name: '',
            Farm_place: '',
            Farm_width: '',
            Detail: '',
            SheathCorn: '',
            Length_SheathBefore: null,
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
            this.props.navigation.navigate('EditFarm');
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
            this.props.navigation.navigate('EditFarm');
        })
    }

    openTwoButtonAlert = () => {
        Alert.alert(
            'ลบข้อมูลแปลง',
            'คุณต้องการลบข้อมูลแปลงนี้ใช่หรือไม่ ?',
            [
                { text: 'ใช่', onPress: () => this.deleteUser() },
                { text: 'ไม่ใช่', onPress: () => console.log('No item was removed'), style: 'cancel' }
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
            <ScrollView>
                <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1599138900450-3d06e89ad309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80' }} style={styles.background}>
                    <View style={styles.container}>
                        <Text style={{ paddingLeft: 80, marginBottom: 10, fontSize: 18 }}>ชื่อแปลง : {this.state.Farm_name}</Text>
                        <Image
                            style={styles.Image}
                            source={{ uri: 'https://sv1.picz.in.th/images/2021/04/16/A1ao7u.jpg' }}
                        />
                        <Text style={styles.textdt}>สถานที่ในการปลูก : <Text style={{ color: 'black' }}>{this.state.Farm_place}</Text></Text>
                        <Text style={styles.textdt}>ความกว้างของแปลงการปลูก : <Text style={{ color: 'black' }}>{this.state.Farm_width} ไร่</Text> </Text>

                        <Text style={styles.textdt}>พันธุ์ข้าวโพด : <Text style={{ color: 'black' }}>{this.state.Corn_Varieties}</Text></Text>
                        <Text style={styles.textdt}>รายละเอียด : <Text style={{ color: 'black' }}>{this.state.Detail}</Text></Text>
                        <Text style={{ paddingLeft: 70, fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', marginTop: 10 }}>ข้อมูลการบันทึก</Text>
                        <Text style={styles.textdt}>ฝักที่ : <Text style={{ color: 'black' }}>{this.state.SheathCorn}</Text></Text>
                        <Text style={styles.textdt}>ขนาดข้าวโพดก่อนปลอก ( เซนติเมตร )</Text>
                        <Text style={styles.textdt}>ความยาวฝักก่อนปอก : <Text style={{ color: 'black' }}>{this.state.Length_SheathBefore} เซนติเมตร</Text> </Text>
                        <Text style={styles.textdt}>ความกว้างฝักก่อนปอก : <Text style={{ color: 'black' }}>{this.state.Width_SheathBefore} เซนติเมตร</Text> </Text>
                        <Text style={styles.textdt}>น้ำหนักก่อนปลอก ( กรัม )</Text>
                        <Text style={styles.textdt}>น้ำหนักก่อนปลอกรวมก้าน <Text style={{ color: 'black' }}>{this.state.Weight_BeforeCasing} กรัม</Text> </Text>
                        <Text style={styles.textdt}>น้ำหนักก่อนปลอกหักก้าน <Text style={{ color: 'black' }}>{this.state.Weight_BeforeBreakStem} กรัม</Text> </Text>
                        <Text style={styles.textdt}>Husk Cover : <Text style={{ color: 'black' }}>{this.state.Husk_Cover}</Text></Text>
                        <Text style={styles.textdt}>น้ำหนักข้าวโพดหลังปลอก : <Text style={{ color: 'black' }}>{this.state.Weight_AfterCasing} กรัม</Text> </Text>
                        <Text style={styles.textdt}>ขนาดฝักข้าวโพดหลังปอก ( เซนติเมตร )</Text>
                        <Text style={styles.textdt}>ขนาดเส้นผ่านศูนย์กลาง : <Text style={{ color: 'black' }}>{this.state.Diameter_Size} เซนติเมตร</Text> </Text>
                        <Text style={styles.textdt}>ความยาวรวมทั้งฝักของข้าวโพด : <Text style={{ color: 'black' }}>{this.state.Total_LengthCorn} เซนติเมตร</Text> </Text>
                        <Text style={styles.textdt}>ความยาวของส่วนที่ไม่ติดปลายฝัก : <Text style={{ color: 'black' }}>{this.state.Total_NotAttached} เซนติเมตร</Text></Text>
                        <Text style={styles.textdt}>จำนวนแแถวของเมล็ดข้าวโพด</Text>
                        <Text style={styles.textdt}>แถวของเมล็ดข้าวโพด : <Text style={{ color: 'black' }}>{this.state.Total_RowSeed}</Text></Text>
                        <Text style={styles.textdt}>จำนวนเมล็ดข้าวโพด : <Text style={{ color: 'black' }}>{this.state.Total_Seed}</Text></Text>
                        <Text style={styles.textdt}>ขนาดของซังและเมล็ดข้าวโพด</Text>
                        <Text style={styles.textdt}>ขนาดซังข้าวโพด : <Text style={{ color: 'black' }}>{this.state.Size_CornCob} เซนติเมตร</Text></Text>
                        <Text style={styles.textdt}>ขนาดเมล็ดข้าวโพด : <Text style={{ color: 'black' }}>{this.state.Size_CornSeed} เซนติเมตร</Text> </Text>
                        <Text style={styles.textdt}>น้ำหนักรวมซังข้าวโพด : <Text style={{ color: 'black' }}>{this.state.TotalWeigt_CornCob} กรัม</Text></Text>
                        <Text style={styles.textdt}>น้ำหนักเนื้อข้าวโพด : <Text style={{ color: 'black' }}>{this.state.TotalWeigt_CornMeat} กรัม</Text></Text>
                    </View>
                </ImageBackground>

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
    bgManage: {
        backgroundColor: '#F7F9F9'
    },
    Image: {
        marginLeft: 15,
        borderRadius: 14,
        height: 170,
        width: 250,
    },
    container: {
        alignSelf: 'center',
        paddingLeft: 50,
        paddingRight: 20,
        paddingTop: 30,
        marginBottom: 40,
        width: 380,
        height: 1100,
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
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textdt: {
        marginTop: 10,
        fontSize: 15,
        color: 'green'
    },
    textInDt: {
        color: 'green'
    },
})

export default ShowDataFarm;