//import liraries
import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as Toast from '../../components/UI/Toast';
import Layout from '../../components/auth/register';

// create a component
const Register = ({ doRegister }) => {
  const signup = async (data) => {
    try {
      const data2 = {
        name: '@@@@',
        email: data.email,
        phone: data.phone,
        password: data.password,
        password_confirmation: data.password_confirmation,
      };

      const response = await doRegister(data2);
      if (response.data) {
        Toast.showSuccess('Inscription réussit');
        Actions.Main();
      }
    } catch (error) {
      console.log(error);
      Toast.showError("Une erreur c'est produite");
    }
  };

  return <Layout signup={signup} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  doRegister: dispatch.auth.register,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
