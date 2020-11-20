import { combineReducers } from 'redux'
import dialogsReducer from './dialogsReducer/dialogsReducer'
import messagesReducer from './messagesReducer/messagesReducer'
const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  messages: messagesReducer
 
})

export default rootReducer
