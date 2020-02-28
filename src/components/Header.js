import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./WelcomePage";
import Charaters from "./CharacterList";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Charaters">Charaters</Link>
            </li>
          </ul>
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
