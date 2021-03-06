import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity, Image } from 'react-native'
import { ListItem, Badge, Avatar } from 'react-native-elements'
import firebase from '../../global'
import * as Permissions from 'expo-permissions';
import ImagePicker from 'react-native-image-picker'


class ShowGrowthDataFarm extends Component {
    constructor() {
        super();

        this.firestoreRef = global.firebase.firestore().collection('Corn-growth');
        this.state = {
            isLoading: true,
            userArr: []
        }
    }
    /****************** function UploadImage********************/




    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getCollection = (querySnapShot) => {
        const userArr = [];
        querySnapShot.forEach((res) => {
            const { Farm_name, Farm_place, Farm_width, Detail, SheathCorn,
                Length_SheathBefore,
                Width_SheathBefore,
                Weight_BeforeCasing,
                Weight_BeforeBreakStem,
                Husk_Cover,
                Weight_AfterCasing,
                Diameter_Size,
                Total_LengthCorn,
                Total_NotAttached,
                Total_RowSeed,
                Total_Seed,
                Size_CornCob,
                Size_CornSeed,
                TotalWeigt_CornCob,
                TotalWeigt_CornMeat, Corn_Varieties, } = res.data();
            userArr.push({
                key: res.id,
                res,
                Farm_name,
                Farm_place,
                Farm_width,
                Detail,
                SheathCorn,
                Length_SheathBefore,
                Width_SheathBefore,
                Weight_BeforeCasing,
                Weight_BeforeBreakStem,
                Husk_Cover,
                Weight_AfterCasing,
                Diameter_Size,
                Total_LengthCorn,
                Total_NotAttached,
                Total_RowSeed,
                Total_Seed,
                Size_CornCob,
                Size_CornSeed,
                TotalWeigt_CornCob,
                TotalWeigt_CornMeat, Corn_Varieties,
            })
        })
        this.setState({
            userArr,
            isLoading: false
        })
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
                {
                    this.state.userArr.map((item, i) => {
                        return (
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.card} key={i} onPress={() => {
                                    this.props.navigation.navigate('AddCornGrowth', {
                                        userKey: item.key
                                    })
                                }}
                                >
                                    <Image style={styles.cardImage} source={{ uri: 'https://www.tkkfer.com/wp-content/uploads/2017/06/maize-272894_960_720.jpg' }} />
                                    <View style={styles.cardHeader}>
                                            <Text style={styles.title}>???????????????????????? : {item.Farm_name}</Text>
                                            <Text style={styles.farm_detail}>????????????????????? : {item.Farm_place}</Text>
                                            <Text style={styles.farm_detail}>??????????????????????????????????????? : {item.Corn_Varieties}</Text>
                                            <Text style={styles.farm_detail}>?????????????????? : {item.SheathCorn}</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    bgManage: {
        backgroundColor: '#e2d0bc'

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
    container: {
        flex: 3,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        width: 300,
        height: '30%',
        borderRadius: 10,

        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 5,
        backgroundColor: "#908579",
        flexBasis: '42%',
        marginHorizontal: 10,
    },
    cardHeader: {
        paddingTop: 10,
        paddingBottom: 13,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        justifyContent: "center",
        alignSelf: 'center'
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 150,
        width: 300,
        alignSelf: 'center',
        borderRadius: 5,

    },
    title: {
        fontSize: 20,
        color: "#FDEBD0"
    },
    farm_detail: {
        fontSize: 14,
        color: "#F2F4F4",
    }
})

export default ShowGrowthDataFarm;