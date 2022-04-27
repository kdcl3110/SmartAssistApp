//import liraries
import React, { Component, useEffect } from 'react';
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
import * as Toast from '../UI/Toast';

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

  useEffect(() => {
    Toast.showSuccess('Vérifiez vos informations');
  }, []);

  return (
    <Content style={{ paddingHorizontal: 10, backgroundColor: '#f4f7fd' }} padder>
      <Text style={styles.label}>Nom</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Nom" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Prenom</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Prenom" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Date de Naissance</Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={'translate.creation.date_depart'}
        date={null}
        setDate={(val) => replaceTravelInput({ ...travelInput, dateDepart: val })}
      />
      <Spacer />

      <Text style={styles.label}>Lieu de Naissance</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Lieu de naissance" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Sexe</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 0 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Radio color={Colors.border} selectedColor={Colors.brandPrimary} selected />
          <Text style={{ color: Colors.textColor }}>Homme</Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Radio color={Colors.border} selectedColor={Colors.brandPrimary} />
          <Text style={{ color: Colors.textColor }}>Femme</Text>
        </View>
      </View>
      <Spacer />
      <Text style={styles.label}>Statut matrimonial</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Statut matrimonial'}
        label={'name'}
        options={statusMat}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Situation professionnelle</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Login" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Première langue</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Situation professionnelle'}
        label={'name'}
        options={firsLang}
        // selectedValue={travelInput?.toTown}
        onValueChange={(val) => replaceTravelInput({ ...travelInput, toTown: val })}
      />
      <Spacer />
      <Text style={styles.label}>Email</Text>
      <Item rounded style={styles.input}>
        <Input placeholder="Email" keyboardType="email-address" />
      </Item>
      <Spacer />
      <Text style={styles.label}>Téléphone</Text>
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
      <Spacer />
      <Text style={styles.label}>N° CNI</Text>
      <Item rounded style={styles.input}>
        {/* <Icon name="mail" style={{ color: Colors.brandPrimary }} /> */}
        <Input placeholder="111111111" />
      </Item>
      <Spacer />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
