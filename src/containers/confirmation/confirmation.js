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
const Confirmation = ({
  responseUser,
  replaceResponseUser,
  printPdf,
  createEtatCivil,
  generateFiche,
}) => {
  const [load, setLoad] = useState(false);

  const submit1 = async () => {
    const etatCivit = {
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
      adresse: responseUser[4],
      date_rdv: responseUser[3],
    };
    console.log(etatCivit);

  const filiation = {
    user_id: 1,
    nationalite: responseUser[15],
    region: responseUser[16],
    departement: responseUser[17],
    nom_pere: responseUser[18],
    profe_pere: responseUser[19],
    nom_mere: responseUser[20],
    profe_mere: responseUser[21],
    nom_contact: responseUser[22],
    telephone_contact: responseUser[23],
    ville_contact: responseUser[24],
  };

  const filieres = {
    user_id: 1,
    etablissement: responseUser[25],
    niveau: responseUser[26],
    choix1: responseUser[27],
    choix2: responseUser[28],
    choix3: responseUser[29],
    statut: responseUser[30],
  };

  const diplome = {
    user_id: 1,
    typedip: responseUser[31],
    serie: responseUser[32],
    anneedop: responseUser[33],
    moyenne: responseUser[34],
    mention: responseUser[35],
    delivrepar: responseUser[36],
    datedeli: responseUser[37],
  };

  const detail = {
    user_id: 1,
    agence: responseUser[13],
    numtrans: responseUser[14],
  };

    try {
      const response = await createEtatCivil(etatCivit);
      const response1 = await createFiliation(filiation);
      const response2 = await createPayment(detail);
      const response3 = await createDiplome(diplome);
      const response4 = await createDetail(filieres);

      const dataStudent = {
        user_id : 1,
        id_etatCivit: response.data.id,
        id_filiation: response1.data.id,
        id_payment: response2.data.id,
        id_diplome: response3.data.id,
        id_detail: response4.data.id,
      }

      const response5 = await createDataStudent(dataStudent);
      if (response5.data) {
        const response6 = await printPdf(response5.data.id);
        await download.dowloadPDF(response6.data.fiche, setLoad);

        Actions.pop();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async () => {
    const values = {
      lastname: responseUser[1],
      firstname: responseUser[2],
      date_naiss: responseUser[3],
      lieu_naiss: responseUser[4],
      num_cni: responseUser[11],
      sexe: responseUser[5],
      adress: responseUser[12],
      tel: responseUser[10],
      email: responseUser[9],
      satut_mat: responseUser[6],
      first_lang: responseUser[8],
      statut_prof: responseUser[7],
      lieu_pay: responseUser[13],
      num_transaction: responseUser[14],
      nationalite: responseUser[15],
      region: responseUser[16],
      departement: responseUser[17],
      nom_pere: responseUser[18],
      prof_pere: responseUser[19],
      nom_mere: responseUser[20],
      prof_mere: responseUser[21],
      nom_contact_urg: responseUser[22],
      tel_urg: responseUser[23],
      ville_re: responseUser[24],
      faculte: responseUser[25],
      niveau: responseUser[26],
      premier_choix: responseUser[27],
      second_choix: responseUser[28],
      troisieme_choix: responseUser[29],
      statut: responseUser[30],
      nom_diplome: responseUser[31],
      nom_serie: responseUser[32],
      annee_obt: responseUser[33],
      moyenne: responseUser[34],
      mention: responseUser[35],
      emetteur_diplome: responseUser[36],
      date_delivrance: responseUser[37],
      andicape: responseUser[1],
    };

    try {
      const response = await generateFiche(values);
      const link = response.data.fiche?.replace('\\n', '');
      console.log(link);
      download.dowloadPDF(link, setLoad);
    } catch (error) {
      console.log(error);
    }
  };

  const pages = useRef(null);
  return (
    <Container>
      <Pages ref={pages}>
        <View style={{ flex: 1 }}>
          <Confirm1
            responseUser={responseUser}
            replaceResponseUser={replaceResponseUser}
            submit={submit}
          />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={async () => {
              pages.current.scrollToPage(1);
              Actions.addRef('Confirmation', pages.current);
              // console.log('test');
              // submit();
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm2 responseUser={responseUser} replaceResponseUser={replaceResponseUser} />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(2);
              Actions.addRef('Confirmation', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm3 responseUser={responseUser} replaceResponseUser={replaceResponseUser} />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(3);
              Actions.addRef('Confirmation', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm4 responseUser={responseUser} replaceResponseUser={replaceResponseUser} />
          <Fab
            position="bottomRight"
            style={{ backgroundColor: Colors.brandPrimary }}
            onPress={() => {
              pages.current.scrollToPage(4);
              Actions.addRef('Confirmation', pages.current);
            }}
          >
            <Icon name="arrow-forward" />
          </Fab>
        </View>
        <View style={{ flex: 1 }}>
          <Confirm5
            responseUser={responseUser}
            replaceResponseUser={replaceResponseUser}
            submit={submit}
          />
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
  generateFiche: dispatch.printFiche.generateFiche,
  createDetail: dispatch.printFiche.createDetail,
  createDiplome: dispatch.printFiche.createDiplome,
  createPayment: dispatch.printFiche.createPayment,
  createFiliation: dispatch.printFichecreateFiliation,
  createDataStudent: dispatch.printFiche.createDataStudent,
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
