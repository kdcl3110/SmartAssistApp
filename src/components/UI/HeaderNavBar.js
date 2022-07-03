import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { Left, Title, Header, Body, Right, Thumbnail, Icon, Text, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
// import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
// import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
// import { TourGuideZone, useTourGuideController } from 'rn-tourguide';
import commonColor from '../../../native-base-theme/variables/commonColor';
import translate from '../../containers/language/language';
// import ImageZoom from './ImageZoom';
import CustomPickerSelect from './CustomPickerSelect';
import { connect } from 'react-redux';

const HeaderPage = (props) => {
  // const [notif, setNotif] = useState([]);
  // const [type, setType] = useState({ name: translate.name, type: 'full_name', id: 1 });
  // const [search, setSearch] = useState('');
  useEffect(() => {
    AsyncStorage.setItem('@Lang:locale', props?.language?.lang);
  }, [props?.language]);
  return (
    <Header
      style={
        props.routeName == 'Confirmation' ||
        props.routeName == 'Notification' ||
        props.routeName == 'UpdateProfil'
          ? { backgroundColor: 'white' }
          : props.navigationBarStyle
      }
      searchBar
    >
      {props.previous && props.routeName !== 'Notification' && (
        <Left style={{ flexDirection: 'row', paddingRight: 10 }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon
              type="Ionicons"
              name="arrow-back"
              style={{
                fontSize: 24,
                padding: 10,
                paddingLeft: 5,
                color:
                  props.routeName == 'Confirmation' || props.routeName == 'Notification'
                    ? commonColor.brandPrimary
                    : 'white',
              }}
            />
          </TouchableOpacity>
        </Left>
      )}
      {props.title == 'Smart Assist' && (
        <Body>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/images/smart.png')}
              style={{ width: 35, height: 35 }}
            />
            <Title style={{ color: 'white', paddingLeft: 10 }}>
              {translate[props.title] ? translate[props.title] : props.title}
            </Title>
          </View>
        </Body>
      )}
      {props.routeName == 'UpdateProfil' && (
        <View style={{ flexDirection: 'row', marginLeft: 0, height: '100%', alignItems: 'center' }}>
          <Title style={{ color: '#666' }}>{props.title}</Title>
        </View>
      )}

      {props.routeName == 'UpdateProfil' && (
        <Right>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="close" style={{ color: commonColor.brandPrimary }} />
          </TouchableOpacity>
        </Right>
      )}

      {props.title == 'Smart Assist' && (
        <Right>
          <TouchableOpacity onPress={() => Actions.Setting()}>
            <Icon
              type="MaterialIcons"
              name="settings"
              style={{
                fontSize: 24,
                padding: 10,
                color: 'white',
              }}
            />
          </TouchableOpacity>
          {/* <Menu
            rendererProps={{
              placement: 'bottom',
              padding: 10,
              borderRadius: 25,
              marginTop: 40,
            }}
          >
            <MenuTrigger>
              <Icon
                name="ellipsis-vertical-sharp"
                style={{
                  fontSize: 24,
                  padding: 10,
                  color: 'white',
                }}
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption value={1}>
                <CustomPickerSelect
                  style={{
                    flex: 1,
                    height: 40,
                    backgroundColor: '#fff',
                  }}
                  placeholder={translate.language}
                  options={[
                    { name: `${translate.french}`, lang: 'fr', id: 1 },
                    { name: `${translate.english}`, lang: 'en', id: 2 },
                  ]}
                  selectedValue={
                    props?.language?.lang == 'fr'
                      ? { name: translate.french, lang: 'fr', id: 1 }
                      : { name: translate.english, lang: 'en', id: 2 }
                  }
                  onValueChange={async (val) => {
                    if (val) {
                      translate.setLanguage(val.lang);
                      await props.replaceLanguage(val);
                      await AsyncStorage.setItem('@Lang:locale', val.lang);
                      await props.setLanguage();
                    }
                  }}
                />
              </MenuOption>
              <MenuOption value={2}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  onPress={() => Actions.Setting()}
                >
                  <Text>Profil</Text>
                  <Icon name="person-circle-outline" />
                </TouchableOpacity>
              </MenuOption>
              <MenuOption value={3}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text>log out</Text>
                  <Icon name="log-out" />
                </TouchableOpacity>
              </MenuOption>
            </MenuOptions>
          </Menu> */}
        </Right>
      )}

      {props.routeName == 'Confirmation' && (
        <Body>
          <View style={{ flexDirection: 'row' }}>
            <Title style={{ color: '#666', paddingLeft: 10 }}>
              {translate[props.title] ? translate[props.title] : props.title}
            </Title>
          </View>
        </Body>&
      )}
    </Header>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  language: state.auth.language,
});
const mapDispatchToProps = (dispatch) => ({
  replaceLanguage: dispatch.auth.replaceLanguage,
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);
