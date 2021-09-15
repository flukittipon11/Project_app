import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TouchableOpacity, Image, Text, } from 'react-native';
import firebase from '../../global';
import { ThemeProvider, Button, Input, Imge } from 'react-native-elements';
import Icon from 'react-native-vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';


class CreatFarmScreen extends Component {
  constructor() {
    super();
  }
  async createFarm() {
    this.props.navigation.navigate("CreatdFarmcorn")
  }
  async deleteFarm() {
    this.props.navigation.navigate("DeleteFarm");
  }
  async AddData(){
    this.props.navigation.navigate("ShowGrowth");
  }

  render() {
    return (

      <ThemeProvider theme={theme}>
        <ScrollView style={style.container}>
          <TouchableOpacity style={style.cards} onPress={() => { this.createFarm() }}>
            <View style={style.btncreate}>
              <Image
                source={{ uri: 'https://sv1.picz.in.th/images/2021/02/13/ogb91I.th.png' }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View style={style.content}>
              <Text style={style.contenttext}>สร้างแปลงการปลูก</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.cards} onPress={() => { this.AddData() }}>
            <View style={style.btncreate}>
              <Image
                source={{ uri: 'https://img-premium.flaticon.com/png/512/1149/premium/1149576.png?token=exp=1631070002~hmac=bc77024507f80fd1c8d95419adf639e5' }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View style={style.content}>
              <Text style={style.contenttext}>บันทึกข้อมูลการปลูก</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={style.cards} onPress={() => { this.deleteFarm() }}>
            <View style={style.btncreate}>
              <Image
                source={{ uri: 'https://www.img.in.th/images/5587b1e2066e8a19df82e386a1dbb945.png' }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View style={style.content}>
              <Text style={style.contenttext}>ลบหัวข้อการบันทึก</Text>
            </View>
          </TouchableOpacity> */}
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
    flex: 1,
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
  cards: {
    shadowColor: '#00000021',
    width: 300,
    height: 120,
    borderRadius: 10,
    position: 'relative',
    backgroundColor: 'white',
    marginTop: 18,
    alignSelf: 'center',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  btncreate: {
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 28,
    marginLeft: 10,
  },
  content: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    color: "#696969",
    marginLeft: 50,
  },
  contenttext: {
    fontSize: 18,
    marginLeft: 15,
  }


})
export default CreatFarmScreen;