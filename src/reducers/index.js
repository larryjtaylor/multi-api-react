import { combineReducers } from 'redux'
import selectedJoke from './selectedJoke'
import selectedQuote from './selectedQuote'

const rootReducer = combineReducers({
  selectedJoke,
  selectedQuote
});

export default rootReducer;
