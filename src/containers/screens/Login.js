import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, Image, Text, ScrollView, TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import TextInput from '../../components/UI/TextInput';
import Head from '../../components/UI/Head';
import Button from '../../components/UI/Button';
import ButtonGoogle from '../../components/UI/ButtonGoogle';
// import {moderateScale} from 'react-native-size-matters';
// import i18n from 'i18n-js';
// import Toast from '../components/Toast';
// import Auth from '../services/auth';
// import CarrierInfo from 'react-native-carrier-info';
// const PNF = require('google-libphonenumber').PhoneNumberFormat;
// const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

function Login() {
  const [password, onChangePassword] = useState('Mot de passe');
  const [email, onChangeEmail] = useState('Email ou Telephone');

  //   componentDidMount() {
  //     let that = this;
  //     that.deviceCountry = 'CM';
  //     CarrierInfo.isoCountryCode().then((result) => {
  //       that.deviceCountry = result;
  //     });
  //   }

  const login = () => {
    console.log('login ok');
    console.log(`email: ${email} pass: ${password}`);
  };
  useEffect(() => {
    console.log("test ok");
    console.log(`email: ${email} pass: ${password}`);
  }, [email])
  // i18n.locale = this.props.currentLanguage;
  // i18n.fallbacks = true;
  // const InnertView = KeyboardAwareScrollView;
  return (
    <View style={styles.container}>
      <View style={[styles.absoluteBg]}>
        <Image
          style={styles.backgroundImage}
          resizeMode="cover"
          source={require('../../assets/images/bg_login.png')}
        />
      </View>
      <View style={[styles.absoluteBg, styles.overlay]} />
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
        >
          <View style={styles.content}>
            <Head />
            <Text style={styles.title}>Content de te revoir
              {/* {i18n.t('happy_to_see_you')} */}
            </Text>
            <ButtonGoogle />
            <View style={styles.or}>
              <View style={styles.line} />
              <Text style={{ padding: 10, color: 'white' }}>
                {/* {i18n.t('or')} */}
                ou
              </Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                marginTop: 10,
                alignItems: 'center',
                alignSelf: 'stretch',
              }}
            >
              <TextInput
                type='email'
                onChangeText={(mail) => onChangeEmail(mail)}
                placeholder={email}
              />
              <TextInput
                onChangeText={(passw) => onChangePassword(passw)}
                type='password'
                placeholder={password}
              />

              <Button
                title="Login"
                onPress={() => { login(); }}
              />
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  //   this.props.navigation.navigate('Password', {});
                }}
              >
                <Text style={styles.center} >
                  Mot de passe oublie?
                  {/* {i18n.t('password_forgot')} */}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  Actions.Register()
                  //   this.props.navigation.navigate('Register', {});
                }}
              >
                <Text
                  style={styles.underlign}
                >
                  S'inscrire
                  {/* {i18n.t('register')} */}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  center: {
    color: 'white',
    textAlign: 'center',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  underlign: {
    color: 'white',
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 0.3,
    backgroundColor: '#FFFFFF',
  },
  absoluteBg: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    backgroundColor: '#000000',
    opacity: 0.6,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    flex: 1,
    // padding: moderateScale(30, 2),
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

const mapStateToProps = (state) => ({
  /* AccessToken: state.auth.AccessToken,
            RefreshToken: state.auth.RefreshToken, */
  // currentLanguage: state.app.currentLanguage,
  // currentUser: state.user.currentUser,
  // currentConsolidator: state.consolidator.currentConsolidator,
});

// export default connect(mapStateToProps)(LoginScreen);
export default Login;
