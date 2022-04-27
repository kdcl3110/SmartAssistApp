import { StyleSheet } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.inputBackground,
    height: 40,
    padding: 10,
    // borderRadius: 5,
    paddingLeft: 15,
    // borderWidth: 0,
    // borderBottomColor: Colors.brandPrimary,
  },

  label: {
    fontSize: 18,
    color: Colors.textColor,
    marginBottom: 5,
  },
});

export default styles;
