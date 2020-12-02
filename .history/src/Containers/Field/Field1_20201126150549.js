import { render } from "@testing-library/react";
import React from "react";

class Fileld1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // Привязка необходима, чтобы сделать this доступным в коллбэке
    this.onSetCross = this.onSetCross.bind(this);
    this.onSetZero = this.onSetZero.bind(this);
  }

  onSetCross() {}

  onSetZero() {}

  render() {
    return <div className={Fileld1.classes}></div>;
  }
}

export default Fileld1;
