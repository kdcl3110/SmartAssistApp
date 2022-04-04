//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, H1, H2, H3, Icon, Input, Item } from 'native-base';
import { Spacer } from '../UI';
import TextInput from '../UI/TextInput';
import Colors from '../../../native-base-theme/variables/commonColor';
import Button from '../UI/Button';
import { Actions } from 'react-native-router-flux';

// create a component
const Login = () => {
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
        <View style={{ marginBottom: 60, marginTop: 150 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Let's Login</Text>
          <TouchableOpacity onPress={() => Actions.Register()}>
            <Text>
              You don't have an account ?{' '}
              <Text style={{ fontWeight: 'bold', color: Colors.brandPrimary }}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
        {/* <Spacer /> */}
        {/* <Spacer /> */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Item style={[styles.input]}>
            <Icon name="mail" style={{ color: Colors.brandPrimary }} />
            <Input placeholder="Login" />
          </Item>
          <View style={{ marginTop: 10 }} />
          <TextInput
            secure
            color={Colors.brandPrimary}
            onChangeText={() => {}}
            style={styles.input}
            placeholder="password"
          />
          <TouchableOpacity
            onPress={() => Actions.pop()}
            style={{ marginTop: 20, alignItems: 'flex-end', width: '100%' }}
          >
            <Text>Forgot your password ?</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}
          >
            <View style={{ width: '45%' }}>
              <Button
                title={'login'}
                color="#fff"
                bg={Colors.brandPrimary}
                onPress={() => Actions.Main()}
              />
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
export default Login;
