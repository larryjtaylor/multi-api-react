import React from "react";
import { fetchQuote }  from "./../actions";
import { connect } from "react-redux";
import Background from "./../images/swanson.jpg";

const QuoteDisplay = ({ dispatch, quote }) => {

  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")",
    height: '600px',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    diiplay: "block",
    margin: "auto"
  }

  var quoteStyle = {
    color: 'black',
    paddingTop: "40%"
  }

  return (
    <div  style={backgroundStyle}>
      <h1>Wisdom from Ron Swanson</h1>
      <h1 style={quoteStyle}>{quote}</h1>
      <button onClick={() => {dispatch(fetchQuote())}}>Next Quote</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.fixedContent
  };
};


export default connect(mapStateToProps)(QuoteDisplay);
