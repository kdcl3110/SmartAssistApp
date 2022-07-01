//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Container, H3, Icon, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Colors from '../../../native-base-theme/variables/commonColor';
import ItemProfil from './items/itemProfil';
import ModalSetLanguage from './items/modalSetLanguage';
import ModalUpdateProfil from './items/modalUpdateProfil';
import translate from '../../containers/language/language';

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
  const [modalLanguageVisible, setModalLanguageVisible] = useState(false);

  const doLogout = () => {
    Alert.alert(translate.warning, translate.will_disconnect, [
      {
        text: translate.cancel,
        onPress: () => null,
        style: translate.cancel,
      },
      {
        text: translate.ok,
        onPress: async () => {},
      },
    ]);
  };

  return (
    <Container style={{ backgroundColor: Colors.brandPrimary }}>
      <ModalSetLanguage
        modalVisible={modalLanguageVisible}
        setModalVisible={setModalLanguageVisible}
      />
      {/* <ModalUpdateProfil modalVisible={true} /> */}
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
              style={{ fontSize: 25, color: '#fff' }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20, color: '#fff' }}>{translate.settings}</Text>
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
              height: Dimensions.get('window').height / 3,
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
              <View style={{ alignItems: 'center', marginBottom: 60 }}>
                <H3 style={{ color: '#fff' }}>KDCL koudichrilo</H3>
                <Text style={{ color: '#fff' }}>diepeloic31@gmail.com</Text>
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
            height: (Dimensions.get('window').height * 2) / 3,
          }}
        >
          <ItemProfil
            iconLeft={'user-alt'}
            label={translate.my_profile}
            type="FontAwesome5"
            onPress={() => Actions.UpdateProfil()}
          />
          <ItemProfil
            iconLeft={'globe-outline'}
            label={translate.default_language}
            lang
            onPress={() => setModalLanguageVisible(true)}
          />
          <ItemProfil iconLeft={'settings'} label={translate.more_settings} />
          <ItemProfil iconLeft={'clipboard-outline'} label={translate.print_my_form} />
          <View
            style={{
              height: 1,
              backgroundColor: Colors.inputBackground,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          />
          <ItemProfil iconLeft={'help-outline'} label={translate.about_SmartAssit} />
          <ItemProfil iconLeft={'exit'} label={translate.logout} onPress={doLogout} />
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
