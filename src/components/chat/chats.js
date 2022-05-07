import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { GiftedChat, InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
import { Actions } from 'react-native-router-flux';
// import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { Loading } from '../UI';
import ModalUI from './modalFinish';
import Colors from '../../../native-base-theme/variables/commonColor';
// import {dialogflowConfig} from './env';

const botAvatar = require('../../assets/images/smart.png');

const App = ({ replacelocalMessages, replaceResponseUser }) => {
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const BOT = {
    _id: 2,
    name: 'Smarst Assist',
    avatar: botAvatar,
  };
  const [messages, setMessages] = useState([
    {
      _id: 2,
      text: 'Tapez "Modules" pour commencer',
      createdAt: new Date(),
      user: BOT,
    },
    {
      _id: 1,
      text: "Bonjour, je m'appelle smart.assist",
      createdAt: new Date(),
      user: BOT,
    },
  ]);

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
      if (e.text.split('-')[0] == 'récapitulatif ') {
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
    let msg = {
      _id: getToken(),
      text,
      createdAt: new Date(),
      user: BOT,
    };

    if (text === 'Modules') {
      msg = {
        _id: getToken(),
        text: 'Choisissez votre module Parmis les réponses suivantes :',
        createdAt: new Date(),
        user: BOT,
        quickReplies: {
          type: 'radio',
          keepIt: true,
          values: [...showQuickReplies(['Préinscriptions', 'Parainage', 'Orientation'])],
        },
      };
    } else if (text === '5- Quel est votre sexe?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['Homme', 'Femme']),
      };
    } else if (text === '6- quel est votre statut matrimonial ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['Célibataire', 'Marié']),
      };
    } else if (text === '8- Quel langue parlez-vous le plus ?') {
      msg.quickReplies = {
        type: 'radio',
        keepIt: true,
        values: showQuickReplies(['Français', 'Anglais']),
      };
    }
    // setMessages((previousMessages) => GiftedChat.prepend(previousMessages, [load]));
    setMessages((previousMessages) => GiftedChat.append(previousMessages, [msg]));
    setLoad(false);
  };

  // const onSend = (message = []) => {};

  const onSend = useCallback((message = []) => {
    // setMessages(GiftedChat.append(messages, message));
    console.log(message);
    setMessages((previousMessages) => GiftedChat.append(previousMessages, message));
    let msg = message[0].text;

    setLoad(true);
    Dialogflow_V2.requestQuery(
      msg,
      (result) => {
        // setMessages((previousMessages) => GiftedChat.append(previousMessages, [load]));
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
    console.log(add);
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
        left: { color: 'black' },
      }}
      wrapperStyle={{
        // left: {backgroundColor: 'white'},
        right: { backgroundColor: Colors.brandPrimary },
      }}
    />
  );
  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        marginBottom: 7,
        elevation: 4,
        marginHorizontal: 15,
        height: 50,
        color: '#000',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 0,
      }}
    />
  );

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
          // resizeMode="center"
        />
      </View>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        onQuickReply={onQuickReply}
        user={{ _id: 1 }}
        sAnimated
        infiniteScroll
        // textInputStyle={{ borderBottomWidth: 3, paddingBottom: 5, borderBottomColor: Colors.brandPrimary }}
        renderUsernameOnMessage
        minComposerHeight={25}
        renderSend={renderSend}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        // alwaysShowSend
      />
    </View>
  );
};

export default App;
