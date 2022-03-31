import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button as Click } from 'native-base';
import Loading from './Loading';

export default function Button({ title, onPress, bg = '#fff6ed', color }) {
  const [load, setLoad] = useState(false);
  return (
    <View style={{ width: '100%', marginHorizontale: 20 }}>
      <TouchableOpacity
        block
        borderRadius={50}
        // disabled={load}
        style={{
          backgroundColor: bg,
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}
        onPress={() => {
          setLoad(!load), onPress();
          console.log('ok');
        }}
      >
        <Text style={{ color }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
