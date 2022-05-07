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
import ButtonUI from '../UI/ButtonUI';
import * as Toast from '../UI/Toast';

// create a component
const Confirmation1 = ({ responseUser, replaceResponseUser, submit }) => {
  const statusMat = [
    {
      name: 'Célibataire',
      id: 1,
    },
    {
      name: 'Marié',
      id: 2,
    },
  ];

  const firsLang = [
    {
      name: 'Français',
      id: 1,
    },
    {
      name: 'Anglais',
      id: 2,
    },
  ];

  useEffect(() => {
    console.log(responseUser);
    Toast.showSuccess('Vérifiez vos informations');
  }, []);

  return (
    <Content style={{ paddingHorizontal: 10, backgroundColor: '#f4f7fd' }} padder>
      <Text style={styles.label}>Nom</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder="Nom"
          value={responseUser[1]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 1: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>Prenom</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder="Prenom"
          value={responseUser[2]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 2: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>Date de Naissance</Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={'translate.creation.date_depart'}
        // date={new Date(`${responseUser[3]}`)}
        setDate={(value) => {
          replaceResponseUser({ ...responseUser, 3: value });
        }}
      />
      <Spacer />

      <Text style={styles.label}>Lieu de Naissance</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder="Lieu de naissance"
          value={responseUser[4]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 4: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>Sexe</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 0 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Radio
            color={Colors.border}
            selectedColor={Colors.brandPrimary}
            selected={responseUser[5] === 'Homme' ? true : false}
            onPress={() => {
              replaceResponseUser({ ...responseUser, 5: 'Homme' });
            }}
          />
          <Text style={{ color: Colors.textColor }}>Homme</Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Radio
            color={Colors.border}
            selectedColor={Colors.brandPrimary}
            selected={responseUser[5] === 'Femme' ? true : false}
            onPress={() => {
              replaceResponseUser({ ...responseUser, 5: 'Femme' });
            }}
          />
          <Text style={{ color: Colors.textColor }}>Femme</Text>
        </View>
      </View>
      <Spacer />
      <Text style={styles.label}>Statut matrimonial</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Statut matrimonial'}
        label={'name'}
        selectedValue={
          responseUser[6] === 'Célibataire'
            ? {
                name: 'Célibataire',
                id: 1,
              }
            : {
                name: 'Marié',
                id: 2,
              }
        }
        options={statusMat}
        // selectedValue={travelInput?.toTown}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 6: value.name });
        }}
      />
      <Spacer />
      <Text style={styles.label}>Situation professionnelle</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder="Situation professionnelle"
          value={responseUser[7]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 7: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>Première langue</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={'Première langue'}
        label={'name'}
        options={firsLang}
        selectedValue={
          responseUser[8] === 'Français'
            ? {
                name: 'Français',
                id: 1,
              }
            : {
                name: 'Anglais',
                id: 2,
              }
        }
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 8: value.name });
        }}
      />
      <Spacer />
      <Text style={styles.label}>Email</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={responseUser[9]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 9: value });
          }}
        />
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
          value={responseUser[10]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 10: value });
            // setValue('phone', value);
          }}
          onChangeValid={(value) => {
            // setValue('phoneValid', value)
          }}
        />
      </View>
      <Spacer />
      <Text style={styles.label}>N° CNI</Text>
      <Item rounded style={styles.input}>
        {/* <Icon name="mail" style={{ color: Colors.brandPrimary }} /> */}
        <Input
          placeholder="111111111"
          value={responseUser[11]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 11: value });
          }}
        />
      </Item>
      <Spacer />
      <ButtonUI title={'imprimer'} onPress={submit} />
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
