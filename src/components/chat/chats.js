import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import { GiftedChat, InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
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
import Colors from '../../../native-base-theme/variables/commonColor';
import { Icon } from 'native-base';
// import {dialogflowConfig} from './env';

const botAvatar = require('../../assets/images/smart.png');

const App = () => {
  const [load, setLoad] = useState(false);
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

  //   useEffect(() => {
  //     Dialogflow_V2.setConfiguration(
  //       dialogflowConfig.client_email,
  //       dialogflowConfig.private_key,
  //       Dialogflow_V2.LANG_FRENCH,
  //       dialogflowConfig.project_id,
  //     );

  //     // console.log(new Date().getTime());
  //   }, []);

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
          values: [
            {
              _id: getToken(),
              title: 'Préinscriptions',
              text: 'Préinscriptions',
              user: { _id: 1 },
              createdAt: new Date(),
            },
            {
              _id: getToken(),
              title: 'Parainage',
              text: 'Parainage',
              user: { _id: 1 },
              createdAt: new Date(),
            },
            {
              _id: getToken(),
              title: 'Orientation',
              text: 'Orientation',
              user: { _id: 1 },
              createdAt: new Date(),
            },
          ],
        },
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
      (error) => console.log(error),
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
      (error) => console.log(error),
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
        // alignItems: 'center',
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
          //   borderRadius: 50,
          //   backgroundColor: Colors.brandPrimary,
        }}
      >
        <Icon style={{ color: Colors.brandPrimary, fontSize: 23 }} name="send" />
      </View>
    </Send>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {load && (
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <View
            style={{
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              borderRadius: 15,
              backgroundColor: '#eee',
            }}
          >
            <DotIndicator color="#666" size={10} />
          </View>
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
        {/* <Bubbles size={10} color="#FFF" /> */}
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