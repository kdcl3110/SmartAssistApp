//import liraries
import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/chat/chats';

// create a component
const Chat = ({ replacelocalMessages, replaceResponseUser }) => (
  <Layout replacelocalMessages={replacelocalMessages} replaceResponseUser={replaceResponseUser} />
);

const mapStateToProps = (state) => ({
  // listFlat: state.articles.listFlat || [],
  // listPaginated: state.articles.listPaginated || {},
  // meta: state.articles.meta || [],
  // pagination: state.articles.pagination || {},
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.articles.fetchList,
  replacelocalMessages: dispatch.messages.replacelocalMessages,
  replaceResponseUser: dispatch.messages.replaceResponseUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
