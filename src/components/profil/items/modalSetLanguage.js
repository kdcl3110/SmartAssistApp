//import liraries
import { Icon } from 'native-base';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Modal, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { CheckBox } from 'native-base';
import Colors from '../../../../native-base-theme/variables/commonColor';
import translate from '../../../containers/language/language';

// create a component
const ModalSetLanguage = ({
  replaceLanguage,
  setLanguage,
  language,
  modalVisible,
  setModalVisible,
}) => {
  const [langue, setLangue] = useState(language);

  const changeLanguage = (val) => {
    Alert.alert(translate.warning, translate.change_your_language, [
      {
        text: translate.cancel,
        onPress: () => null,
        style: translate.cancel,
      },
      {
        text: translate.yes,
        onPress: async () => {
          if (val) {
            translate.setLanguage(val.lang);
            await replaceLanguage(val);
            await AsyncStorage.setItem('@Lang:locale', val.lang);
            await setLanguage();
            setLangue({ ...val });
          }
        },
      },
    ]);
  };

  // }}

  return (
    <Modal
      transparent
      animationType="slide"
      presentationStyle="overFullScreen"
      visible={modalVisible}
      style={{ backgroundColor: '#fff' }}
      onRequestClose={() => setModalVisible(false)}
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
            <Text>{translate.change_language}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon name="close" style={{ color: Colors.brandPrimary }} />
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <CheckBox
                checked={language.lang == 'fr' ? true : false}
                color={Colors.brandPrimary}
                style={{ marginRight: 20 }}
                onPress={() => changeLanguage({ name: translate.french, lang: 'fr', id: 1 })}
              />
              <Text>{translate.french}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <CheckBox
                checked={language.lang == 'en' ? true : false}
                color={Colors.brandPrimary}
                style={{ marginRight: 20 }}
                onPress={() => changeLanguage({ name: translate.english, lang: 'en', id: 2 })}
              />
              <Text>{translate.english}</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

//make this component available to the app
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  language: state.auth.language,
});
const mapDispatchToProps = (dispatch) => ({
  replaceLanguage: dispatch.auth.replaceLanguage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSetLanguage);
