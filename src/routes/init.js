//import liraries
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import lang from '../containers/language/language';

// create a component
const Init = ({ children, setLanguage, language }) => {
  useEffect(() => {
    setLanguage();
  }, [language]);

  return <React.Fragment>{children}</React.Fragment>;
};

const mapStateToProps = (state) => ({
  language: state.auth.language,
});

const mapDispatchToProps = (dispatch) => ({
  setLanguage: dispatch.auth.setLanguage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Init);
