//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Spacer } from '../../UI';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import PhoneInput from '../../UI/PhoneInput';
import { CheckBox, Item, Icon, Input, Container, Content } from 'native-base';
import Colors from '../../../../native-base-theme/variables/commonColor';
import translate from '../../../containers/language/language';
import ButtonUI from '../../UI/ButtonUI';

// create a component
const ModalUpdatePofil = ({ modalVisible, setModalVisible }) => {
  const [updatePass, setUpdatePass] = useState(false);

  return (
    <Container>
      <Content padder>
        <View>
          <Spacer />
          <Item rounded style={styles.input}>
            <Input
              placeholder={translate.user_name}
              keyboardType="email-address"
              onChangeText={(value) => {
                replaceResponseUser({ ...responseUser, 9: value });
              }}
            />
          </Item>
          <Spacer size={10} />
          <Item rounded style={styles.input}>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(value) => {
                replaceResponseUser({ ...responseUser, 9: value });
              }}
            />
          </Item>
          <Spacer size={10} />
          <View
            style={[
              styles.input,
              {
                justifyContent: 'center',
                borderRadius: 50,
              },
            ]}
          >
            <PhoneInput
              //   value={responseUser[10]}
              onChangeText={(value) => {
                replaceResponseUser({ ...responseUser, 10: value });
                // setValue('phone', value);
              }}
              onChangeValid={(value) => {
                // setValue('phoneValid', value)
              }}
            />
          </View>
          <Spacer size={20} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{translate.change_password}</Text>
            <CheckBox
              checked={updatePass}
              color={Colors.brandPrimary}
              style={{ marginRight: 20 }}
              onPress={() => setUpdatePass(!updatePass)}
            />
          </View>
          <Spacer size={20} />
          {updatePass && (
            <>
              <Item rounded style={styles.input}>
                <Input
                  placeholder={translate.new_password}
                  secureTextEntry
                  onChangeText={(value) => {
                    replaceResponseUser({ ...responseUser, 9: value });
                  }}
                />
              </Item>
              <Spacer size={10} />
              <Item rounded style={styles.input}>
                <Input
                  placeholder={translate.confirm_password}
                  secureTextEntry
                  onChangeText={(value) => {
                    replaceResponseUser({ ...responseUser, 9: value });
                  }}
                />
              </Item>
              <Spacer size={20} />
            </>
          )}
          <ButtonUI title={translate.save} />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.inputBackground,
    height: 40,
    padding: 10,
    paddingLeft: 15,
  },
});

//make this component available to the app
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  language: state.auth.language,
});
const mapDispatchToProps = (dispatch) => ({
  replaceLanguage: dispatch.auth.replaceLanguage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdatePofil);
