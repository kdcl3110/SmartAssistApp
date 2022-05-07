import React, { useState } from 'react';
import { View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text, Input, Icon, Item, Content, Container, H3, H2 } from 'native-base';
import PropTypes from 'prop-types';
import Colors from '../../../native-base-theme/variables/commonColor';
import ButtonUI from '../UI/ButtonUI';
import { Actions } from 'react-native-router-flux';
import { Spacer } from '../UI';

const priceRangerModal = (props) => (
  <Modal
    transparent
    animationType="slide"
    presentationStyle="overFullScreen"
    visible={props?.modalVisible}
    onRequestClose={() => {
      props?.setModalVisible(false);
    }}
  >
    <View
      style={{
        // flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000000',
        opacity: 0.6,
      }}
    />
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <View
        style={{
          //   margin: 5,
          //   minWidth: 280,
          width: '90%',
          maxHeight: `45%`,
          backgroundColor: 'white',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          style={{ alignItems: 'flex-end' }}
          onPress={() => props?.setModalVisible(false)}
        >
          <Icon name="close" style={{ color: Colors.brandPrimary }} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.brandPrimary }}>
            Hey! Félicitation !!!
          </Text>
          <Text style={{ marginBottom: 15, textAlign: 'justify' }}>
            tu viens de terminer ta pré-inscription clique ici pour vérifier vos informations
          </Text>
        </View> 
        <View style={{ marginBottom: 20 }}>
          <ButtonUI
            title={'Vérifier mes informations'}
            onPress={() => { 
              props?.setModalVisible(false);
              Actions.Confirmation();
            }}
          />
        </View>
      </View>
    </View>
  </Modal>
);

export default priceRangerModal;
