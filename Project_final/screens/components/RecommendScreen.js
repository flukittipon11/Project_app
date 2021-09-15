import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity, Image } from 'react-native'
import { ListItem, Badge, Avatar, Button, Icon } from 'react-native-elements'
import firebase from '../../global'
import * as Permissions from 'expo-permissions';
import ImagePicker from 'react-native-image-picker'
import firestore from '@react-native-firebase/firestore'

class RecommendScreen extends Component {
  state = {
    user: {
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      paragraph4: "",
      paragraph5: "",
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
        }
      })
    })
  }
  async Second() {
    this.props.navigation.navigate("SecondRec");
  }


  getData = async () => {
    const userDocument = await global.firebase.firestore().collection("Recommend").doc('c6IiFlzFWQ8ZoMPXUSoB').get()
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
        <View style={styles.container}>
          <Text style={styles.texttitle}>ความรู้เกี่ยวกับข้าวโพด</Text>
          <Image style={styles.cardImage} source={{ uri: 'https://images.unsplash.com/photo-1440617711314-de01e4cddec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80' }} />
          <Text style={styles.texttitle2}>ข้าวโพด ประโยชน์และข้อมูลโภชนาการที่สำคัญ</Text>
          <Text style={styles.textcontent}>{this.state.user.paragraph5}</Text>
          <Text style={styles.texttitle2}>ลักษณะของข้าวโพด</Text>
          <Text style={styles.textcontent}><Text style={{ color: 'green' }}>ต้นข้าวโพด</Text> {this.state.user.paragraph1}</Text>
          <Text style={styles.textcontent}><Text style={{ color: 'green' }}>ใบข้าวโพด</Text> {this.state.user.paragraph2}</Text>
          <Text style={styles.textcontent}><Text style={{ color: 'green' }}>ดอกข้าวโพด</Text> {this.state.user.paragraph3}</Text>
          <Text style={styles.textcontent}><Text style={{ color: 'green' }}>ผลข้าวโพด</Text> {this.state.user.paragraph4}</Text>
        </View>
        <View>
          <Text style={styles.textfooter}>ชนิดของข้าวโพด</Text>
          <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'center', marginBottom: 5 }}>
            <View style={{}}>
              <Image style={{
                marginBottom: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
              }} source={{ uri: 'http://www.songsermkased.com/wp-content/uploads/2014/05/dent-corn.jpg' }} />
              <Text style={{ fontSize: 15, padding: 10, marginTop: -10,color:'#fff' }}>ข้าวโพดไร่</Text>
              <Text style={{ fontSize: 15, padding: 10, marginTop: -20,color:'#fff' }}>ชนิดหัวบุบ</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Image style={{
                marginBottom: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
              }} source={{ uri: 'https://agrimark.dit.go.th/fileAttach/27122019_131109-0000167496.jpg' }} />
              <Text style={{ fontSize: 15, padding: 10, marginTop: -10,color:'#fff' }}>ข้าวโพดไร่</Text>
              <Text style={{ fontSize: 15, padding: 10, marginTop: -20,color:'#fff' }}>ชนิดหัวแข็ง</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Image style={{
                marginBottom: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
              }} source={{ uri: 'https://www.technologychaoban.com/wp-content/uploads/2016/08/1406542710.jpg' }} />
              <Text style={{ fontSize: 15,color:'#fff' }}>ข้าวโพดหวาน</Text>
            </View>
          </View>
          <View style={{ paddingLeft: 10, flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
            <View style={{}}>
              <Image style={{
                marginBottom: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
              }} source={{ uri: 'http://www.songsermkased.com/wp-content/uploads/2014/05/Corn-Popcorn.jpg' }} />
              <Text style={{ fontSize: 15, marginLeft: 20,color:'#fff' }}>ข้าวโพดคั่ว</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Image style={{
                marginLeft: 10,
                marginBottom: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
              }} source={{ uri: 'https://www.kasetvoice.com/wp-content/uploads/2018/06/34669882_10208843920374935_1088621763966795776_n-1.jpg' }} />
              <Text style={{ fontSize: 15, padding: 10, marginTop: -10,color:'#fff' }}>ข้าวโพดข้าวเหนียว</Text>
              <Text style={{ fontSize: 15, padding: 10, marginTop: -20,color:'#fff' }}>หรือข้าวโพดเทียน</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Image style={{
                marginLeft: -20,
                marginBottom: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
              }} source={{ uri: 'https://sites.google.com/site/cerealflour1/_/rsrc/1430149603314/home/corn-starch/44a4ec9ca34545ae8ce51c4ce4439d9c.jpg?height=266&width=400' }} />
              <Text style={{ fontSize: 15, marginLeft: -10,color:'#fff' }}>ข้าวโพดแป้ง</Text>
            </View>
          </View>
          <View style={{ paddingLeft: 30, flexDirection: 'row', marginBottom: 20, marginTop: -20,color:'#fff' }}>
            <View style={{}}>
              <Image style={{
                marginBottom: 10,
                height: 100,
                width: 100,
                borderRadius: 100,
              }} source={{ uri: 'https://www2.safras.com.br/wp-content/uploads/2019/12/milharal.jpg' }} />
              <Text style={{ fontSize: 15, paddingLeft: 20,color:'#fff' }}>ข้าวโพดป่า</Text>
            </View>
          </View>
        </View>
        <Button
          buttonStyle={{height:60,backgroundColor:'#273746'}}
          onPress={() => this.Second()}
          title="การปลูกข้าวโพดเบื้องต้น"
          color="#273746"
          icon={
            <Icon
              name="arrow-right"
              size={30}
              color="#fff"
            />
            
          }
          iconRight='false'
        />

      </ScrollView>

    );

  }

}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    backgroundColor: '#A6B079',

  },
  container: {
    paddingBottom:30,
    borderBottomRightRadius:60,
    borderBottomLeftRadius:60,
    backgroundColor: '#fff',
  },
  cardImage: {
    marginBottom: 10,
    height: 180,
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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '900',
  },
  texttitle2: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '900',
  },
  textcontent: {
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  textfooter: {
    paddingLeft: 40,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'

  },
});

export default RecommendScreen;