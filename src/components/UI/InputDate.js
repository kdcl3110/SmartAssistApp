import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PropTypes } from 'prop-types';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import Colors from '../../../native-base-theme/variables/commonColor';
import { format_date } from '../../lib/formt-date';
import translate from '../../containers/language/language';

const InputDate = ({ date = new Date(), setDate, format, placeholder = 'translate.select_date '}) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  // const [newdate, setNewDate] = useState(false);
  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (value) => {
    setIsPickerShow(false);
    if (value !== undefined) {
      // setNewDate(true);
      setDate(value);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.pickedDate} onPress={showPicker}>
          {date ? format_date(date, format) : format}
        </Text>
      </View>
      <DatePicker
        modal
        open={isPickerShow}
        date={date !== null ? date : new Date()}
        // is24hourSource={'locale'}
        title={translate.birth_date}
        fadeToColor="rgba(0, 0, 0, 0.6)"
        textColor={Colors.textColor}
        onConfirm={onChange}
        minimumDate={new Date()}
        onCancel={() => {
          setIsPickerShow(false);
        }}
        mode="date"
        confirmText={translate.confirm}
        cancelText={translate.cancel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.inputBackground,
  },
  pickedDate: {
    textAlign: 'center',
    padding: 10,
    height: 45,
    fontSize: 14,
    color: Colors.textInputBackground,
  },
});

InputDate.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

InputDate.defaultProps = {
  date: new Date(),
};
export default InputDate;
