//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  Container,
  Content,
  H3,
  Icon,
  ListItem,
  Thumbnail,
  H1,
  Tabs,
  Tab,
  TabHeading,
  ScrollableTab,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Colors from '../../../native-base-theme/variables/commonColor';
import ItemProfil from './items/itemProfil';
import ModalSetLanguage from './items/modalSetLanguage';

// create a component
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const HEADER_HEIGHT = 85;
const IMAGE_HEIGHT = (Platform.OS == 'android' ? 275 : 240) + HEADER_HEIGHT;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT - 45;

const Setting = () => {
  const nScroll = new Animated.Value(0);
  const scroll = new Animated.Value(0);

  const imgScale = nScroll.interpolate({
    inputRange: [-25, 0],
    outputRange: [1.1, 1],
    extrapolateRight: 'clamp',
  });

  const tabY = nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: [0, 0, 1],
  });

  const onRefresh = () => {};
  const [refreshing, setRefreshing] = useState();

  return (
    <Container style={{ backgroundColor: '#fafafb' }}>
      <ModalSetLanguage />
      <Animated.View style={{ position: 'absolute', width: '100%', zIndex: 1 }}>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 15,
            // justifyContent: 'flex-end',
            paddingVertical: 15,
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{ marginHorizontal: 10, flex: 0.4 }}
            onPress={() => {
              Actions.pop();
            }}
          >
            <Icon
              name="arrow-back-outline"
              type="Ionicons"
              style={{ fontSize: 25, color: Colors.brandPrimary }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20 }}>Profile</Text>
          </View>
        </View>
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: nScroll } } }], {
          useNativeDriver: true,
        })}
        style={{ zIndex: 0 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Animated.View
          style={{
            transform: [{ translateY: Animated.multiply(nScroll, 0.65) }, { scale: imgScale }],
            // backgroundColor: 'white',
          }}
        >
          <Animated.View
            style={{
              padding: 10,
              marginTop: HEADER_HEIGHT - getStatusBarHeight() + 15,
            }}
          >
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <TouchableOpacity onPress={() => setIsvisible(true)}>
                <Thumbnail
                  source={require('../../assets/images/utilisateur.png')}
                  style={{ marginBottom: 15 }}
                  large
                />
              </TouchableOpacity>
              <View style={{ alignItems: 'center' }}>
                <H3>KDCL koudichrilo</H3>
                <Text style={{ color: '#666' }}>diepeloic31@gmail.com</Text>
              </View>
              <View
                style={{
                  height: 30,
                  borderWidth: 1,
                  marginVertical: 20,
                  width: '90%',
                  borderColor: Colors.inputBorderColor,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    width: '50%',
                    height: '100%',
                    borderRadius: 10,
                    backgroundColor: Colors.brandPrimary,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff' }}>50%</Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: '#fff',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            paddingTop: 20,
          }}
        >
          <ItemProfil iconLeft={'user-alt'} label={'Mon profil'} type="FontAwesome5" />
          <ItemProfil iconLeft={'globe-outline'} label={'Langue par défaut'} lang />
          <ItemProfil iconLeft={'settings'} label={'Plus de parametres'} />
          <ItemProfil iconLeft={'clipboard-outline'} label={'Imprimer ma fiche'} />
          <View
            style={{
              height: 1,
              backgroundColor: Colors.inputBackground,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          />
          <ItemProfil iconLeft={'help-outline'} label={'A propos de SmartAssit'} />
          <ItemProfil iconLeft={'exit'} label="Déconnexion" />
        </Animated.View>
      </Animated.ScrollView>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Setting;
