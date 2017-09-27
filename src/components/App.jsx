import React from "react";
import Header from "./Header";
import JokeDisplay from "./JokeDisplay";
import QuoteDisplay from "./QuoteDisplay";
import Home from "./Home";
import { Switch, Route } from 'react-router-dom';

function App(){

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jokes" component={JokeDisplay} />
        <Route path="/quotes" component={QuoteDisplay} />
      </Switch>
    </div>
  );
}

export default App;
