import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator, Text } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';
import translate from '../../containers/language/language';

const Loading = ({ isLoading, messages }) => {
  return isLoading  ? (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 3,
        elevation: 3,
        backgroundColor: 'rgba(0,0,0,0.3)',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          height: 110,
          borderRadius: 15,
          width: 110,
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 15, color: Colors.small_dark, textAlign: 'center' }}>
          {translate.loading}
        </Text>
        <ActivityIndicator size="large" color={Colors.brandPrimary} />
      </View>
    </View>
  ) : null;
};
const mapStateToProps = (state) => ({
  isLoading: state.loading.global,
  // messages: state.loading.effects.chats.getMessages,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
