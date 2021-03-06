import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import HomeScreen from './screens/components/HomeScreen';
import SignInScreen from './screens/components/SignInScreen';
import RecommendScreen from './screens/components/RecommendScreen';
import CreatFarmScreen from './screens/components/CreatFarmScreen';
import WeatherForecastScreen from './screens/components/WeatherForecastScreen';
import ShowFarmScreen from './screens/components/ShowFarmScreen';
import ManageDataScreen from './screens/components/ManageDataScreen';
import global from './global';
import CreatFarm from './screens/components/CreateFram';
import EditFarmScreen from './screens/components/EditFarmScreen';
import FarmDetailScreen from './screens/components/FarmDetailScreen';
import ShowDataFarm from './screens/components/ShowDataFarm';
import FarmDetailEdit from './screens/components/FarmDetailEdit'
import SecondRecommend from './screens/components/SecondRecommend'
import AddDataFarm from './screens/components/AddDataFarm';
import AddDataGrowth from './screens/components/AddDataGrowth';
import ShowGrowthDataFarm from './screens/components/ShowGrowthDataFarm';
// import DeleteFarmScreen from './screens/components/DeleteFarmScreen';


// console.disableYellowBox = true;

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    logined: true,
    user: null,
  };
  componentDidMount() {
    global.app = this;
  }
  render() {
    console.log(global.config['apiKey']);
    if (global.config['apiKey'] == undefined) {
      return (
        <View style={{ marginTop: 100, backgroundColor: "#555" }}>
          <Text>Please setup Firebase config in global.js</Text>
        </View>);
    }
    var screen = "SingIn";
    // if (this.state.logined)
    //   screen = "SignIn";
    return (
      <PaperProvider theme={global.theme}>
        <NavigationContainer theme={global.theme}>
          <Stack.Navigator initialRouteName={screen}> 
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "?????????????????????????????????", headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" },headerBackImage:()=>null,headerBackTitle:()=>null}} />
            <Stack.Screen name="Recommend" component={RecommendScreen} options={{ title: "????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" } }} />
            <Stack.Screen name="SecondRec" component={SecondRecommend} options={{ title: "????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" } }} />
            <Stack.Screen name="CreatFarm" component={CreatFarmScreen} options={{ title: "????????????????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" } }} />
            <Stack.Screen name="EditFarm" component={EditFarmScreen} options={{ title: "??????????????????????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" } }} />
            <Stack.Screen name="FarmDetail" component={FarmDetailScreen} options={{ title: "????????????????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#BA4A00" } }} />
            <Stack.Screen name="FarmEdit" component={FarmDetailEdit} options={{ title: "?????????????????????????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#BA4A00" } }} />
            {/* <Stack.Screen name="DeleteFarm" component={DeleteFarmScreen} options={{ title: "???????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8 " } }}/> */}
            <Stack.Screen name="ShowData" component={ShowDataFarm} options={{ title: "?????????????????????????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" } }} />
            <Stack.Screen name="CreatdFarmcorn" component={CreatFarm} options={{ title: "???????????????????????????????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" } }} />
            <Stack.Screen name="WeatherForecast" component={WeatherForecastScreen} options={{ title: "????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#5DADE2" } }} />
            <Stack.Screen name="ShowFarm" component={ShowFarmScreen} options={{ title: "?????????????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#45ADA8" } }} />
            <Stack.Screen name="ManageData" component={ManageDataScreen} options={{ title: "????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#BA4A00" } }} />
            <Stack.Screen name="AddData" component={AddDataFarm} options={{ title: "????????????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#BA4A00" } }} />
            <Stack.Screen name="AddCornGrowth" component={AddDataGrowth} options={{ title: "??????????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#BA4A00" } }} />
            <Stack.Screen name="ShowGrowth" component={ShowGrowthDataFarm} options={{ title: "????????????????????????", headerTintColor: "white", headerStyle: { backgroundColor: "#BA4A00" } }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
