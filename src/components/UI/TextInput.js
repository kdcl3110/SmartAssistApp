import React, { useState } from 'react';
import { Input, Item, Icon } from 'native-base';

const TextInput = ({
  placeholder, onChangeText, color, secure = false, value='', style
}) => {
  const [isVisible, setIsVisible] = useState(secure);

  return (
    <Item style={style}>
      <Icon name='lock-closed' style={{color: '#fc961a'}} />
      <Input
        autoCapitalize="none"
        placeholder={placeholder}
        style={{ color }}
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
