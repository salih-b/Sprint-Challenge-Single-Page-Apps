import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./WelcomePage";
import Charaters from "./CharacterList";
import styled from "styled-components";

const NavItemsBoxStyle = styled.nav`
display:flex;
justify-content:space-around;
align-items:center;
`;
const NavItemsStyle = styled.a`
color:black;
text-decoration:none;
font-size:2rem;

`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Router>
      <div>
        <nav className="main-nav">
          <NavItemsBoxStyle>
            <NavItemsStyle>
              <Link to="/">Home</Link>
            </NavItemsStyle>
            <NavItemsStyle>
              <Link to="/Charaters">Charaters</Link>
            </NavItemsStyle>
          </NavItemsBoxStyle>
        </nav>
        <Switch>
          <Route path="/Charaters" component={Charaters} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
    </header>
  );
}
