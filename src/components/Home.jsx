import React from "react";
import Background from "./../images/don.jpg";

function Home(){
  var backgroundStyle = {
    backgroundImage: "url(" + Background + ")",
    height: '600px',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    diiplay: "block",
    margin: "auto"
  }

  var titleStyle = {
    paddingTop: "45%"
  }

  return (
    <div style={backgroundStyle}>
      <h1 style={titleStyle}>What do you want to see first?</h1>
    </div>
  );
}

export default Home;
