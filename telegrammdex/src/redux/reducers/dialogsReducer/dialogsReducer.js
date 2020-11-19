import * as ACTIONS_TYPES from '../../action-types';

const parrotReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.GET_ALL_DIALOGS:
      return {
        ...state,
        dialogs: action.payload.dialogs,
      };

    default:
      return state;
  }
};

export default parrotReducer;
