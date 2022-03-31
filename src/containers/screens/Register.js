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

function Register() {
  const [password, onChangePassword] = useState('Mot de passe');
  const [email, onChangeEmail] = useState('Email ou Telephone');
  const [name, onChangeName] = useState('Nom');
  const [prenom, onChangePrenom] = useState('Prenom');

  const login = () => {
    console.log('login ok');
    console.log(`email: ${email} pass: ${password}`);
  };
  useEffect(() => {
    console.log('test ok');
    console.log(`email: ${email} pass: ${password}`);
  }, [email]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
        >
          <View style={styles.content}>
            <Head color />
            <Text style={styles.title}>
              Inscrivez-vous avec :
              {/* {i18n.t('happy_to_see_you')} */}
            </Text>
            <ButtonGoogle />
            <View style={styles.or}>
              <View style={styles.line} />
              <Text style={{ padding: 10, color: 'black' }}>
                {/* {i18n.t('or')} */}
                ou
              </Text>
              <View style={styles.line} />
            </View>
            <View
              style={{
                alignSelf: 'stretch',
              }}
            >
              <TextInput
                type="name"
                onChangeText={(nam) => onChangeEmail(nam)}
                placeholder={name}
              />
              <TextInput
                onChangeText={(prenm) => onChangePassword(prenm)}
                type="prenom"
                placeholder={prenom}
              />
              <TextInput
                type="email"
                onChangeText={(mail) => onChangeEmail(mail)}
                placeholder={email}
              />
              <TextInput
                onChangeText={(passw) => onChangePassword(passw)}
                type="password"
                placeholder={password}
              />

              <Button
                title="Login"
                onPress={() => { login(); }}
              />

              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  Actions.pop();
                }}
              >
                <Text
                  style={styles.underlign}
                >
                  Se connecte
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
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  center: {
    color: 'black',
    textAlign: 'center',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  underlign: {
    color: 'black',
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  line: {
    flex: 1,
    height: 0.3,
    backgroundColor: '#000',
  },
  absoluteBg: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
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
export default Register;
