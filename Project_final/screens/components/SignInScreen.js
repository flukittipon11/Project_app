import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import global from "../../global";
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native';

console.disableYellowBox = true;

// icon สามารถเลือกได้ที่ 
// https://callstack.github.io/react-native-paper/icons.html

export default class SignInScreen extends React.Component {
  state = {
    email: "test@gmail.com",
    password: ""
  }

  componentDidMount() {
    global.firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.props.navigation.navigate("Home");

        }

      }
    );
  }
  login_pressed() {
    this.props.navigation.navigate("Home");
  }

  // constructor(props) {
  //   super(props)
  //   this.state = ({
  //     email: '',
  //     password: ''
  //   })
  // }


  // state = {
  //   logined: false,
  //   user: null,

  //   email: "",
  //   password: ""
  // }
  // componentDidMount() {
  //   global.firebase.auth().onAuthStateChanged(
  //     (user) => this.setState({user:user})
  //     );


  //       // if (user) {
  //       //   this.props.navigation.navigate("Home");


  // }

  // login_pressed(){
  //   this.props.navigation.navigate("Home");
  // }

  render() {
    return (
      <ImageBackground style={styles.background} source={{ uri: 'https://images.unsplash.com/photo-1554402100-8d1d9f3dff80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}>
        <View style={styles.container}>
          <Image style={styles.Logo} source={{ uri: 'https://sv1.picz.in.th/images/2021/02/14/oxqCU1.th.png' }} />
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/3498db' }} />
            <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              underlineColorAndroid='transparent' />
          </View>

          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/envelope/androidL/40/3498db' }} />
            <TextInput style={styles.inputs}
              placeholder="Password"
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              secureTextEntry={true}
              autoCorrect={false}
              underlineColorAndroid='transparent' />
          </View>

          <TouchableOpacity onPress={() => this.login()} style={[styles.buttonContainer, styles.loginButton]}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.fblogin()} style={[styles.buttonContainer, styles.fabookButton]}>
            <View style={styles.socialButtonContent}>
              <Image style={styles.icon} source={{ uri: 'https://www.img.in.th/images/8111514ca10a9703fd48df124dfba937.png' }} />
              <Text style={styles.loginText}>  Continue with facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.googlelogin()} style={[styles.buttonContainer, styles.googleButton]}>
            <View style={styles.socialButtonContent}>
              <Image style={styles.icon} source={{ uri: 'https://sv1.picz.in.th/images/2021/02/14/oxqTQR.th.png' }} />
              <Text style={styles.loginText}>   Sign in with google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>


    );
  }

  //  loginUser = (email, password) => {
  //   try {
  //     global.firebase.auth().signInwithEmailAndPassword(email, password).then(function (user) {
  //       console.log(user)
  //     })
  //   }

  //   catch (err) {
  //     alert("Error : NO User", err);
  //   }
  // }
  async login() {
    try {
      await global.firebase.auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      global.type = "normal";
      this.props.navigation.navigate("Home");
    } catch (error) {
      alert(error);
    }

    //  var { navigation } = this.props;
    //  global.app.setState({logined:true});
    //  //navigation.navigate('Home');
    //  navigation.replace("Home");
  }
  fblogin() {
    signInWithFacebook();
    // var { navigation } = this.props;
    // global.app.setState({ logined: true });
    // //navigation.navigate('Home');
    // navigation.replace("Home");
  }
  googlelogin() {
    signInWithGoogle();
    // var { navigation } = this.props;
    // global.app.setState({ logined: true });
    // //navigation.navigate('Home');
    // navigation.replace("Home");
  }

}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  container: {
    height: 450,
    paddingTop: 80,
    borderRadius: 40,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17202A',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
    color: 'red'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'flex-end'
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: "#FFFFFF",
    marginRight: 5
  },
  Logo: {
    marginBottom: 20,
    width: 100,
    height: 100,
    marginTop: -70,
  }
});

export async function signInWithFacebook() {
  const firebase = global.firebase;
  const appId = "143858380258770";
  const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs
  await Facebook.initializeAsync(appId);

  const {
    type,
    token,
  } = await Facebook.logInWithReadPermissionsAsync(
    appId,
    { permissions }
  );

  switch (type) {
    case 'success': {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      global.facebookProfileData = await firebase.auth().signInAndRetrieveDataWithCredential(credential)
        ;  // Sign in with Facebook credential

      // Do something with Facebook profile data
      // OR you have subscribed to auth state change, authStateChange handler will process the profile data
      global.type = "facebook";
      return Promise.resolve(true);
    }
    case 'cancel': {
      return Promise.reject(false);
    }
  }
}
async function signInWithGoogle() {
  const firebase = global.firebase;
  const config = {
    androidClientId: '716022843635-kvppp4tj5jgvjtbqrnfulrp3rogfns2m.apps.googleusercontent.com',
    iosClientId: "716022843635-jot2oj8tj7thcdbpl5ec8ovdra1o8nct.apps.googleusercontent.com",
    scopes: ['profile', 'email'],
  };
  try {
    var res = await Google.logInAsync(config);
    if (res.type == 'success') {
      await firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      // Set persistent auth state
      const credential = firebase.auth
        .GoogleAuthProvider
        .credential(res.idToken, res.accessToken);
      global.googleProfileData = await firebase.auth()
        .signInAndRetrieveDataWithCredential(credential)
      global.type = "google";
      return Promise.resolve(true);
    } else {
      return Promise.reject(false);
    }
  } catch (error) {
    alert(error);
    return Promise.reject(false);
  }
}
