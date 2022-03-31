import React from 'react';
import { View, Text, Image } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

export default function Head({ color }) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      {color
        ? (
          <Transition shared="logo" style={{}}>
            <Image
              source={require('../../assets/images/logo_green.png')}
              resizeMode="contain"
              style={{ width: 100, height: 80 }}
            />

          </Transition>
        )
        : (
          <Transition shared="logo" style={{}}>
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
              style={{ width: 100, height: 80 }}
            />

          </Transition>
        )}
    </View>
  );
}
