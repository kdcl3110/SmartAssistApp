//import liraries
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Layout from '../../components/auth/login';
import * as Toast from '../../components/UI/Toast';

// create a component
const Login = ({ doLogin }) => {
  const signin = async (data) => {
    try {
      const response = await doLogin(data);
      if (response.data) {
        Toast.showSuccess('Connexion réussit');
        Actions.Main();
      }
    } catch (error) {
      console.log(error);
      Toast.showError('Identifiants incorrect');
    }
  };
  return <Layout signin={signin} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  doLogin: dispatch.auth.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
