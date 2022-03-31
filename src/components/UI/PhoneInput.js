import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CarrierInfo from 'react-native-carrier-info';
// import translate from '../../containers/language/language';r
import commonColor from '../../../native-base-theme/variables/commonColor';

const App = ({
  onChangeText, value = '', onChangeValid, color = 'black',
}) => {
  const [valu, setValue] = useState(value);
  const phoneInput = useRef(null);

  const [deviceCountry, setDeviceCountry] = useState('CM');
  useEffect(() => {
    CarrierInfo.isoCountryCode()
      .then((result) => {
        setDeviceCountry(result);
      });
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <PhoneInput
        ref={phoneInput}
        defaultValue={valu}
        defaultCode={deviceCountry.toUpperCase()}
        layout="first"
        onChangeText={(text) => {
          setValue(text);
          onChangeValid(phoneInput.current?.isValidNumber(text));
        }}
        onChangeFormattedText={(text) => {
          onChangeText(text);
        }}
        placeholder={'translate.phone_number'}
        containerStyle={{ backgroundColor: 'transparent', alignItems: 'center' }}
        // textInputStyle={{ color, marginHorizontal: -10 }}
        // textContainerStyle={{ backgroundColor: 'transparent', marginHorizontal: -10 }}
        textInputStyle={{ padding: 0, margin: 0 }}
        textContainerStyle={{ padding: 0, margin: 0, height: 50, backgroundColor: null, marginLeft: -10 }}
        flagButtonStyle={{ marginHorizontal: -10 }}
      />
      {/* <View style={{
        height: 1, backgroundColor: color, alignSelf: 'stretch', marginTop: -15,
      }}
      /> */}
    </>
  );
};

export default App;
