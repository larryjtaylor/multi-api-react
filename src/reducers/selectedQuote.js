import constants from "./../constants";
import v4 from "uuid/v4";

const { defaultState, types } = constants;

const selectedQuote = (state = defaultState, action) => {
  let newState;
  let newQuote;
  let quote;

  switch (action.type) {
    case types.REQUEST_QUOTE:
      newQuote = {
        isFetching: true,
        quoteId: action.quoteId
      };
      newState = Object.assign({}, state, {
        [action.quoteId]: newQuote
      });
      return newState;
    case types.RECEIVE_QUOTE:
      quote = state[action.quoteId];
      newQuote = {
        isFetching: false,
        quote: action.quote,
        quoteId: action.quoteId
    };

    return newQuote;
      default:
        return state;
  }
};

export default selectedQuote;
