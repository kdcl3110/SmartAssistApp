import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
// import {} from 'react-nam'
import { Icon, View, Text } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';
import Colors from '../../native-base-theme/variables/commonColor';
import CustomTabComponet from './customTabComponent';

import {
  ArticlesForm,
  ArticlesList,
  ArticlesSingle,
  Login,
  Chat,
  Home,
  Confirmation,
  Setting,
  Register
} from '../containers';
// import Register from '../containers/screens/Register';
import UpdateProfil from '../components/profil/items/modalUpdateProfil';

const TabIcon = ({ focused, name, style }) => (
  <Icon
    style={{ ...style, color: focused ? style.activeColor : style.color, fontSize: 18 }}
    name={name}
  />
);

const SettingsTab = ({ focused, style, label, iconName }) => {
  const borderColor = focused ? Colors.brandPrimary : '#FFFFFF';
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: borderColor,
        borderTopWidth: 2,
      }}
    >
      <Icon
        type="MaterialIcons"
        name={iconName}
        style={{ ...style, color: focused ? style.activeColor : style.color, fontSize: 24 }}
      />
      {focused ? (
        <Text
          style={{ fontSize: 10, color: Colors.brandPrimary }}
        >
          {label}
        </Text>
      ) : null}
    </View>
  );
};

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        tabBarComponent={CustomTabComponet}
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title="Home"
          {...DefaultProps.navbarProps}
          navigationBarStyle={{ backgroundColor: Colors.brandPrimary }}
        >
          {/* <Scene key="home" component={Home} hideNavBar /> */}
          <Scene key="Chat" component={Chat} title="Smart Assist" hideTabBar />
          <Scene key="Confirmation" title={'Confirmation'} component={Confirmation} hideTabBar />
          <Scene key="Setting" component={Setting} hideTabBar hideNavBar />
          <Scene key="UpdateProfil" title={"Modifier mes informations"} component={UpdateProfil} hideTabBar />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
