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
import translate from '../../containers/language/language';
// create a component
const Confirmation1 = ({ responseUser, replaceResponseUser, submit }) => {
  const getSelect = (nationality = [], response) => {
    let value;
    nationality.forEach((e, i) => {
      if (e.name === response) {
        return (value = e);
      }
    });
    return value;
  };
  
  const nationality = [
    { id: 1, name: 'Cameroun' },
    { id: 2, name: 'Congo' },
    { id: 3, name: 'Gabon' },
    { id: 4, name: 'Guinée-équatorial' },
    { id: 5, name: 'Républic centrafricaine' },
    { id: 6, name: 'Ngeria' },
    { id: 7, name: 'Tchad' },
    { id: 8, name: 'Autre' },
  ];

  const region = [
    { id: 1, name: 'etrangé' },
    { id: 2, name: 'centre' },
    { id: 3, name: 'adamaoua' },
    { id: 4, name: 'est' },
    { id: 5, name: 'extreme-nord' },
    { id: 6, name: 'littoral' },
    { id: 7, name: 'nord' },
    { id: 8, name: 'nord-ouest' },
    { id: 9, name: 'ouest' },
    { id: 10, name: 'sud' },
    { id: 11, name: 'sud-ouest' },
  ];

  const departement = [
    { id: 1, name: 'Etrangé' },
    { id: 2, name: 'Mbam-et-inoubou' },
    { id: 3, name: 'Haute-sanaga' },
    { id: 4, name: 'Lekié' },
    { id: 5, name: 'Mbam-et-kim' },
    { id: 6, name: 'Méfou-et-afamba' },
    { id: 7, name: 'Méfou-et-akono' },
    { id: 8, name: 'Mfoundi' },
    { id: 9, name: 'Nyong-et-kéllé' },
    { id: 10, name: 'Nyong-et-mfoumou' },
    { id: 11, name: "Nyong-et-so'o" },
  ];

  return (
    <Content style={{ paddingHorizontal: 10 }} padder>
      <Text style={styles.label}>{translate.nationality}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.nationality}
        label={'name'}
        options={nationality}
        selectedValue={getSelect(nationality, responseUser[1])}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.region_of_origin}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.region_of_origin}
        label={'name'}
        options={region}
        selectedValue={getSelect(region, responseUser[1])}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.department_of_Origin}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.department_of_Origin}
        label={'name'}
        options={departement}
        selectedValue={getSelect(departement, responseUser[1])}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.fathers_name}</Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.fathers_name} />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.profession_father}</Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.profession_father} />
      </Item>
      <Spacer />

      <Text style={styles.label}>{translate.mothers_name}</Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.mothers_name} />
      </Item>
      <Spacer />

      <Text style={styles.label}>{translate.mothers_profession}</Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.mothers_profession} />
      </Item>
      <Spacer />
      <View style={{ alignItems: 'center' }}>
        <H3>{translate.contact_person}</H3>
      </View>
      <Spacer />
      <Item rounded style={styles.input}>
        <Input placeholder={translate.last_name} />
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
          onChangeText={(value) => setValue('phone', value)}
          onChangeValid={(value) => setValue('phoneValid', value)}
        />
      </View>
      <Spacer size={10} />
      <Item rounded style={styles.input}>
        <Input placeholder="Ville" />
      </Item>
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
