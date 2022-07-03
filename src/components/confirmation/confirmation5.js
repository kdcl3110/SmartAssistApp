//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import { Content, H3, Input, Item } from 'native-base';
import Colors from '../../../native-base-theme/variables/commonColor';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { Spacer } from '../UI';
import ButtonUI from '../UI/ButtonUI';
import CustomPickerSelect from '../UI/CustomPickerSelect';
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

  const agence = [
    { id: 1, name: 'express union' },
    { id: 2, name: 'sgc' },
    { id: 3, name: 'yup' },
  ];

  return (
    <Content style={{ paddingHorizontal: 10 }} padder>
      <View style={{ alignItems: 'center' }}>
        <H3>{translate.payment_Info}</H3>
      </View>
      <Spacer />
      <Text style={styles.label}>{translate.transaction_number}</Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.transaction_number} />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.payment_Agency}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.payment_Agency}
        label={'name'}
        options={agence}
        selectedValue={getSelect(agence, responseUser[1])}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <View style={{ alignItems: 'center' }}>
        <H3>{translate.various_information}</H3>
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
      <Text style={styles.label}>{translate.medical_certificate_number}</Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.medical_certificate_number} />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.place_medical_certificate} </Text>
      <Item rounded style={styles.input}>
        <Input placeholder={translate.place_medical_certificate} />
      </Item>
      <Spacer />
      <ButtonUI title={translate.print} onPress={submit} />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
