//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, H1, H2, H3, Icon, Input, Item, Radio } from 'native-base';
// import { Spacer } from '../UI';
import TextInput from '../UI/TextInput';
import Colors from '../../../native-base-theme/variables/commonColor';
import PhoneInput from '../UI/PhoneInput';
import Button from '../UI/Button';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { Spacer } from '../UI';
import CustomPickerSelect from '../UI/CustomPickerSelect';
import DateUI from '../UI/InputDate';

// create a component
const Confirmation1 = () => {
  const statusMat = [
    {
      name: 'celibataire',
      id: 1,
    },
    {
      name: 'marié',
      id: 2,
    },
  ];

  const firsLang = [
    {
      name: 'celibataire',
      id: 1,
    },
    {
      name: 'marié',
      id: 2,
    },
  ];

  return (
    <Content style={{ paddingHorizontal: 10, backgroundColor: '#f4f7fd' }} padder>
      <View style={{ alignItems: 'center' }}>
        <H3>Infos de paiement</H3>
      </View>
      <Spacer />
      <Text style={styles.label}>N° Transaction </Text>
      <Item rounded style={styles.input}>
        <Input placeholder="N° Transaction " />
      </Item>
      <Spacer />
      <Text style={styles.label}>Agence de Paiement</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Agence de Paiement'}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <View style={{ alignItems: 'center' }}>
        <H3>Informations Diverses</H3>
      </View>
      <Spacer />
      <Text style={styles.label}>Pratique Sport</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Pratique Sport" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Pratique Art </Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Pratique Art " />
      </Item>
      <Spacer />
      <Text style={styles.label}>Numéro du certificat médical</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Numéro du certificat médical" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Lieu du certificat médical </Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Lieu du certificat médical " />
      </Item>
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
