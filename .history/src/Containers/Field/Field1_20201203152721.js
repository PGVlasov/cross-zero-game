import React from "react";
import classes from "./Field1.module.css";
let move = 0;

function checkValue() {
  const pole = document.getElementsByClassName(classes.table);
  let i = 0;
  const arr = [
    [0, 10, 20, 30, 40],
    [1, 11, 21, 31, 41],
    [2, 12, 22, 32, 42],
    [3, 13, 23, 33, 43],
    [4, 14, 24, 34, 44],
  ];

  for (i = 0; i < arr.length; i++) {
    if (pole[arr[i][0]].innerHTML === "X") {
      console.log("Победа Крестиков");
      window.location.reload();
    }
  }

  //   if (
  //     (pole[0].innerHTML === "X" &&
  //       pole[10].innerHTML === "X" &&
  //       pole[20].innerHTML === "X" &&
  //       pole[30].innerHTML === "X" &&
  //       pole[40].innerHTML === "X") ||
  //     (pole[1].innerHTML === "X" &&
  //       pole[11].innerHTML === "X" &&
  //       pole[21].innerHTML === "X" &&
  //       pole[31].innerHTML === "X" &&
  //       pole[41].innerHTML === "X")
  //   ) {
  //     console.log("Победа Крестиков");
  //   } else if (
  //     pole[0].innerHTML === "0" &&
  //     pole[10].innerHTML === "0" &&
  //     pole[20].innerHTML === "0" &&
  //     pole[30].innerHTML === "0" &&
  //     pole[40].innerHTML === "0"
  //   ) {
  //     console.log("Победа ноликов");
  //   }
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
