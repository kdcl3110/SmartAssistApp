import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';
import HeaderPage from '../components/UI/HeaderNavBar';

import {
 Login,
 Register
} from '../containers';
import Main from './index';
// import translate from '../containers/language/language';

const Index = (
  <Stack hideNavBar>
   {/* <Scene key="Login" component={Login} />
   <Scene key="Register" component={Register} /> */}
    {/* <Scene key="Login" component={LoginScreen} />
    <Scene key="Register" component={RegisterSreen} />
    <Scene key="ConditionsScreen" component={ConditionsScreen} />
    <Scene key="RegisterInfosScreen" component={RegisterInfosScreen} />
    <Scene key="EnterInfos" component={EnterInfos} />
    <Scene key="VerifiacationCode" component={VerifiacationCode} />
    <Scene key="ResetPassword" component={ResetPassword} /> */}
    <Scene key="Main" hideNavBar>
      <Router navBar={HeaderPage}>
        <Stack key="begin" hideNavBar>
          {Main}
        </Stack>
        {/* <Scene
          key="Notification"
          title="notifications"
          component={Notification}
          navBar={HeaderPage}
        />
        <Scene
          key="TravelEvolution"
          title={'evolution_of_the_trip'}
          component={TravelEvolution}
          navBar={HeaderPage}
        /> */}
      </Router>
    </Scene>
    {/* <Scene key="Home" component={HomeScreen} /> */}
  </Stack>
);

export default Index;
