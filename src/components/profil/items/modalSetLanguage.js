//import liraries
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'native-base';
import Colors from '../../../../native-base-theme/variables/commonColor';

// create a component
const ModalSetLanguage = () => {
  return (
    <Modal
      transparent
      animationType="slide"
      presentationStyle="overFullScreen"
      visible
      style={{ backgroundColor: '#fff' }}
      onRequestClose={() => {}}
    >
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000000',
          opacity: 0.6,
        }}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            margin: 5,
            backgroundColor: 'white',
            maxWidth: '80%',
            minWidth: 300,
            padding: 20,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <Text>Changez de langue</Text>
            <TouchableOpacity>
              <Icon name="close" style={{ color: Colors.brandPrimary }} />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <CheckBox checked={false} color={Colors.brandPrimary} />
              <Text>francais</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 5 }}>
              <CheckBox checked={false} color={Colors.brandPrimary} />
              <Text>Anglais</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

//make this component available to the app
export default ModalSetLanguage;
