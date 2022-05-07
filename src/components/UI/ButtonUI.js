import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import commonColor from '../../../native-base-theme/variables/commonColor';

const ButtonUI = ({ title, onPress, textStyle, buttonStyle, color = commonColor.brandPrimary }) => {
  console.log();
  return (
    <View style={{ width: '100%', paddingHorizontal: 10 }}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={[styles.styleButton, buttonStyle]}
      >
        <Text style={[styles.styleText, textStyle]} numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  styleText: {
    color: '#fff',
    // textAlign: 'center',
    // paddingHorizontal: 10,
    // textAlignVertical: 'center',
  },
  styleButton: {
    // flex: 0.5,
    height: 45,
    marginLeft: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonColor.brandPrimary,
    // borderWidth: 2,
  },
});

export default ButtonUI;
