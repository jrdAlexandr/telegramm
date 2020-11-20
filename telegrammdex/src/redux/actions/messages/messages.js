import * as ACTIONS_TYPES from '../../action-types';

const GET_ALL_MESSAGES = (messages) => {
  return {
    type: ACTIONS_TYPES.GET_ALL_MESSAGES,
    payload: {
      messages,
    },
  };
};

const ADD_MESSAGE = (message) => {
  return {
    type: ACTIONS_TYPES.ADD_MESSAGE,
    payload: {
      message,
    },
  };
};

const getMessages = (chat) => async (dispatch) => {
  const response = await fetch(
    `https://api.mailchat.net/test/message.get?id=${chat}`,
    {
      method: 'GET',
    }
  );
  const data = await response.json();
  dispatch(GET_ALL_MESSAGES(data.response.messages));
};

export { GET_ALL_MESSAGES, getMessages, ADD_MESSAGE };
