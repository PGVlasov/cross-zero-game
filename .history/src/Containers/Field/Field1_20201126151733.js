import { render } from "@testing-library/react";
import React from "react";
import classes from "./Field1.module.css";

class Field1 extends React.Component {
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
    return (
      <div className={classes.Field1}>
        <div className={classes.table}></div>
      </div>
    );
  }
}

export default Field1;
