import React from 'react';
import { Dimensions } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList, Container, Body, Title, AsyncStorage,
  ImageBackground
} from 'react-native';
import 'react-native-gesture-handler';
// import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import global from '../../global';


export default class HomeScreen extends React.Component {
  state = {
    user: null,
  };
  static navigationOptions = {
    title: 'หน้าหลัก',

  };
  constructor() {
    super();
    this.firebaseRef = global.firebase.firestore().collection("Posts");
    this.state = {
      userArr: []
    }
  }
  componentDidMount() {
    global.firebase.auth().onAuthStateChanged(
      (user) => {
        //console.log(user);
        this.setState({
          user: user
        })

      }
    );
    this.unsubscribe = this.firebaseRef.onSnapshot(this.getCollection);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getCollection = (querySnapShot) => {
    const userArr = [];
    querySnapShot.forEach((res) => {
      const {
        nameStd,
        post,
        date,
      } = res.data();
      userArr.push({
        key: res.id,
        res,
        nameStd,
        post,
        date,
      })
    })
    this.setState({
      userArr,
    })
  }
  async recommend() {
    this.props.navigation.navigate("Recommend")
  }
  async creatFarm() {
    this.props.navigation.navigate("CreatFarm");
  }
  async manageData() {
    this.props.navigation.navigate("ManageData");
  }
  async deleteFarm() {
    this.props.navigation.navigate("DeleteFarm")
  }
  async weatherForecast() {
    this.props.navigation.navigate("WeatherForecast");
  }
  async showFarm() {
    this.props.navigation.navigate("ShowFarm");
  }


  render() {
    return (
      <ImageBackground source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/AD2IJk.jpg' }} style={styles.background} >
        <ScrollView style={{ paddingBottom: 10, }}>
          <View style={styles.header} />
          <Text style={{ fontSize: 28, color: '#fff', position: 'absolute', fontWeight: '100', marginLeft: 60, marginTop: 150, }}>
            <Image source={{uri:'https://img-premium.flaticon.com/png/512/2048/premium/2048907.png?token=exp=1631059092~hmac=46e22deef4700292959d835e3b6b1bbe'}} style={{width:40,height:40}}/> ข่าวประชาสัมพันธ์</Text>
          <View style={styles.UpPost}>
          <ScrollView style={{paddingBottom:20}}>
            {this.state.userArr.map((post) => (
              <View style={styles.viewkey} key={post.id} >
                <Text style={styles.contentpost}>เรื่อง : {post.nameStd}</Text>
                <Text style={{ fontSize: 14, color: '#5f6a6a' }}>วันที่ : {post.date}</Text>
                <Text style={{ fontSize: 15 }}>เนื้อหาข่าว : {post.post}</Text>
              </View>
            ))
            }
          </ScrollView>
          </View>

          {/* <TouchableOpacity style={styles.welcome}>
            <Text style={{ fontSize: 18, color: '#273746', marginLeft: 15, }}>Username : test@gmail.com</Text>
            <Text style={{ fontSize: 18, color: '#273746', marginLeft: 15, }}>Faculty : วิทยาศาสตร์</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={{ width: 50, height: 50, position: 'absolute' }}>
            <Image style={styles.profile} source={{
              uri: 'https://img-premium.flaticon.com/png/512/1532/premium/1532731.png?token=exp=1631057377~hmac=8188882ca770eb84168e69a2832b4c62'
            }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, color: '#fff', position: 'absolute', fontWeight: 'bold', marginLeft: 15, marginTop: 10, }}>PLANTING DATA</Text>
          <Text style={{ fontSize: 40, color: '#fff', position: 'absolute', fontWeight: 'bold', marginLeft: 15, marginTop: 15, top: 25 }}>RECORDING</Text>
          <Text style={{ fontSize: 55, color: '#ABEBC6', position: 'absolute', fontWeight: 'bold', marginLeft: 15, marginTop: 20, top: 55 }}>FOR</Text>
          <Text style={{ fontSize: 25, color: '#FCF3CF', position: 'absolute', fontWeight: 'bold', marginLeft: 15, marginTop: 20, top: 63, left: 110 }}>ANALYZE</Text>
          <Text style={{ fontSize: 25, color: '#EDBB99', position: 'absolute', fontWeight: 'bold', marginLeft: 15, marginTop: 22, top: 86, left: 110 }}>PLAN CORN GROWTH</Text>
          <View style={{ flexDirection: 'row', marginBottom: 10, }}>
            <TouchableOpacity style={styles.menu} onPress={() => { this.recommend() }}>
              <View>
                <Image style={styles.imagemenu} source={{
                  uri: 'https://www.img.in.th/images/6809e585b3a9441eeaf518f8ae53c6e7.png'
                }} />
                <Text style={styles.text_title}>แนะนำการปลูก</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => { this.creatFarm() }}>
              <View>
                <Image style={styles.imagemenu} source={{
                  uri: 'https://sv1.picz.in.th/images/2021/02/10/ow1lCQ.th.png'
                }} />
                <Text style={styles.text_title}>สร้างแปลงบันทึก</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10, }}>
            <TouchableOpacity style={styles.menu} onPress={() => { this.weatherForecast() }}>
              <View>
                <Image style={styles.imagemenu} source={{
                  uri: 'https://sv1.picz.in.th/images/2021/04/25/ADnr6u.png'
                }} />
                <Text style={styles.text_title}>พยากรณ์อากาศ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => { this.manageData() }}>
              <View>
                <Image style={styles.imagemenu} source={{
                  uri: 'https://www.img.in.th/images/ba23a8192cc06195201fc4166e346f4d.png'
                }} />
                <Text style={styles.text_title}>จัดการข้อมูล</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10, }}>
            <TouchableOpacity style={styles.menu} onPress={() => { this.showFarm() }}>
              <View>
                <Image style={styles.imagemenu} source={{
                  uri: 'https://sv1.picz.in.th/images/2021/04/16/A1VpzN.png'
                }} />
                <Text style={styles.text_title}>แสดงข้อมูล</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu} onPress={() => { this.showFarm() }}>
              <View>
                <Image style={styles.imagemenu} source={{
                  uri: 'https://sv1.picz.in.th/images/2021/04/16/A1VyeW.png'
                }} />
                <Text style={styles.text_title}>Export Data</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }

}


const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contentpost: {
    fontWeight: 'bold',
    color: '#0b5345',
    fontSize: 18,
  },
  viewkey: {
    width: 320,
    paddingLeft: 5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingBottom: 5,
    borderBottomColor: '#117a65',
    borderWidth: 1,
    marginBottom: 10,
  },
  UpPost: {
    left: 20,
    top: 210,
    paddingLeft: 15,
    paddingTop: 15,
    position: 'absolute',
    borderRadius: 10,
    width: 350,
    backgroundColor: '#ffff',
    height: 220
  },
  header: {
    width: 400,
    height: 450,
    backgroundColor: '#212F3D',
    opacity: 0.8,
    borderBottomRightRadius: 50,
    marginBottom: 10,
  },
  welcome: {
    borderRadius: 50,
    width: 350,
    height: 80,
    backgroundColor: '#fff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.34,
    shadowRadius: 7.49,

    elevation: 12,
    top: 150,
    marginLeft: 20,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 10,
    left: 270,
    position: 'absolute',
  },
  menu: {
    width: 180,
    height: 180,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    borderRadius: 15,
  },
  imagemenu: {
    width: 65,
    height: 65,
    marginBottom: 10,
    alignSelf: 'center',
  },
  text_title: {
    fontSize: 18,
    alignSelf: 'center',
    color: "#696969",
  },

});
