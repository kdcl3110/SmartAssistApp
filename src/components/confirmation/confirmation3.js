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
      <Text style={styles.label}>Filère</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'1er Choix'}
        label={'name'}
        options={statusMat}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer size={10} />
      {/* <Text style={styles.label}>Département d'Origine</Text> */}
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'2ème Choix'}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer size={10} />
      {/* <Text style={styles.label}>Département d'Origine</Text> */}
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'3ème Choix'}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Niveau</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Niveau'}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Statut</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Statut" />
      </Item>
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
