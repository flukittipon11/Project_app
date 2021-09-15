import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity, Image } from 'react-native'
import { ListItem, Badge, Avatar, Button, Icon } from 'react-native-elements'
import firebase from '../../global'
import * as Permissions from 'expo-permissions';
import ImagePicker from 'react-native-image-picker'
import firestore from '@react-native-firebase/firestore'

class SecondRecommend extends Component {
    state = {
        user: {
            paragraph1: "",
            paragraph2: "",
            paragraph3: "",
            paragraph4: "",
            paragraph5: "",
            paragraph6: "",
            paragraph7: "",
            paragraph8: "",
            paragraph9: "",
            paragraph10: "",
            paragraph11: "",
            paragraph12: "",
        }
    }
    constructor(props) {
        super(props);
        this.getData();
        this.subscriber = global.firebase.firestore().collection("Recommend").doc('c6IiFlzFWQ8ZoMPXUSoB').onSnapshot(doc => {
            this.setState({
                user: {
                    paragraph1: doc.data().paragraph1,
                    paragraph2: doc.data().paragraph2,
                    paragraph3: doc.data().paragraph3,
                    paragraph4: doc.data().paragraph4,
                    paragraph5: doc.data().paragraph5,
                    paragraph6: doc.data().paragraph6,
                    paragraph7: doc.data().paragraph7,
                    paragraph8: doc.data().paragraph8,
                    paragraph9: doc.data().paragraph9,
                    paragraph10: doc.data().paragraph10,
                    paragraph11: doc.data().paragraph11,
                    paragraph12: doc.data().paragraph12,
                }
            })
        })
    }


    getData = async () => {
        const userDocument = await global.firebase.firestore().collection("Recommend").doc('c6IiFlzFWQ8ZoMPXUSoB').get()
        console.log(userDocument)
    }
    // constructor() {
    //   super();

    //   this.state = {
    //     key: '',
    //     Farm_name: '',
    //     Farm_place: '',
    //     Farm_width: '',
    //     Detail: '',
    //     SheathCorn: '',
    //     Length_SheathBefore: '',
    //     Width_SheathBefore: '',
    //     Weight_BeforeCasing: '',
    //     Weight_BeforeBreakStem: '',
    //     Husk_Cover: '',
    //     Weight_AfterCasing: '',
    //     Diameter_Size: '',
    //     Total_LengthCorn: '',
    //     Total_NotAttached: '',
    //     Total_RowSeed: '',
    //     Total_Seed: '',
    //     Size_CornCob: '',
    //     Size_CornSeed: '',
    //     TotalWeigt_CornCob: '',
    //     TotalWeigt_CornMeat: '',
    //     isLoading: true
    //   }
    // }

    // componentDidMount() {
    //   const dbRef = global.firebase.firestore().collection('Corn-growth').doc(this.props.route.params.userKey);
    //   dbRef.get().then((res) => {
    //     if (res.exists) {
    //       const farm = res.data();
    //       this.setState({
    //         key: res.id,
    //         Farm_name: farm.Farm_name,
    //         Farm_place: farm.Farm_place,
    //         Farm_width: farm.Farm_width,
    //         Detail: farm.Detail,
    //         SheathCorn: farm.SheathCorn,
    //         Length_SheathBefore: farm.Length_SheathBefore,
    //         Width_SheathBefore: farm.Width_SheathBefore,
    //         Weight_BeforeCasing: farm.Weight_BeforeCasing,
    //         Weight_BeforeBreakStem: farm.Weight_BeforeBreakStem,
    //         Husk_Cover: farm.Husk_Cover,
    //         Weight_AfterCasing: farm.Weight_AfterCasing,
    //         Diameter_Size: farm.Diameter_Size,
    //         Total_LengthCorn: farm.Total_LengthCorn,
    //         Total_NotAttached: farm.Total_NotAttached,
    //         Total_RowSeed: farm.Total_RowSeed,
    //         Total_Seed: farm.Total_Seed,
    //         Size_CornCob: farm.Size_CornCob,
    //         Size_CornSeed: farm.Size_CornSeed,
    //         TotalWeigt_CornCob: farm.TotalWeigt_CornCob,
    //         TotalWeigt_CornMeat: farm.TotalWeigt_CornMeat,
    //         Corn_Varieties: farm.Corn_Varieties,
    //         isLoading: false
    //       })
    //     } else {
    //       console.log('Document does not exist!');
    //     }
    //   })
    // }

