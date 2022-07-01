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
      <Text style={styles.label}>{translate.nationality}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.nationality}
        label={'name'}
        options={statusMat}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      {/* <Text style={styles.label}>Situation professionnelle</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Login" />
      </Item>
      <Spacer /> */}
      <Text style={styles.label}>{translate.region_of_origin}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.region_of_origin}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>{translate.department_of_Origin}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.department_of_Origin}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
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
