//import liraries
import React, { Component, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  BackHandler,
} from 'react-native';
import { Container, Content, H1, H2, H3, Icon, Input, Item } from 'native-base';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Actions } from 'react-native-router-flux';
import { Spacer, Messages } from '../UI';
import TextInput from '../UI/TextInput';
import Colors from '../../../native-base-theme/variables/commonColor';
import Button from '../UI/Button';
import translate from '../../containers/language/language';

// create a component
const Login = ({ signin }) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(translate.enter_email_address),
    password: yup.string().min(5, translate.password_min).required(translate.password_required),
  });

  const resolver = yupResolver(schema);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver });

  const backAction = () => {
    if (Actions.currentScene === 'Login') {
      Alert.alert(translate.warning, translate.quit_app, [
        {
          text: translate.cancel,
          onPress: () => null,
          style: translate.cancel,
        },
        { text: translate.yes, onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Group1.png')}
        style={{ position: 'absolute', top: -245, left: 0, width: Dimensions.get('window').width }}
        resizeMode="contain"
      />
      <ScrollView style={{ flex: 1, alignSelf: 'stretch', paddingHorizontal: 15 }}>
        <View
          style={{ marginBottom: 180, alignItems: 'flex-end', marginTop: 70, paddingRight: 15 }}
        >
          <Text style={{ fontSize: 40, fontFamily: 'Montserrat' }}>LOGIN</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
          <Item style={[styles.input]}>
            <Icon name="mail" style={{ color: Colors.brandPrimary }} />
            <Input
              placeholder="Login"
              onChangeText={(value) => setValue('email', value)}
              autoCapitalize="none"
            />
          </Item>
          {errors.email && <Messages message={errors.email.message} />}
          <View style={{ marginTop: 10 }} />
          <TextInput
            secure
            color={Colors.brandPrimary}
            onChangeText={(value) => setValue('password', value)}
            style={styles.input}
            placeholder="password"
          />
          {errors.password && <Messages message={errors.password.message} />}
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{ marginTop: 15, alignItems: 'center', width: '100%' }}
          >
            <Text style={{ color: Colors.brandPrimary, fontFamily: 'Montserrat' }}>
              Forgot your password ?
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 15,
            }}
          >
            <View style={{ width: '60%' }}>
              <Button
                title={'Sign in'}
                color="#fff"
                bg={Colors.brandPrimary}
                onPress={() => Actions.Main()}
                //onPress={handleSubmit(signin)}
              />
            </View>
            <TouchableOpacity onPress={() => Actions.Register()} style={{ marginVertical: 15 }}>
              <Text style={{ fontFamily: 'Montserrat' }}>
                You don't have an account ?{' '}
                <Text style={{ color: Colors.brandPrimary, fontFamily: 'Montserrat bold' }}>
                  Register
                </Text>
              </Text>
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Montserrat' }}>Or whit</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '70%',
            }}
          >
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Facebook.png')}
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/google.png')}
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Twitter.png')}
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#efeaf1',
    height: 50,
    padding: 10,
    borderRadius: 10,
    paddingLeft: 15,
    borderBottomColor: Colors.brandPrimary,
  },
});

export default Login;
