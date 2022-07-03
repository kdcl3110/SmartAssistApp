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
import translate from '../../containers/language/language';

// create a component
const Confirmation1 = ({ responseUser, replaceResponseUser, submit }) => {
  const statusMat = [
    { name: translate.single, id: 1 },
    { name: translate.married, id: 2 },
    { name: translate.divorced, id: 2 },
  ];

  const firsLang = [
    { name: translate.french, id: 1 },
    { name: translate.english, id: 2 },
  ];

  useEffect(() => {
    console.log(responseUser);
    Toast.showSuccess('Vérifiez vos informations');
  }, []);

  return (
    <Content style={{ paddingHorizontal: 10 }} padder>
      <Text style={styles.label}>{translate.last_name}</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder={translate.last_name}
          value={responseUser[1]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 1: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.first_name}</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder={translate.first_name}
          value={responseUser[2]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 2: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.date_of_Birth}</Text>
      <DateUI
        format="DD/MM/YYYY"
        placeholder={translate.date_of_Birth}
        // date={new Date(`${responseUser[3]}`)}
        setDate={(value) => {
          replaceResponseUser({ ...responseUser, 3: value });
        }}
      />
      <Spacer />

      <Text style={styles.label}>{translate.place_of_Birth}</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder={translate.place_of_Birth}
          value={responseUser[4]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 4: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.gender}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 0 }}>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Radio
            color={Colors.border}
            selectedColor={Colors.brandPrimary}
            selected={responseUser[5] === translate.man ? true : false}
            onPress={() => {
              replaceResponseUser({ ...responseUser, 5: 'Homme' });
            }}
          />
          <Text style={{ color: Colors.textColor }}>{translate.man}</Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Radio
            color={Colors.border}
            selectedColor={Colors.brandPrimary}
            selected={responseUser[5] === translate.woman ? true : false}
            onPress={() => {
              replaceResponseUser({ ...responseUser, 5: 'Femme' });
            }}
          />
          <Text style={{ color: Colors.textColor }}>{translate.woman}</Text>
        </View>
      </View>
      <Spacer />
      <Text style={styles.label}>{translate.marital_status}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.marital_status}
        label={'name'}
        selectedValue={
          responseUser[6] === translate.single
            ? {
                name: translate.single,
                id: 1,
              }
            : responseUser[6] === translate.married
            ? {
                name: translate.married,
                id: 2,
              }
            : {
                name: translate.divorced,
                id: 3,
              }
        }
        options={statusMat}
        // selectedValue={travelInput?.toTown}
        onValueChange={(value) => {
          replaceResponseUser({ ...responseUser, 6: value.name });
        }}
      />
      <Spacer />
      <Text style={styles.label}>{translate.professional_status}</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder={translate.professional_status}
          value={responseUser[7]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 7: value });
          }}
        />
      </Item>
      <Spacer />
      <Text style={styles.label}>{translate.first_language}</Text>
      <CustomPickerSelect
        style={{ flex: 1, marginHorizontal: 2, height: 40 }}
        placeholder={translate.first_language}
        options={firsLang}
        selectedValue={
          responseUser[8] === translate.french
            ? {
                name: translate.french,
                id: 1,
              }
            : {
                name: translate.english,
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
      <Text style={styles.label}>{translate.phone}</Text>
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
          }}
          onChangeValid={(value) => {
            // setValue('phoneValid', value)
          }}
        />
      </View>
      <Spacer />
      <Text style={styles.label}>N° CNI</Text>
      <Item rounded style={styles.input}>
        <Input
          placeholder="111111111"
          value={responseUser[11]}
          onChangeText={(value) => {
            replaceResponseUser({ ...responseUser, 11: value });
          }}
        />
      </Item>
      {/* <Spacer />
      <ButtonUI title={'imprimer'} onPress={submit} /> */}
    </Content>
  );
};

//make this component available to the app
export default Confirmation1;
