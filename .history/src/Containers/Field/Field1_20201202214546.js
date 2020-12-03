import React from "react";
import classes from "./Field1.module.css";
let move = 0;

function checkValue() {
  const pole = document.getElementsByClassName(classes.table);
  console.log(pole);
}

class Field1 extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.onSetValue = this.onSetValue.bind(this);
    // this.checkValue = this.checkValue.bind(this);
  }

  onSetValue(event) {
    // if (event.target.innerHTML == "X") {
    //   alert("Поле затято");
    // }
    // if (event.target.innerHTML == "0") {
    //   alert("Поле затято");
    //   event.target.innerHTML = "0";
    // }

    if (move % 2 === 0) {
      event.target.innerHTML = "X";
    } else {
      event.target.innerHTML = "0";
    }
    move++;

    console.log(event.target.innerHTML);
    checkValue();
  }

  //   checkValue(event) {
  //     console.log("!!!!!!");
  //     // if (event.target.innerHTML == "X") {
  //     //   alert("Поле затято");
  //     //   event.target.innerHTML = "X";
  //     // }
  //     // if (event.target.innerHTML == "0") {
  //     //   alert("Поле затято");
  //     //   event.target.innerHTML = "0";
  //     // }
  //   }

  render() {
    return (
      <div className={classes.conteiner}>
        <div
          className={classes.area}
          ref={this.myRef}
          onClick={this.onSetValue}
        >
          <div className={classes.table} id={"pole"}></div>
          <div className={classes.table} id={"pole"}></div>
          <div className={classes.table} id={"pole"}></div>
          <div className={classes.table} id={"pole"}></div>
          <div className={classes.table} id={"pole"}></div>
          <div className={classes.table} id={"pole"}></div>
          <div className={classes.table} id={"pole"}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
          <div className={classes.table}></div>
        </div>
      </div>
    );
  }
}

export default Field1;
