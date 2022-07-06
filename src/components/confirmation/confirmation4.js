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

  const diplome = [
    { id: 1, name: 'BACC CAMEROUNAI' },
    { id: 2, name: 'BACC ETRANGER' },
    { id: 3, name: 'GCE A LEVEL' },
    { id: 4, name: 'GCE O LEVEL' },
    { id: 5, name: 'DEUG' },
    { id: 6, name: 'DUT' },
    { id: 7, name: 'LICENCE' },
    { id: 8, name: 'LICENCE PROFESSIONEL' },
    { id: 9, name: 'LICENCE EN SCRIENCE BIOMEDICALS' },
    { id: 10, name: 'MASTER 1' },
    { id: 11, name: 'MASTER 2' },
    { id: 12, name: 'DIPES 1' },
    { id: 13, name: 'CSCT' },
    { id: 14, name: 'RELEVE DE NOTE' },
    { id: 15, name: "DIPLOME D'ETAT D'INFIRMIER" },
    { id: 16, name: 'DOCTORAT' },
    { id: 17, name: 'DOCTORAT EN MEDECINE OU EN PHARMACIE' },
    { id: 18, name: 'PROBATOIRE' },
  ];

  const serie = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
    { id: 6, name: 'F1' },
    { id: 7, name: 'F2' },
    { id: 8, name: 'F3' },
    { id: 9, name: 'F4' },
    { id: 10, name: 'F5' },
    { id: 11, name: 'F6' },
    { id: 12, name: 'F7' },
    { id: 13, name: 'F8' },
    { id: 14, name: 'TI' },
    { id: 15, name: 'MEB' },
    { id: 16, name: 'IB' },
    { id: 17, name: 'CB' },
    { id: 18, name: 'CHB' },
    { id: 19, name: 'SPB' },
  ];

  const mention = [
    { id: 1, name: 'passable' },
    { id: 2, name: 'assez bien' },
    { id: 3, name: 'bien' },
    { id: 4, name: 'très bien' },
    { id: 5, name: 'excellent' },
    { id: 6, name: 'parfait' },
  ];

  return (
    <Content style={{ paddingHorizontal: 10 }} padder>
      <Text style={styles.label}>{translate.type_of_diploma} </Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.type_of_diploma}
        label={'name'}
        options={diplome}
        selectedValue={getSelect(diplome, responseUser[31])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 31: value });
        }}
      />
      <Spacer />
      <Text style={styles.label}>{translate.serie}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.serie}
        label={'name'}
        options={serie}
        selectedValue={getSelect(serie, responseUser[32])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 32: value });
        }}
      />
      <Spacer />
      <Text style={styles.label}>{translate.year_of_graduation}</Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={translate.year_of_graduation}
        date={null}
        setDate={(val) => replaceResponseUser({ ...responseUser, 33: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.average}</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder={translate.average}
          value={responseUser[34]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 34: value });
          }}
        />
      </Item>
      <Spacer />

      <Text style={styles.label}>Infos. Jury/Mention </Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Mention'}
        label={'name'}
        options={mention}
        selectedValue={getSelect(mention, responseUser[35])}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 35: value });
        }}
      />
      <Spacer />

      <Text style={styles.label}>{translate.diploma_issued_by} </Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder={translate.diploma_issued_by}
          value={responseUser[36]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 36: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.date_of_issue}</Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={translate.date_of_issue}
        date={null}
        setDate={(val) => replaceResponseUser({ ...responseUser, 37: val })}
      />
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
