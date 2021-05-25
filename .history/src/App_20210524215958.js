import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from "./Containers/Field/Game";
import { Header } from "./Containers/Header/Header";
import { Navbar } from "./Containers/Navbar/Navbar";
import About from "./Containers/Field/About";
import Players from "./Containers/Field/Player";
import Auth from "./Containers/Auth/Auth";
import { Component } from "react";
import { connect } from "react-redux";
import { autoLogin } from "./store/action/auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Game} />
          <Route path="/about" component={About} />
          <Route path="/player" component={Players} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
