import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { Left, Title, Header, Body, Right, Thumbnail, Icon, Text, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
// import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
// import { TourGuideZone, useTourGuideController } from 'rn-tourguide';
import commonColor from '../../../native-base-theme/variables/commonColor';
// import translate from '../../containers/language/language';
// import ImageZoom from './ImageZoom';
// import CustomPickerSelect from './CustomPickerSelect';

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
        props.title == 'confirm_infos' || props.routeName == 'Notification'
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
                  props.title == 'confirm_infos' || props.routeName == 'Notification'
                    ? commonColor.brandPrimary
                    : 'white',
              }}
            />
          </TouchableOpacity>
          {/* {props.routeName == 'Chat' ? (
          <ImageZoom
            img={[props?.picture]}
            styles={{
              height: 45,
              width: 45,
              borderRadius: 100,
              overflow: 'hidden',
              marginRight: 5,
            }}
          />
        ) : null} */}
        </Left>
      )}
      {props.title == 'Smart Assist' && (
        <Body>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/images/smart.png')}
              style={{ width: 35, height: 35 }}
            />
            <Title style={{ color: 'white', paddingLeft: 10 }}>{props.title}</Title>
          </View>
        </Body>
      )}

      {props.title == 'confirm_infos' && (
        <Body>
          <View style={{ flexDirection: 'row' }}>
            <Title style={{ color: '#666', paddingLeft: 10 }}>
              {props.title}
            </Title>
          </View>
        </Body>
      )}

      {/* {props.previous && (
      <View style={{ flex: 1, justifyContent: 'center', marginLeft: -25 }}>
        <Text
          style={{
            color: props.routeName == 'Notification' ? commonColor.textColor : 'white',
            fontFamily: 'AppleSDGothicNeo-SemiBold',
            paddingLeft: 15,
            fontSize: 20,
          }}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {props.routeName == 'DetailOffre'
            ? `${'translate.offre'} ${props.travel.code}`
            : 'translate[props.title]' || props.title || props.name}
        </Text>
      </View>
    )} */}
      {/* {!props.previous && props.title !== 'profil' && (
      <Body>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/marylis.png')}
          style={{ height: 42, width: 120, marginRight: 65 }}
        />
      </Body>
    )} */}
      {}
    </Header>
  );
};
const mapStateToProps = (state) => ({
  affiliers: state.affiliers.affiliers || [],
  listSearch: state.affiliers.listSearch || [],
  search: state.affiliers.search,
  currentUser: state.auth.currentUser,
  language: state.profile.language,
  currencies: state.countries.currencies,
  tourGuides: state.auth.tourGuides,
  isLoading: state.loading.global,
});
const mapDispatchToProps = (dispatch) => ({
  replaceLanguage: dispatch.profile.replaceLanguage,
  replaceSearch: dispatch.affiliers.replaceSearch,
  replaceListSearch: dispatch.affiliers.replaceListSearch,
  replaceCurrency: dispatch.auth.replaceCurrency,
  replaceLaunchTuto: dispatch.auth.replaceLaunchTuto,
  replaceTourGuides: dispatch.auth.replaceTourGuides,
  updateUser: dispatch.auth.updateUser,
});

export default HeaderPage;
