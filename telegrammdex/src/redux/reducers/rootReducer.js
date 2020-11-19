import { combineReducers } from 'redux'
import dialogsReducer from './dialogsReducer/dialogsReducer'

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
 
})

export default rootReducer
