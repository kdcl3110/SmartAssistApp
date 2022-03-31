import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
// import {} from 'react-nam'
import { Icon, View, Text } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';
import Colors from '../../native-base-theme/variables/commonColor';
import CustomTabComponet from './customTabComponent';

import { ArticlesForm, ArticlesList, ArticlesSingle, Login, Chat, Home } from '../containers';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import AboutComponent from '../components/About';
// import Login from '../containers/screens/Login';
import Register from '../containers/screens/Register';

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
          // adjustsFontSizeToFit={label === translate.affiliate}
          // numberOfLines={1}
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

        // tabBarPosition="top"
        // tabBarComponent={props => (
        //   <AnimatedTabBar tabs={tabs} {...props} />)
        // }
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title="Home"
          // icon={({ focused }) => (
          //   <SettingsTab focused={focused} {...DefaultProps.icons} label="Home" iconName="home" />
          // )}
          {...DefaultProps.navbarProps}
          navigationBarStyle={{ backgroundColor: Colors.brandPrimary }}
        >
          <Scene key="home" component={Home} hideNavBar />
          <Scene key="Chat" title={'Smart Assist'} component={Chat} hideTabBar />
        </Stack>

        <Stack
          key="forum"
          title="Articles List"
          // icon={({ focused }) => (
          //   <SettingsTab focused={focused} {...DefaultProps.icons} label="Forum" iconName="chat" />
          // )}
          {...DefaultProps.navbarProps}
        >
          <Scene key="articlesList" component={ArticlesList} />
          <Scene key="articlesSingle" component={ArticlesSingle} back />
        </Stack>

        <Stack
          key="profil"
          title="Articles Form"
          // icon={({ focused }) => (
          //   <SettingsTab
          //     focused={focused}
          //     {...DefaultProps.icons}
          //     label="Profil"
          //     iconName="person"
          //   />
          // )}
          {...DefaultProps.navbarProps}
        >
          <Scene key="Login" component={Login} />
          <Scene key="Register" component={Register} />
          <Scene key="form" component={ArticlesForm} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
