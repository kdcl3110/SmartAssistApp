import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Image,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function ButtonGoogle() {
  async function googleLogin() {
    try {
      // add any configuration settings here:
      await GoogleSignin.configure({
        webClientId:
          '221712298341-0ec2q18bgf73e4ijffi72hm64sku0ma6.apps.googleusercontent.com',
        offlineAccess: false,
      });

      const data = await GoogleSignin.signIn();
      console.log(data);
      // this.props.navigation.navigate('Main', {});
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={[styles.main, { opacity: 0.8 }]}>
      <TouchableOpacity
        style={styles.touchStyle}
        onPress={() => {
          googleLogin();
        }}
      >
        <View style={styles.buttonGoogle}>
          <Text style={styles.buttonGoogleText}>
            Google
          </Text>
          <Image
            source={require('../../assets/images/google.png')}
            resizeMode="contain"
            style={{
              position: 'absolute', left: 15, top: 15, width: 20, height: 20,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    borderRadius: 25,
    height: 45,
    marginTop: 20,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
  },
  touchStyle: {
    elevation: 4,
  },
  buttonGray: {
    height: 50,
    padding: 15,
    borderRadius: 30,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    backgroundColor: '#EFEFEF',
  },

  buttonGoogle: {
    height: 45,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGoogleText: {
    textAlign: 'center',
    color: '#808080',
    backgroundColor: 'transparent',
  },
});
