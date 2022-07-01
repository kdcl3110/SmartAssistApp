//import liraries
import React, { useRef, useState } from 'react';
import { Pages } from 'react-native-pages';
import { Actions } from 'react-native-router-flux';
import { Container, Fab, Icon } from 'native-base';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Confirm1 from '../../components/confirmation/confirmation1';
import Confirm2 from '../../components/confirmation/confirmation2';
import Confirm3 from '../../components/confirmation/confirmation3';
import Confirm4 from '../../components/confirmation/confirmation4';
import Confirm5 from '../../components/confirmation/confirmation5';
import Colors from '../../../native-base-theme/variables/commonColor';
import * as download from '../../lib/downloadFile';
import format from '../../lib/formt-date';

// create a component
const Confirmation = ({ responseUser, replaceResponseUser, printPdf, createEtatCivil }) => {
  const [load, setLoad] = useState(false);
  const submit = async () => {
    
    const values = {
      user_id: 1,
      code: 'kb1561',
      nom: responseUser[1],
      prenom: responseUser[2],
      date_naiss: responseUser[3],
      datePrécise: 'NON',
      lieu_naiss: responseUser[4],
      sexe: responseUser[5],
      statut_matrimonial: responseUser[6],
      situation_pro: responseUser[7],
      premiere_langue: responseUser[8],
      email: responseUser[9],
      telephone: responseUser[10],
      num_cni: responseUser[11],
      adresse: responseUser[4 ],
      date_rdv: responseUser[3],
    };
    console.log(values);

    try {
      const response = await createEtatCivil(values);
      if (response.data) {
        const response2 = await printPdf(response.data.id);
        download.dowloadPDF(response2.data.fiche, setLoad);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pages = useRef(null);
  return (
    <Container>
      <Pages ref={pages}>
        <View style={{ flex: 1 }}>
          <Confirm1 responseUser={responseUser} replaceResponseUser={replaceResponseUser} submit={submit} />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={async () => {
              pages.current.scrollToPage(1);
              Actions.addRef('confirm_infos', pages.current);
              // console.log('test');
              // submit();
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
        </View>
      </Pages>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  responseUser: state.messages.responseUser,
});

const mapDispatchToProps = (dispatch) => ({
  replacelocalMessages: dispatch.messages.replacelocalMessages,
  replaceResponseUser: dispatch.messages.replaceResponseUser,
  createEtatCivil: dispatch.printFiche.createEtatCivil,
  printPdf: dispatch.printFiche.printPdf,
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
