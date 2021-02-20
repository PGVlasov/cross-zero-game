import { BrowserRouter, Switch, Route } from "react-router-dom";
import Field1 from "./Containers/Field/Field1";
import { Header } from "./Containers/Header/Header";
import { Navbar } from "./Containers/Navbar/Navbar";
import About from "./Containers/Field/About";
import Players from "./Containers/Field/Player";
import { Component } from "react";
import { connect } from "react-redux";
//import { autoLogin } from "./store/actions/auth.js";

class App extends Component() {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <hr />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Field1} />
            <Route path="/about" component={About} />
            <Route path="/player" component={Players} />
          </Switch>
          <hr />
          <hr />
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     autoLogin: () => dispatch(autoLogin()),
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
