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
      <Text style={styles.label}>Nationalité</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Nationalité'}
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
      <Text style={styles.label}>Region d'origine</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={"Region d'origine"}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Département d'Origine</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={"Département d'Origine"}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Nom du père</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Nom du père" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Profession du Père</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Profession du Père" />
      </Item>
      <Spacer />

      <Text style={styles.label}>Nom de la Mère</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Nom de la Mère" />
      </Item>
      <Spacer />

      <Text style={styles.label}>Profession de la Mère </Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Profession de la Mère" />
      </Item>
      <Spacer />
      <View style={{ alignItems: 'center' }}>
        <H3>Personne à contacter</H3>
      </View>
      <Spacer />
      <Item rounded style={styles.input}>
        <Input placeholder="Nom" />
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
