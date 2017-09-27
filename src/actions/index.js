import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export function fetchJoke(dispatch) {
  return function (dispatch) {
    const jokeId = v4();
    dispatch(requestJoke(jokeId));
    return fetch("http://api.icndb.com/jokes/random")
    .then(
      function(response){
        return response.json();
      },
      function(error) {
       console.log("An error occured.", error);
     })

    .then(function(json) {
      const content = json.value.joke;
      return dispatch(receiveJoke(content, jokeId));
    });
  };
}

export const requestJoke = function(jokeId) {
  return {
    type: types.REQUEST_JOKE,
    jokeId
  };
};

export const receiveJoke = (content, jokeId) => ({
  type: types.RECEIVE_JOKE,
  jokeId,
  content
});

export function fetchQuote(dispatch) {
  return function (dispatch) {
    const quoteId = v4();
    dispatch(requestQuote(quoteId));
    return fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(
      function(response){
        return response.json();
      },
      function(error) {
       console.log("An error occured.", error);
     })

    .then(function(json) {
      console.log(json[0]);
      const content = json;
      return dispatch(receiveQuote(content, quoteId));
    });
  };
}

export const requestQuote = function(quoteId) {
  return {
    type: types.REQUEST_QUOTE,
    quoteId
  };
};

export const receiveQuote = (content, quoteId) => ({
  type: types.RECEIVE_QUOTE,
  quoteId,
  content
});
