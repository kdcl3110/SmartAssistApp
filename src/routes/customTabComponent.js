//import liraries
import { Icon } from 'native-base';
import React, { Component, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../native-base-theme/variables/commonColor';
import { Actions } from 'react-native-router-flux';

const CustomTabBar = (props) => {
  const { state } = props.navigation;
  const activeTabIndex = state.index;

  useEffect(() => {
    console.log(state.routes);
  }, [activeTabIndex]);
  return (
    <View style={styles.container}>
      {state.routes.map((element, i) => (
        <TouchableOpacity
          key={element.key}
          onPress={() => Actions[element.key]()}
          style={{ alignItems: 'center' }}
        >
          <Icon
            name={element.key == 'home' ? 'home' : element.key == 'forum' ? 'chat' : 'person'}
            type="MaterialIcons"
            style={{ fontSize: 20, color: activeTabIndex === i ? Colors.brandPrimary : '#ccc' }}
          />
          <Text style={{ color: activeTabIndex === i ? Colors.brandPrimary : '#ccc' }}>
            {element.key}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 15,
    borderRadius: 20,
    marginBottom: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    // elevation: 2,
  },
});

export default CustomTabBar;
//make this component available to the app
// export default CustomTabBarN;
