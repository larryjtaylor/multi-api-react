import React from "react";
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Header(){
  return (
    <div>
      <Jumbotron>
        <h1>Humorland</h1>
        <Link to="/"><Button>Home</Button></Link> | <Link to="/jokes"><Button>Chuck Norris</Button></Link> | <Link to="/quotes"><Button>Ron Swanson</Button></Link>
      </Jumbotron>
    </div>
  );
}

export default Header;
