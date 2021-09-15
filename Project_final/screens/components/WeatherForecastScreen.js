import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';


class WeatherForecastScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <View>
            <Image style={styles.image} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/ADnr6u.png' }} />
            <Text style={styles.titlecity}>ขอนแก่น</Text>
            <Text style={styles.titlecourty}>อำเภอเมือง ,</Text>
            <Text style={styles.titlecourty}>ตำบลในเมือง</Text>
            <Text style={styles.textdata}>25 ํC   <Image style={styles.imageIcon} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/ADrM8R.png' }} /> 40% <Image style={styles.imageIcon} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/AD8hqk.png' }} /> 40%
            </Text>
            <Text style={styles.textdataTime}>15 : 15 : 27 : 41 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View>
            <Image style={styles.image} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/AD8A5z.png' }} />
            <Text style={styles.titlecity}>ชัยภูมิ</Text>
            <Text style={styles.titlecourty}>อำเภอเมือง ,</Text>
            <Text style={styles.titlecourty}>ตำบลในเมือง</Text>
            <Text style={styles.textdata}>20 ํC   <Image style={styles.imageIcon} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/ADrM8R.png' }} /> 90% <Image style={styles.imageIcon} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/AD8hqk.png' }} /> 10%
            </Text>
            <Text style={styles.textdataTime}>05 : 45 : 12 : 56 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardrain}>
          <View>
            <Image style={styles.image} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/AD8jof.png' }} />
            <Text style={styles.titlecity}>นครราชสีมา</Text>
            <Text style={styles.titlecourty}>อำเภอเมือง ,</Text>
            <Text style={styles.titlecourty}>ตำบลในเมือง</Text>
            <Text style={styles.textdata}>25 ํC   <Image style={styles.imageIcon} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/ADrM8R.png' }} /> 0% <Image style={styles.imageIcon} source={{ uri: 'https://sv1.picz.in.th/images/2021/04/25/AD8hqk.png' }} /> 30%
            </Text>
            <Text style={styles.textdataTime}>60 : 10 : 59 : 29 </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    marginLeft: 230,
    position: 'absolute',
    width: 70,
    height: 70,
  },
  imageIcon: {
    width: 30,
    height: 30,
  },
  card: {
    paddingTop: 30,
    paddingLeft: 20,
    marginTop: 10,
    marginLeft: 30,
    shadowColor: '#00000021',
    width: 350,
    height: 230,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: "#3BA8FD",
    marginHorizontal: 10,
  },
  cardrain: {
    paddingTop: 30,
    paddingLeft: 20,
    marginTop: 10,
    marginLeft: 30,
    shadowColor: '#00000021',
    width: 350,
    height: 230,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor: "#616161",
    marginHorizontal: 10,
  },
  titlecity: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    flexDirection: 'row',
    marginBottom: 10,
    color:'#fff',
  },
  titlecourty: {
    paddingLeft: 10,
    flexDirection: 'row',
    color:'#fff',
  },
  textdata: {
    color:'#fff',
    marginTop:20,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  textdataTime: {
    color:'#fff',
    paddingLeft: 10,
    flexDirection: 'row',
  },

});

export default WeatherForecastScreen;