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
    <Content style={{ paddingHorizontal: 10 }} padder>
      <Text style={styles.label}>{translate.type_of_diploma} </Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.type_of_diploma}
        label={'name'}
        options={statusMat}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.serie}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.serie}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.year_of_graduation}</Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={translate.year_of_graduation}
        date={null}
        setDate={(val) => replaceTravelInput({ ...travelInput, dateDepart: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.average}</Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.average} />
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

      <Text style={styles.label}>{translate.diploma_issued_by} </Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.diploma_issued_by} />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.date_of_issue}</Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={translate.date_of_issue}
        date={null}
        setDate={(val) => replaceTravelInput({ ...travelInput, dateDepart: val })}
      />
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
