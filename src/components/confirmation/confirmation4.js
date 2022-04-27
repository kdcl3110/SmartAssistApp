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
      <Text style={styles.label}>Type Diplôme: </Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Type Diplôme'}
        label={'name'}
        options={statusMat}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Série</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Série'}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Année d'obtention </Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={"Année d'obtention"}
        date={null}
        setDate={(val) => replaceTravelInput({ ...travelInput, dateDepart: val })}
      />
      <Spacer />
      <Text style={styles.label}>Moyenne </Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Moyenne " />
      </Item>
      <Spacer />

      <Text style={styles.label}>Infos. Jury/Mention </Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Mention'}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />

      <Text style={styles.label}>Diplôme délivré par </Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Diplôme délivré par " />
      </Item>
      <Spacer />
      <Text style={styles.label}>Date de délivrance </Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={'Date de délivrance'}
        date={null}
        setDate={(val) => replaceTravelInput({ ...travelInput, dateDepart: val })}
      />
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
