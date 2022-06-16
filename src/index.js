import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';
import GlobalFont from 'react-native-global-font';
import commonColor from '../native-base-theme/variables/commonColor';

import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from './env';

import { Root, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import theme from '../native-base-theme/variables/commonColor';

import Routes from './routes/Bigin';
import Loading from './components/UI/Loading';
import Init from './routes/init';

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    SplashScreen.hide();
    this.setState({ loading: false });

    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_FRENCH,
      dialogflowConfig.project_id,
    );

    GlobalFont.applyGlobal(commonColor.fontFamily);
  }

  render() {
    const { loading } = this.state;
    const { store, persistor } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <Root>
        <MenuProvider>
          <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
              <StyleProvider style={getTheme(theme)}>
                <Init>
                  <Router>
                    <Stack key="root">{Routes}</Stack>
                  </Router>
                </Init>
              </StyleProvider>
            </PersistGate>
          </Provider>
        </MenuProvider>
      </Root>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
