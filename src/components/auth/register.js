//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Container, Content, H1, H2, H3, Icon, Input, Item } from 'native-base';
import { Spacer } from '../UI';
import { Actions } from 'react-native-router-flux';
import TextInput from '../UI/TextInput';
import Colors from '../../../native-base-theme/variables/commonColor';
import PhoneInput from '../UI/PhoneInput';
import Button from '../UI/Button';

// create a component
const Register = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Group1.png')}
        style={{ position: 'absolute', top: -245, left: 0, width: Dimensions.get('window').width }}
        resizeMode="contain"
      />

      {/* <Image
        source={require('../../assets/images/Group2.png')}
        style={{ position: 'absolute', width: Dimensions.get('window').width, bottom: -55 }}
        // resizeMethod="resize"
        resizeMode="contain"
      /> */}
      <ScrollView style={{ flex: 1, alignSelf: 'stretch', paddingHorizontal: 15 }}>
        <View
          style={{ marginBottom: 145, alignItems: 'flex-end', marginTop: 60, paddingRight: 20 }}
        >
          <Text style={{ fontSize: 40 }}>SIGN UP</Text>
        </View>
        {/* <Spacer /> */}
        {/* <Spacer /> */}
        <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
          <Item style={[styles.input]}>
            <Icon name="mail" style={{ color: Colors.brandPrimary }} />
            <Input placeholder="email" />
          </Item>
          <View style={{ marginTop: 10 }} />
          <View
            style={[
              styles.input,
              {
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderBottomColor: Colors.brandPrimary,
                width: '100%',
              },
            ]}
          >
            <PhoneInput
              onChangeText={(value) => setValue('phone', value)}
              onChangeValid={(value) => setValue('phoneValid', value)}
            />
          </View>
          <View style={{ marginTop: 10 }} />
          <View style={{ marginTop: 10 }} />
          <TextInput
            secure
            color={Colors.brandPrimary}
            onChangeText={() => {}}
            style={styles.input}
            placeholder="password"
          />
          <View style={{ marginTop: 10 }} />
          <TextInput
            secure
            color={Colors.brandPrimary}
            onChangeText={() => {}}
            style={styles.input}
            placeholder="password confirm"
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 15,
            }}
          >
            <View style={{ width: '60%' }}>
              <Button title={'Register'} color="#fff" bg={Colors.brandPrimary} />
            </View>
            <TouchableOpacity onPress={() => Actions.pop()} style={{ marginVertical: 15 }}>
              <Text>
                Do you have an account ?{' '}
                <Text style={{ color: Colors.brandPrimary, fontFamily: 'Montserrat bold' }}>Login</Text>
              </Text>
            </TouchableOpacity>
            <Text>Or with</Text>
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
    // <View style={styles.container}>
    // </View>
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
    borderRadius: 5,
    paddingLeft: 15,
    borderBottomColor: Colors.brandPrimary,
  },
});

//make this component available to the app
export default Register;
0;
