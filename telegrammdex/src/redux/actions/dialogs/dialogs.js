import * as ACTIONS_TYPES from '../../action-types';

const GET_ALL_DIALOGS = (dialogs) => {
  return {
    type: ACTIONS_TYPES.GET_ALL_DIALOGS,
    payload: {
      dialogs,
    },
  };
};

const getDialogs = () => async (dispatch) => {
  const response = await fetch(
    'https://api.mailchat.net/test/chat.get',
    {
      method: 'GET',
    }
  );
  const data = await response.json();
  dispatch(GET_ALL_DIALOGS(data.response.subjects));
};

export { GET_ALL_DIALOGS, getDialogs };
