import { BrowserRouter, Switch, Route } from "react-router-dom";
import Field1 from "./Containers/Field/Field1";
import { Header } from "./Containers/Header/Header";
import { Navbar } from "./Containers/Navbar/Navbar";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Navbar />
      <hr />
      <hr />
      <Field1 />
    </div>
  );
}

export default App;
