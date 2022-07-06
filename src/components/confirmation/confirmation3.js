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

  const faculty = [
    { id: 1, name: 'Faculté des Sciences (FS)' },
    { id: 2, name: 'Faculté des Arts, Lettres et Sciences Humaines (FALSH)' },
    { id: 3, name: "Faculté des Sciences de l'Education (FSE)" },
    { id: 4, name: 'Institut Universitaire de Technologies du Bois de Mbalmayo (IUT Bois)' },
  ];

  const filiere = [
    { id: 1, name: 'INFORMATIQUE' },
    { id: 2, name: 'BIOCHIMIE' },
    { id: 3, name: 'BIOLOGIE ANIMALE' },
    { id: 4, name: 'BIOLOGIE VEGETALE' },
    { id: 5, name: 'CHIMIE' },
    { id: 6, name: 'MATHEMATIQUES' },
    { id: 7, name: 'PHYSIQUE' },
    { id: 8, name: 'SCIENCES DE LA TERRE ET DE L UNIVERS' },
    { id: 9, name: 'MICROBIOLOGIE' },
    { id: 10, name: 'BIOSCIENCES' },
    { id: 11, name: 'GEOSCIENCES' },
    { id: 12, name: 'ICT for DEVELOPMENT' },
    { id: 13, name: 'CHIMIE INORGANIQUE' },
    { id: 14, name: 'CHIMIE ORGANIQUE' },
    { id: 15, name: 'Master Pro - Réseaux et Applications Multimédia (RAM)' },
    { id: 16, name: 'Master Pro - Systèmes d’information et Génie Logiciel (SIGL)' },
    { id: 17, name: 'Master Pro - Sécurité des Systèmes Informatiques (SSI)' },
    {
      id: 18,
      name: 'Licence Pro. - Information and Communication Technology for Development (ICT4D)',
    },
    { id: 19, name: 'Master Pro - Sciences de l’Environnement' },
    { id: 20, name: 'Master Pro - Sciences Forestières -Audit et Certification des Forets' },
    { id: 21, name: 'Master Pro - Sciences Forestières -Aires Protégées' },
    { id: 22, name: 'Master Pro - Sciences Forestières -Agroforesterie' },
    { id: 23, name: 'Master Pro - Industrie des Semences' },
    { id: 24, name: 'Master Pro - Mines, Pétrole et Métallurgie' },
    { id: 25, name: 'Master Pro - Ingénierie Géotechnique' },
    { id: 26, name: 'Master Pro Régional - MAREMA' },
    { id: 27, name: 'Master Pro - Sécurité Sanitaire des Aliments' },
    { id: 28, name: 'Master Pro - Biotechnologie de la Santé Publique' },
  ];

  const level = [
    { id: 1, name: 'L1' },
    { id: 2, name: 'L2' },
    { id: 3, name: 'L3' },
    { id: 4, name: 'M1' },
  ];

  const status = [
    { id: 1, name: 'Etudiant camerounais' },
    { id: 2, name: 'Etudiant étrangé' },
  ];

  return (
    <Content style={{ paddingHorizontal: 10 }} padder>
      <Text style={styles.label}>{translate.faculty}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.faculty}
        label={'name'}
        options={faculty}
        selectedValue={getSelect(faculty, responseUser[25])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 25: value });
        }}
      />
      <Spacer size={10} />
      <Text style={styles.label}>{translate.branch}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.first_Choice}
        label={'name'}
        options={filiere}
        selectedValue={getSelect(filiere, responseUser[27])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 27: value });
        }}
      />
      <Spacer size={10} />
      {/* <Text style={styles.label}>Département d'Origine</Text> */}
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.sec_Choice}
        label={'name'}
        options={filiere}
        selectedValue={getSelect(filiere, responseUser[28])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 28: value });
        }}
      />
      <Spacer size={10} />
      {/* <Text style={styles.label}>Département d'Origine</Text> */}
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.third_choice}
        label={'name'}
        options={filiere}
        selectedValue={getSelect(filiere, responseUser[29])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 29: value });
        }}
      />
      <Spacer />
      <Text style={styles.label}>{translate.level}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.level}
        label={'name'}
        options={level}
        selectedValue={getSelect(level, responseUser[26])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 26: value });
        }}
      />
      <Spacer />
      <Text style={styles.label}>{translate.status}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.status}
        label={'name'}
        options={status}
        selectedValue={getSelect(status, responseUser[30])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 30: value });
        }}
      />
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
