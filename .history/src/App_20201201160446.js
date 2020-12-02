import { BrowserRouter, Switch, Route } from "react-router-dom";
import Field1 from "./Containers/Field/Field1";
import { Header } from "./Containers/Header/Header";
import { Navbar } from "./Containers/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Field1} />
          <Route path="/about" component={About} />
          <Route path="/profile/:name" component={Profile} />
        </Switch>
        <hr />
        <hr />
      </BrowserRouter>
    </div>
  );
}

export default App;
