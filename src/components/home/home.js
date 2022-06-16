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
    <Container style={{ backgroundColor: '#f4f7fd', paddingHorizontal: 10 }}>
      <View>
        <View
          style={{
            height: 60,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            paddingHorizontal: 15,
            backgroundColor: '#f9fbfd',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{ fontWeight: 'bold', fontSize: 18, fontFamily: 'AppleSDGothicNeo-SemiBold' }}
          >
            Home
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              style={{ padding: 10, borderWidth: 1, borderRadius: 5, borderColor: '#ccc' }}
            >
              <Icon name="notifications" style={{ fontSize: 14 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Icon name="ellipsis-vertical" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: 150,
              borderRadius: 10,
              backgroundColor: Colors.brandPrimary,
              // elevation: 4,
            }}
          >
            <Image
              source={require('../../assets/images/pngwing.png')}
              style={{ width: 190, height: 200, position: 'absolute', right: 0, top: -20 }}
            />
            <View style={{ marginTop: 20, marginLeft: 10 }}>
              <Text style={{ color: '#fff', fontSize: 25 }}>Bienvenue</Text>
              <Text style={{ color: '#fff' }}>
                Je suis{' '}
                <Text style={{ fontSize: 15, fontFamily: 'Montserrat bold' }}>Smart Assit</Text>
              </Text>
              <View style={{ width: 100, marginTop: 20 }}>
                <Button
                  title={'Discutons'}
                  color={Colors.brandPrimary}
                  bg={'#fff'}
                  onPress={() => Actions.Chat()}
                />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.icon, { backgroundColor: '#f0f3ff' }]}>
                <Image
                  source={require('../../assets/images/preinscription.png')}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Montserrat bold', fontSize: 16 }}>Préinscription</Text>
                <Text style={{ fontSize: 13, color: '#666' }}>
                  Cliquez pour voir les détails sur les préinscriptions
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.icon, { backgroundColor: '#f0f3ff' }]}>
                <Image
                  source={require('../../assets/images/orientation.jpg')}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Montserrat bold', fontSize: 16 }}>Orientation</Text>
                <Text style={{ fontSize: 13, color: '#666' }}>
                  Cliquez pour voir les détails sur les préinscriptions
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.icon, { backgroundColor: '#f0f3ff' }]}>
                <Image
                  source={require('../../assets/images/parrainage.png')}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Montserrat bold', fontSize: 16 }}>Parainage</Text>
                <Text style={{ fontSize: 13, color: '#666' }}>
                  Cliquez pour voir les détails sur les préinscriptions
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <View style={[styles.icon, { backgroundColor: '#e0f5e9' }]}>
                <Image
                  source={require('../../assets/images/forun.png')}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: 'Montserrat bold', fontSize: 16 }}>Forum</Text>
                <Text style={{ fontSize: 13, color: '#666' }}>
                  Cliquez pour voir les détails sur les préinscriptions
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Container>
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
  card: {
    width: '46%',
    height: 180,
    borderRadius: 10,
    backgroundColor: '#fff',
    // backgroundColor: '#fff6ed',
    // elevation: 2,
    padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
});

//make this component available to the app
export default Login;
