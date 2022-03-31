//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
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
        source={require('../../assets/images/num2.png')}
        style={{ position: 'absolute', top: -1, right: -1 }}
      />
      <Image
        source={require('../../assets/images/2num1.png')}
        style={{ position: 'absolute', bottom: -3, left: -1 }}
      />
      <ScrollView style={{ flex: 1, alignSelf: 'stretch', paddingHorizontal: 15 }}>
        <View style={{ marginBottom: 60, marginTop: 75 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Let's Register</Text>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Text>
              Do you have an account ?{' '}
              <Text style={{ fontWeight: 'bold', color: Colors.brandPrimary }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Spacer /> */}
        {/* <Spacer /> */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Item style={[styles.input]}>
            <Icon name="person" style={{ color: Colors.brandPrimary }} />
            <Input placeholder="Your name" />
          </Item>
          <View style={{ marginTop: 10 }} />
          {/* <Item style={[styles.input]}>
            <Icon name="call" style={{ color: Colors.brandPrimary }} />
            <Input placeholder="Register" />
          </Item> */}
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
          <Item style={[styles.input]}>
            <Icon name="mail" style={{ color: Colors.brandPrimary }} />
            <Input placeholder="email" />
          </Item>
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
            placeholder="password"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 30,
            }}
          >
            <View style={{ width: '45%' }}>
              <Button title={'Register'} color="#fff" bg={Colors.brandPrimary} />
            </View>
            <TouchableOpacity
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: '#ccc',
                flexDirection: 'row',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                width: '45%',
              }}
            >
              <Icon name="mail-outline" style={{ position: 'absolute', left: 5, color: '#999' }} />
              <Text style={{ fontWeight: 'bold', color: '#999' }}>Gmail</Text>
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
    backgroundColor: '#fff6ed',
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
