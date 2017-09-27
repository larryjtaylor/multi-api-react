import React from "react";
import { fetchJoke }  from "./../actions";
import { connect } from "react-redux";
import Background from "./../images/chuck.jpg";

const JokeDisplay = ({ dispatch, joke }) => {

  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")",
    height: '600px',
    color: 'orange',
    backgroundRepeat: "no-repeat",
    diiplay: "block",
    margin: "auto"
  }
  var jokeStyle = {
    paddingTop: "40%"
  }

  return (
    <div  style={backgroundStyle}>
      <h1>Chuck Norris facts</h1>
      <h1 style={jokeStyle}>{joke}</h1>
      <button onClick={() => {dispatch(fetchJoke())}}>Next Joke</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    joke: state.fixedContent
  };
};


export default connect(mapStateToProps)(JokeDisplay);
