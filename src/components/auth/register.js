//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Icon, Input, Item } from 'native-base';
import { Messages } from '../UI';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Actions } from 'react-native-router-flux';
import TextInput from '../UI/TextInput';
import Colors from '../../../native-base-theme/variables/commonColor';
import PhoneInput from '../UI/PhoneInput';
import Button from '../UI/Button';
import translate from '../../containers/language/language';

// create a component
const Register = ({ signup }) => {
  const schema = yup.object().shape({
    phone: yup.string().when('phoneValid', (phoneValid) => {
      if (phoneValid) return yup.string().required(translate.phone_required).trim();
      !phoneValid;
      return yup.string().min(40, translate.phone_invalid).required().trim();
    }),
    email: yup.string().email().required().trim(),
    password: yup
      .string()
      .min(5, translate.password_min)
      .required(translate.password_required)
      .trim(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], translate.password_equal)
      .required(translate.password_required)
      .trim(),
    phoneValid: yup.boolean().default(false),
  });

  const resolver = yupResolver(schema);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm({ resolver });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Group1.png')}
        style={{ position: 'absolute', top: -245, left: 0, width: Dimensions.get('window').width }}
        resizeMode="contain"
      />
      <ScrollView style={{ flex: 1, alignSelf: 'stretch', paddingHorizontal: 15 }}>
        <View
          style={{ marginBottom: 145, alignItems: 'flex-end', marginTop: 60, paddingRight: 20 }}
        >
          <Text style={{ fontSize: 40 }}>SIGN UP</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
          <Item style={[styles.input]}>
            <Icon name="mail" style={{ color: Colors.brandPrimary }} />
            <Input
              placeholder="email"
              onChangeText={(value) => setValue('email', value?.trim())}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Item>
          {errors.email && <Messages message={errors.email.message} />}
          <View style={{ marginTop: 10 }} />
          <View
            style={[
              styles.input,
              {
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderBottomColor: Colors.brandPrimary,
                width: '100%',
              },
            ]}
          >
            <PhoneInput
              onChangeText={(value) => setValue('phone', value)}
              onChangeValid={(value) => setValue('phoneValid', value)}
            />
          </View>
          {errors.phone && <Messages message={errors.phone.message} />}
          <View style={{ marginTop: 10 }} />
          <TextInput
            secure
            color={Colors.brandPrimary}
            onChangeText={(value) => setValue('password', value)}
            style={styles.input}
            placeholder={translate.password}
          />
          {errors.password && <Messages message={errors.password.message} />}
          <View style={{ marginTop: 10 }} />
          <TextInput
            secure
            color={Colors.brandPrimary}
            onChangeText={(value) => setValue('password_confirmation', value)}
            style={styles.input}
            placeholder={translate.password_confirm}
          />
          {errors.password_confirmation && (
            <Messages message={errors.password_confirmation.message} />
          )}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 15,
            }}
          >
            <View style={{ width: '60%' }}>
              <Button
                title={'Register'}
                color="#fff"
                bg={Colors.brandPrimary}
                onPress={handleSubmit(signup)}
              />
            </View>
            <TouchableOpacity onPress={() => Actions.pop()} style={{ marginVertical: 15 }}>
              <Text>
                {translate.you_have_account} {' '}
                <Text style={{ color: Colors.brandPrimary, fontFamily: 'Montserrat bold' }}>
                  {translate.login}
                </Text>
              </Text>
            </TouchableOpacity>
            <Text>{translate.or_with}</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '70%',
            }}
          >
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Facebook.png')}
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/google.png')}
                style={{
                  width: 30,
                  height: 30,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Twitter.png')}
                style={{
                  width: 35,
                  height: 35,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#efeaf1',
    height: 50,
    padding: 10,
    borderRadius: 5,
    paddingLeft: 15,
    borderBottomColor: Colors.brandPrimary,
  },
});

//make this component available to the app
export default Register;
0;
