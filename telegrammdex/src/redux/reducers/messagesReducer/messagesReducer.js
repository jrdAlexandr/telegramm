import * as ACTIONS_TYPES from '../../action-types';

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_ALL_MESSAGES:
      return  action.payload.messages
      ;
    case ACTIONS_TYPES.ADD_MESSAGE:
      
      return [ ...state,  action.payload.message]
       
      
    default:
      return state;
  }
};

export default messagesReducer;
