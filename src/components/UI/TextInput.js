import React, { useState } from 'react';
import { Input, Item, Icon } from 'native-base';
import Colors from '../../../native-base-theme/variables/commonColor';

const TextInput = ({
  placeholder, onChangeText, color, secure = false, value='', style
}) => {
  const [isVisible, setIsVisible] = useState(secure);

  return (
    <Item style={style}>
      <Icon name='lock-closed' style={{color: Colors.brandPrimary}} />
      <Input
        autoCapitalize="none"
        placeholder={placeholder}
        style={{ color }}
        // keyboardType="numeric"
        // keyboardType="date"
        // keyboardType="phone-pad"
        secureTextEntry={isVisible}
        // keyboardType='email-address'
        defaultValue=""
        // value={value}
        onChangeText={(value) => onChangeText(value)}
      />
      {secure
        && (
        <Icon
          type="MaterialIcons"
          name={!isVisible ? 'visibility' : 'visibility-off'}
          size={20}
          style={{ color }}
          onPress={() => setIsVisible(!isVisible)}
        />
        )}
    </Item>
  );
};
export default TextInput;
