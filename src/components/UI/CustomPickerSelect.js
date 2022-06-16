import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { CustomPicker } from 'react-native-custom-picker';
import { Icon, Text, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import commonColor from '../../../native-base-theme/variables/commonColor';
// import translate from '../../containers/language/language';

const CustomPickerSelect = ({
  style,
  onValueChange,
  placeholder,
  options = [],
  selectedValue,
  label = 'name',
  trackId = 'calling_code',
  close = true,
  order = true,
  getCountries,
  refreshe = false,
  getCurrency,
}) => {
  const [listItem, setListItem] = useState(options);
  const [reset, setReset] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (order) {
      if (label === 'district') {
        setListItem(_.uniqBy([...options].sort(SortArray), 'district'));
      } else {
        setListItem([...options].sort(SortArray));
      }
    } else {
      setListItem([...options]);
    }
    if (reset) {
      setReset(false);
    }
  }, [options]);
  const renderField = (settings) => {
    const { selectedItem, defaultText, clear } = settings;
    return (
      <View
        style={[
          style,
          {
            backgroundColor: commonColor.inputBackground,
            width: '100%',
            borderRadius: 50,
            justifyContent: 'center',
          },
        ]}
      >
        {!selectedItem ? (
          <View
            style={[
              style,
              {
                flexDirection: 'row',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}
          >
            <Text style={{ color: 'grey' }} numberOfLines={1}>
              {defaultText}
            </Text>
            <Icon name="caret-down-sharp" style={{ fontSize: 15, color: 'grey' }} />
          </View>
        ) : (
          <View
            style={[
              style,
              {
                flexDirection: 'row',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}
          >
            {/* <View style={{ flexDirection: 'row', padding: 5, }}> */}
            {/* <Image source={{ uri: selectedItem?.flag }} style={{ width: 20, height: 15, marginRight: 5 }} /> */}
            <Text style={{ fontSize: 15 }} numberOfLines={1}>
              {selectedItem[label] ? `${selectedItem[label]}` : placeholder}
              {selectedItem[trackId] && ` (${selectedItem[trackId]})`}
            </Text>
            {/* </View> */}
            {close ? (
              <Icon name="close" style={{ fontSize: 20 }} onPress={clear} />
            ) : (
              <Icon name="caret-down-sharp" style={{ fontSize: 15, color: 'grey' }} />
            )}
          </View>
        )}
      </View>
    );
  };

  const renderOption = (settings) => {
    const { item } = settings;
    return (
      <View
        style={{
          marginLeft: 10,
          padding: 5,
          flexDirection: 'row',
          marginVertical: 5,
        }}
      >
        {item?.flag && (
          <Image source={{ uri: item?.flag }} style={{ width: 25, height: 20, marginRight: 10 }} />
        )}
        <Text style={{ fontSize: 15, alignSelf: 'flex-start' }} numberOfLines={1}>
          {item[label] && `${item[label]}`}
          {item[trackId] && ` (${item[trackId]})`}
          {!item[trackId] && !item[label] && ` ${'translate.no'} ${placeholder}`}
        </Text>
      </View>
    );
  };
  // const renderHeader = () => (
  //   <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
  //     <Item style={{
  //       height: 40, width: '90%', backgroundColor: commonColor.inputBackground, margin: 10, paddingHorizontal: 10, borderRadius: 5,
  //     }}
  //     >
  //       <Input
  //         onChangeText={(val) => {
  //           console.log(val.toLowerCase());
  //           setSearch(val);
  //           if (val !== '') {
  //             if (label === 'district') {
  //               setListItem(_.uniqBy([...options].filter((item) => ((item[label].toString()).toLowerCase()).includes((val.toString()).toLowerCase())), 'district'));
  //             } else {
  //               setListItem([...options].filter((item) => ((item[label].toString()).toLowerCase()).includes((val.toString()).toLowerCase())));
  //             }
  //           } else if (val === '') {
  //             if (label === 'district') {
  //               setListItem(_.uniqBy(([...options].sort(SortArray)), 'district'));
  //             } else {
  //               setListItem([...options].sort(SortArray));
  //             }
  //           }
  //         }}
  //         placeholder={translate.search}
  //         value={search}
  //       />
  //     </Item>
  //   </View>
  // );

  // const renderFooter = () => (
  //   <TouchableOpacity
  //     style={{ marginVertical: 10, alignItems: 'center' }}
  //     onPress={() => {
  //       if (placeholder === translate?.creation?.currencie) {
  //         getCurrency();
  //       } else {
  //         getCountries();
  //       }
  //     }}
  //   >
  //     <Text>{translate.refresh}</Text>
  //   </TouchableOpacity>
  // );

  const SortArray = (x, y) =>
    x[label].toString().toLowerCase()?.localeCompare(y[label].toString().toLowerCase());
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <CustomPicker
        placeholder={placeholder}
        options={listItem.length >= 1 ? listItem : [1]}
        value={selectedValue}
        fieldTemplate={renderField}
        // footerTemplate={refreshe ? renderFooter : null}
        optionTemplate={renderOption}
        // headerTemplate={options.length >= 25 ? renderHeader : null}
        onValueChange={(val) => {
          setReset(true);
          onValueChange(val);
        }}
        modalStyle={{ borderRadius: 8 }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  // getCountries: dispatch.countries.fetchList,
  // getCurrency: dispatch.countries.getCurrency,
});
export default CustomPickerSelect;
