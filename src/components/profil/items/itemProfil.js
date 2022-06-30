//import liraries
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../../native-base-theme/variables/commonColor';

// create a component
const ItemProfil = ({ iconLeft, label, type = 'Ionicons', onPress, lang }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 15,
      }}
      onPress={onPress}
    >
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            borderRadius: 15,
            backgroundColor: '#efeaf1',
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name={iconLeft} type={type} style={{ fontSize: 20, color: Colors.brandPrimary }} />
        </View>
      </View>
      <View style={{ flex: 0.6 }}>
        <Text>{label}</Text>
        {lang && <Text style={{ fontSize: 12, color: '#666' }}>francais</Text>}
      </View>
      <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
        <Icon name="chevron-forward-outline" style={{ fontSize: 25, color: Colors.brandPrimary }} />
      </View>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default ItemProfil;