//import liraries
import React, { useRef } from 'react';
import { Pages } from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
import { Container, Fab, Icon } from 'native-base';
import { View } from 'react-native';
import Confirm1 from '../../components/confirmation/confirmation1';
import Confirm2 from '../../components/confirmation/confirmation2';
import Confirm3 from '../../components/confirmation/confirmation3';
import Confirm4 from '../../components/confirmation/confirmation4';
import Confirm5 from '../../components/confirmation/confirmation5';
import Colors from '../../../native-base-theme/variables/commonColor';

// create a component
const Confirmation = () => {
  const pages = useRef(null);
  return (
    <Container>
      <Pages ref={pages}>
        <View style={{ flex: 1 }}>
          <Confirm1 />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(1);
              Actions.addRef('confirm_infos', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm2 />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(2);
              Actions.addRef('confirm_infos', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm3 />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(3);
              Actions.addRef('confirm_infos', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm4 />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(4);
              Actions.addRef('confirm_infos', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm5 />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(5);
              Actions.addRef('confirm_infos', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
      </Pages>
    </Container>
  );
};

export default Confirmation;