    // getCollection = (querySnapShot) => {
    //   const userArr = [];
    //   querySnapShot.forEach((res) => {
    //     const { data1,data2,data3,data4,data5 } = res.data();
    //     userArr.push({
    //       key: res.id,
    //       res,
    //       data1,data2,data3,data4,data5
    //     })
    //   })
    //   this.setState({
    //     userArr,
    //     isLoading: false
    //   })
    // }
    render() {
        return (
            <ScrollView style={styles.bgImage}>
                <Text style={styles.texttitle}>สภาพแวดล้อมที่เหมาะสมต่อการปลูก</Text>
                <Text style={styles.texttitle2}>พื้นที่ปลูก</Text>
                <Text style={styles.textcontent}>{this.state.user.paragraph6}</Text>
                <Text style={styles.texttitle2}>ลักษณะดิน</Text>
                <Text style={styles.textcontent}>{this.state.user.paragraph7}</Text>
                <Text style={styles.texttitle2}>สภาพภูมิอากาศ</Text>
                <Text style={styles.textcontent}>{this.state.user.paragraph8}</Text>
                <Text style={styles.texttitle2}>แหล่งน้ำ</Text>
                <Text style={styles.textcontent}>{this.state.user.paragraph9}</Text>
                <View style={styles.container}>
                    <Text style={styles.texttitlefooter}>การปลูกข้าวโพด และการดูแลรักษา</Text>
                    <Image style={styles.cardImage} source={{ uri: 'https://www.kasetkaoklai.com/home/wp-content/uploads/2020/09/3-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81.jpg' }} />
                    <Text style={styles.textfooterbottom}>การเตรียมดิน</Text>
                    <Text style={styles.textcontentfooter}>{this.state.user.paragraph10}</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.texttitle2footer}>การให้น้ำ</Text>
                    <Image style={styles.cardImage} source={{ uri: 'https://lh3.googleusercontent.com/proxy/RRrY_M00_bL0Cj1ts82-COGxIkw9jNr49otZybk3SbZAJygvytiE6WOH5QOqWkw4JqfgSlRhFfxSezJe8o-cmhR-Hl_cinPqNORRiUEXYcu30f__QHLakCizT1dTrVMajOYHdwFkkes' }} />
                    <Text style={styles.textcontentfooter}>{this.state.user.paragraph11}</Text>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.texttitle2footer}>การให้ปุ๋ย</Text>
                    <Image style={styles.cardImage} source={{ uri: 'https://i.ytimg.com/vi/Rx6hpnzO_Co/maxresdefault.jpg' }} />
                    <Text style={styles.textcontentfooter}>{this.state.user.paragraph12}</Text>
                </View>
            </ScrollView>

        );

    }

}

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        marginTop: 20,
        backgroundColor: '#594F4F',
    },
    container2: {
        backgroundColor: '#45ADA8',
    },
    container3: {
        backgroundColor: '#7AE393',
    },
    cardImage: {
        marginBottom: 10,
        height: 150,
        width: 300,
        alignSelf: 'center',
        borderRadius: 5,
    },
    cardImagefooter: {
        marginBottom: 10,
        height: 150,
        width: 300,
        alignSelf: 'center',
        borderRadius: 5,
    },
    texttitle: {
        marginBottom: 10,
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    texttitlefooter: {
        color: '#fff',
        marginBottom: 20,
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '900',
    },
    texttitle2: {
        marginBottom: 10,
        paddingLeft: 50,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#6E2C00'
    },
    texttitle2footer: {
        marginTop: 30,
        marginBottom: 20,
        paddingLeft: 50,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    textfooterbottom: {
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 50,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    textcontent: {
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 20,
        fontSize: 14,
    },
    textcontentfooter: {
        color: '#fff',
        marginTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        marginBottom: 20,
        fontSize: 14,
    },
    textfooter: {
        paddingLeft: 40,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '900',

    },
});

export default SecondRecommend;