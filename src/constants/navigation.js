import Colors from '../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: 'white' },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    swipeEnabled: false,
    activeBackgroundColor: 'rgba(255,255,255,0.1)',
    inactiveBackgroundColor: 'white',
    activeTintColor: Colors.brandPrimary,
    // labelStyle:{color:Colors.brandPrimary},
    // inactiveBackgroundColor: Colors.brandPrimary,
    tabBarStyle: {
      backgroundColor: 'white',
      marginHorizontal: 15,
      // paddingHorizontal: 5,
      marginBottom: 10,
      borderRadius: 10,
      bordeWidth: 0,
      elevation: 20,
      height: 60,
    },
    // tabBarStyle: { backgroundColor: Colors.brandPrimary },
  },

  icons: {
    style: { color: '#ccc', activeColor: Colors.brandPrimary },
    // style: { color: 'white', height: 30, width: 30 },
  },
};
