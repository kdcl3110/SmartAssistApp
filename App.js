import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {GiftedChat, InputToolbar, Bubble, Send} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {dialogflowConfig} from './env';

const botAvatar = require('./src/assets/images/smart.png');

const App = () => {
  const BOT = {
    _id: 2,
    name: 'Smarst Assist',
    avatar: botAvatar,
  };
  const [messages, setMessages] = useState([
    {
      _id: 2,
      text: 'My name is smart.assist',
      createdAt: new Date(),
      user: BOT,
    },
    {
      _id: 1,
      text: 'Hi',
      createdAt: new Date(),
      user: BOT,
    },
  ]);

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_FRENCH,
      dialogflowConfig.project_id,
    );

    // console.log(new Date().getTime());
  }, []);

  const handleGoogleResponse = result => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    // console.log(text);

    sendBotResponse(text);
  };

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const sendBotResponse = text => {
    let msg = {
      _id: new Date().getTime(),
      text,
      createdAt: new Date(),
      user: BOT,
    };

    setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]));
  };

  // const onSend = (message = []) => {};

  const onSend = useCallback((message = []) => {
    // setMessages(GiftedChat.append(messages, message));
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
    let msg = message[0].text;
    console.log(messages.length);

    Dialogflow_V2.requestQuery(
      msg,
      result => handleGoogleResponse(result),
      error => console.log(error),
    );
  }, []);

  const onQuickReply = quickReply => {
    setMessages(GiftedChat.append(messages, quickReply));
    let msg = quickReply[0].value;

    Dialogflow_V2.requestQuery(
      msg,
      result => handleGoogleResponse(result),
      error => console.log(error),
    );
  };

  const renderBubble = props => (
    <Bubble
      {...props}
      timeTextStyle={{
        right: {color: 'white'},
        left: {color: 'black'},
      }}
      wrapperStyle={{
        // left: {backgroundColor: 'white'},
        right: {backgroundColor: 'pink'},
      }}
    />
  );
  const renderInputToolbar = props => (
    <InputToolbar
      {...props}
      containerStyle={{marginBottom: 2, paddingVertical: 7, elevation: 4}}
    />
  );

  const renderSend = props => (
    <Send
      {...props}
      containerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginHorizontal: 5,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 25,
          backgroundColor: 'pink',
        }}>
        <Text style={{color: '#ffffff', fontSize: 18}}>send</Text>
      </View>
    </Send>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        onQuickReply={quickReply => onQuickReply(quickReply)}
        user={{_id: 1}}
        sAnimated
        infiniteScroll
        renderUsernameOnMessage
        minComposerHeight={25}
        // renderSend={renderSend}
        // renderBubble={renderBubble}
        // renderInputToolbar={renderInputToolbar}
        // alwaysShowSend
      />
    </View>
  );
};

export default App;
