import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Dimensions, Alert, BackHandler } from 'react-native';
import { Icon } from 'native-base';
import DatePicker from 'react-native-date-picker';
import { format_date } from '../../lib/formt-date';
import { GiftedChat, InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
import { Actions } from 'react-native-router-flux';
import { DotIndicator } from 'react-native-indicators';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import ModalUI from './modalFinish';
import translate from '../../containers/language/language';
import Colors from '../../../native-base-theme/variables/commonColor';
import { TouchableOpacity } from 'react-native-gesture-handler';

const botAvatar = require('../../assets/images/smart.png');

const App = ({ replacelocalMessages, replaceResponseUser }) => {
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [keyboardType, setkeyboardType] = useState('');
  const [isDate, setIsDate] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const [date, setDate] = useState('');

  const [isPickerShow, setIsPickerShow] = useState(false);
  // const [newdate, setNewDate] = useState();
  const showPicker = () => {
    setIsPickerShow(true);
  };

  const BOT = {
    _id: 2,
    name: 'Smarst Assist',
    avatar: botAvatar,
  };
  const [messages, setMessages] = useState([
    {
      _id: 2,
      text: translate.bigin,
      createdAt: new Date(),
      user: BOT,
    },
    {
      _id: 1,
      text: translate.hello_smart,
      createdAt: new Date(),
      user: BOT,
    },
  ]);

  const backAction = () => {
    if (Actions.currentScene === 'Chat') {
      Alert.alert(translate.warning, translate.quit_app, [
        {
          text: translate.cancel,
          onPress: () => null,
          style: translate.cancel,
        },
        { text: translate.yes, onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    // console.log(messages);
    replacelocalMessages([...messages]);

    const responseUser = {};

    messages.forEach((e, i, values) => {
      // console.log( parseInt(e.text.split('-')[0]));
      if (!isNaN(parseInt(e.text.split('-')[0])) && i - 1 > 0 && e.user._id === 2) {
        console.log(parseInt(e.text.split('-')[0]));
        responseUser[e.text.split('-')[0]] = values[i - 1].text;
        console.log(responseUser);
      }
      if (e.text == 'fin de la préinscription\n' || e.text.split(':')[0] == 'summary') {
        setVisible(true);
        // Actions.Confirmation();
        return;
      }
    });

    replaceResponseUser({ ...responseUser });
  }, [messages]);

  const handleGoogleResponse = (result) => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
  };

  const getToken = () => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const showQuickReplies = (values = []) => {
    const renderTab = [];
    values.forEach((e, i) => {
      const quickReply = {
        _id: getToken(),
        title: `${e}`,
        text: `${e}`,
        user: { _id: 1 },
        createdAt: new Date(),
      };

      renderTab.push(quickReply);
    });

    return renderTab;
  };

  const sendBotResponse = (text) => {
    // console.log();
    let newText = '';
    const newChaine = text.split('\\n');
    console.log(newChaine);
    newChaine.forEach((e) => {
      newText += `${e}\n`;
    });

    let msg = {
      _id: getToken(),
      text: newText,
      createdAt: new Date(),
      user: BOT,
    };

    if (text === 'Modules') {
      msg = {
        _id: getToken(),
        text: translate.Choose_your_module,
        createdAt: new Date(),
        user: BOT,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [
            ...showQuickReplies([
              translate.preinscription,
              translate.orientation,
              // translate.sponsorship,
            ]),
          ],
        },
      };
    } else if (
      newChaine[0] ===
        'Je vais vous poser une série de question qui aiderons à remplir votre fiche de pré-inscriptions.' ||
      newChaine[0] ===
        'I will ask you a series of questions that will help you fill out your pre-registration form.'
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([translate.start_pregistration]),
      };
    } else if (
      text === '10- Quel est votre numéro de téléphone ?' ||
      text === '10- What is your phone number?' ||
      text === "23- Numéro de téléphone du contact d'urgence"
    ) {
      setkeyboardType('phone-pad');
    } else if (
      text === '3- quel est votre date de naissance (jj/mm/aaaa) ?' ||
      text === '3- what is your date of birth (dd/mm/yyyy)?' ||
      text === '37- date de délivrance du diplôme ?'
    ) {
      setIsDate(true);
    } else if (
      text === '9- Quel est votre adresse email ?' ||
      text === '9- What is your email address?'
    ) {
      setkeyboardType('email-address');
    } else if (
      text === '11- Entrez votre numéro de CNI' ||
      text === '11- Enter your CNI number' ||
      text === '34- Quel moyenne avez vous obtenue ?' ||
      text === '33- En quel année avez vous obtenu votre diplôme (ex: 2010)'
    ) {
      setkeyboardType('numeric');
    } else if (text === '13- où avez vous effectué votre paiement') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['express union', 'sgc', 'yup']),
      };
    } else if (text === '15- Quel est votre nationalité ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'Cameroun',
          'Congo',
          'Gabon',
          'Guinée-équatorial',
          'Ngeria',
          'Républic centrafricaine',
          'Tchad',
          'Autre',
        ]),
      };
    } else if (text === "16- Région d'origine") {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'ETRANGER',
          'CENTRE',
          'ADAMAOUA',
          'EST',
          'EXTREME-NORD',
          'LITTORAL',
          'NORD',
          'NORD-OUEST',
          'OUEST',
          'SUD',
          'SUD-OUEST',
        ]),
      };
    } else if (text === "17- Département d'origine") {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'ETRANGER',
          'Mbam et Inoubou',
          'Haute-Sanaga',
          'Lekié',
          'Mbam-et-Kim',
          'Méfou-et-Afamba',
          'Méfou-et-Akono',
          'Mfoundi',
          'Nyong-et-Kellé',
          'Nyong-et-Mfoumou',
          "Nyong-et-So'o",
        ]),
      };
    } else if (text === '25- Choisissez votre faculté') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'Faculté des Sciences (FS)',
          'Faculté des Arts, Lettres et Sciences Humaines (FALSH)',
          "Faculté des Sciences de l'Education (FSE)",
          'Institut Universitaire de Technologies du Bois de Mbalmayo (IUT Bois)',
        ]),
      };
    } else if (text === '30- Quel est votre statut') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['Etudiant camerounais', 'Etudiant étrangé']),
      };
    } else if (text === '36- Emetteur du diplôme') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['OBC', 'GCE Board']),
      };
    } else if (text === '35- Quel mention avez vous eu ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'passable',
          'assez bien',
          'bien',
          'très bien',
          'excellent',
          'parfait',
        ]),
      };
    } else if (text === '32- Quel est votre série ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'A',
          'B',
          'C',
          'D',
          'E',
          'F1',
          'F2',
          'F3',
          'F4',
          'F5',
          'F6',
          'F7',
          'F8',
          'TI',
          'MEB',
          'IB',
          'CB',
          'CHB',
          'SPB',
        ]),
      };
    } else if (text === '31- Quel est le nom de votre diplôme ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'BACC CAMEROUNAI',
          'BACC ETRANGER',
          'GCE A LEVEL',
          'GCE O LEVEL',
          'DEUG',
          'DUT',
          'LICENCE',
          'LICENCE PROFESSIONEL',
          'LICENCE EN SCRIENCE BIOMEDICALS',
          'MASTER 1',
          'MASTER 2',
          'DIPES 1',
          'CSCT',
          'RELEVE DE NOTE',
          "DIPLOME D'ETAT D'INFIRMIER",
          'DOCTORAT',
          'DOCTORAT EN MEDECINE OU EN PHARMACIE',
          'PROBATOIRE',
        ]),
      };
    } else if (
      text === '27- premier choix de filière' ||
      text === '28- deuxième choix de filière' ||
      text === '29- troisième choix de filière'
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          'INFORMATIQUE',
          'BIOCHIMIE',
          'BIOLOGIE ANIMALE',
          'BIOLOGIE VEGETALE',
          'CHIMIE',
          'MATHEMATIQUES',
          'PHYSIQUE',
          'SCIENCES DE LA TERRE ET DE L UNIVERS',
          'MICROBIOLOGIE',
          'BIOSCIENCES',
          'GEOSCIENCES',
          'ICT for DEVELOPMENT',
          'CHIMIE INORGANIQUE',
          'CHIMIE ORGANIQUE',
          'Master Pro - Réseaux et Applications Multimédia (RAM)',
          'Master Pro - Systèmes d’information et Génie Logiciel (SIGL)',
          'Master Pro - Sécurité des Systèmes Informatiques (SSI)',
          'Licence Pro. - Information and Communication Technology for Development (ICT4D)',
          'Master Pro - Sciences de l’Environnement',
          'Master Pro - Sciences Forestières -Audit et Certification des Forets',
          'Master Pro - Sciences Forestières -Aires Protégées',
          'Master Pro - Sciences Forestières -Agroforesterie',
          'Master Pro - Industrie des Semences',
          'Master Pro - Mines, Pétrole et Métallurgie',
          'Master Pro - Ingénierie Géotechnique',
          'Master Pro Régional - MAREMA',
          'Master Pro - Sécurité Sanitaire des Aliments',
          'Master Pro - Biotechnologie de la Santé Publique',
        ]),
      };
    } else if (text === '26- Quel niveau souhaitez vous intégrer ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['L1', 'L2', 'L3', 'M1']),
      };
    }  else if (text === '5- Quel est votre sexe?' || text === '5- What is your gender?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([translate.man, translate.woman]),
      };
    } else if (
      text ===
      "😅 restez encore devant votre écran nous n'avons pas encore terminé.\\n\\nCliquez si dessous pour continuer"
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['Informations de paiement et de filiation']),
      };
    } else if (
      text ===
      "🙃 prenez patience j'ai encore quelques questions à vous posez pour mener à bien votre préinscription. \\n\\nCliquez si dessous pour continuer"
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['faculté et études souhaitées']),
      };
    } else if (
      text ===
      '😁😁 plus que quelques questions et nous avons terminé.\\n\\nCliquez si dessous pour continuer'
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['diplômes présentés']),
      };
    } else if (
      text === '6- quel est votre statut matrimonial ?' ||
      text === '6- what is your marital status?'
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([translate.single, translate.married, translate.divorced]),
      };
    } else if (
      text === '7- Quel est votre situation professionnelle ?' ||
      text === '7- What is your professional situation?'
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          translate.jobless,
          translate.employee,
          translate.in_self_employment,
        ]),
      };
    } else if (
      text === '8- Quel langue parlez-vous le plus ?' ||
      text === '8- Which language do you speak the most?'
    ) {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([translate.french, translate.english]),
      };
    } else if (text === 'orientation') {
      msg.text = 'Choisissez votre faculté';
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([translate.fs, translate.falsh]),
      };
    } else if (text === 'Que voulez-vous savoir sur la faculté des sciences ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          `fs - ${translate.sectors}`,
          `fs - ${translate.description}`,
          `fs - ${translate.administrative_structure}`,
        ]),
      };
    } else if (text === 'Que voulez-vous savoir sur la faculté des lettres (FALSH) ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          `falsh - ${translate.sectors}`,
          `falsh - ${translate.description}`,
          `falsh - ${translate.administrative_structure}`,
        ]),
      };
    } else if (text === 'Que voulez-vous savoir sur la filière informatique ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([`info - ${translate.description}`, 'info - debouchés']),
      };
    } else if (text === 'Que voulez-vous savoir sur la filière mathématique ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          `math - ${translate.description}`,
          `math - ${translate.opportunities}`,
        ]),
      };
    } else if (text === 'Que voulez-vous savoir sur la filière chimie ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          `chi - ${translate.description}`,
          `chi - ${translate.opportunities}`,
        ]),
      };
    } else if (text === 'Listes des filières de la faculté des sciences') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          `${translate.computer_science}`,
          translate.biochemistry,
          translate.animal_biology,
          translate.plant_biology,
          translate.chemistry,
          translate.mathematics,
          translate.physics,
          translate.stu,
          translate.micobiology,
          translate.bioscience,
          translate.geoscience,
          'ict for development',
          translate.inorganic_chemistry,
          translate.organic_chemistry,
        ]),
      };
    } else if (text === 'Listes des filières de la faculté des lettres') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies([
          translate.geography,
          translate.history,
          'allemand',
          'lettre moderne française',
          'sociologie',
          'anglais',
          'antropologie',
          'arts et archéologie',
          'langue africaines et linguistique',
          'lettre bilingue',
          'littérature et civilisation française',
          'psychologie',
          'science du language',
          'tourisme et hotellerie',
        ]),
      };
    } else {
      setkeyboardType('');
      setIsDate(false);
    }
    setMessages((previousMessages) => GiftedChat.append(previousMessages, [msg]));
    setLoad(false);
  };

  // const onSend = (message = []) => {};

  const onSend = useCallback((message = []) => {
    console.log(message);
    setMessages((previousMessages) => GiftedChat.append(previousMessages, message));
    let msg = message[0].text;

    setLoad(true);
    Dialogflow_V2.requestQuery(
      msg,
      (result) => {
        handleGoogleResponse(result);
      },
      (error) => {
        console.log(error);
        setLoad(false);
      },
    );
  }, []);

  const onQuickReply = (quickReply = []) => {
    const add = [{ ...quickReply[0], _id: getToken() }];
    setMessages((previousMessages) => GiftedChat.append(previousMessages, add));
    console.log('test');
    let msg = quickReply[0].text;
    setLoad(true);
    Dialogflow_V2.requestQuery(
      msg,
      (result) => {
        // setMessages((previousMessages) => GiftedChat.append(previousMessages, [load]));
        handleGoogleResponse(result);
      },
      (error) => {
        setLoad(false);
        console.log(error);
      },
    );
  };

  const renderBubble = (props) => (
    <Bubble
      {...props}
      timeTextStyle={{
        right: { color: 'white' },
      }}
      wrapperStyle={{
        right: { backgroundColor: Colors.brandPrimary },
      }}
    />
  );
  const renderInputToolbar = (props) => {
    return (
      <View
        style={{
          height: 60,
          marginBottom: 10,
          flexDirection: isDate ? 'row' : 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {isDate && (
          <TouchableOpacity onPress={showPicker}>
            <Icon name="date" type="Fontisto" style={{ color: Colors.brandPrimary }} />
          </TouchableOpacity>
        )}
        <InputToolbar
          {...props}
          textInputProps={{
            keyboardType: keyboardType,
          }}
          containerStyle={{
            flex: 0.8,
            marginHorizontal: isDate ? null : 15,
            elevation: 4,
            height: 50,
            borderRadius: 50,
            color: '#000',
            width: isDate ? '90%' : '95%',
            justifyContent: 'center',
            position: 'relative',
            borderWidth: 0,
          }}
        />
      </View>
    );
  };

  const renderSend = (props) => (
    <Send {...props} containerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          marginHorizontal: 5,
          padding: 10,
        }}
      >
        <Icon style={{ color: Colors.brandPrimary, fontSize: 23 }} name="send" />
      </View>
    </Send>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ModalUI modalVisible={visible} setModalVisible={setVisible} />
      <DatePicker
        modal
        open={isPickerShow}
        date={new Date()}
        title={translate.birth_date}
        fadeToColor="rgba(0, 0, 0, 0.6)"
        textColor={Colors.textColor}
        onConfirm={(val) => {
          console.log(val);
          setIsPickerShow(false);
          if (val !== undefined) {
            setCurrentValue(format_date(val, 'DD/MM/YYYY'));
          }
        }}
        maximumDate={new Date()}
        onCancel={() => {
          setIsPickerShow(false);
        }}
        mode="date"
        confirmText={translate.confirm}
        cancelText={translate.cancel}
      />
      {load && (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 3,
            elevation: 3,
            backgroundColor: 'rgba(0,0,0,0.5)',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            alignItems: 'center',
          }}
        >
          <DotIndicator color="#fff" size={10} />
        </View>
      )}
      <View
        style={{
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../../assets/images/pngwing.png')}
          style={{
            width: Dimensions.get('window').width / 1.2,
            height: Dimensions.get('window').width / 1.2 - 60,
          }}
        />
      </View>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        onQuickReply={onQuickReply}
        user={{ _id: 1 }}
        sAnimated
        infiniteScroll
        onInputTextChanged={setCurrentValue}
        text={currentValue}
        renderUsernameOnMessage
        minComposerHeight={25}
        renderSend={renderSend}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        render
      />
    </View>
  );
};

export default App;
