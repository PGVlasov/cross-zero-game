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
    [5, 15, 25, 35, 45],
    [6, 16, 26, 36, 46],
    [7, 17, 27, 37, 47],
    [8, 18, 28, 38, 48],
    [9, 19, 29, 39, 49],
    [10, 20, 30, 40, 50],
    [51, 11, 21, 31, 41],
    [52, 12, 22, 32, 42],
    [53, 13, 23, 33, 43],
    [54, 14, 24, 34, 44],
    [55, 15, 25, 35, 45],
    [56, 16, 26, 36, 46],
    [57, 17, 27, 37, 47],
    [58, 18, 28, 38, 48],
    [59, 19, 29, 39, 49],
    [60, 50, 20, 30, 40],
    [61, 51, 21, 31, 41],
    [62, 52, 22, 32, 42],
    [63, 53, 23, 33, 43],
    [64, 54, 24, 34, 44],
    [65, 55, 25, 35, 45],
    [66, 56, 26, 36, 46],
    [67, 57, 27, 37, 47],
    [68, 58, 28, 38, 48],
    [69, 59, 29, 39, 49],
    [70, 60, 60, 30, 40],
    [71, 61, 51, 31, 41],
    [72, 62, 52, 32, 42],
    [73, 63, 53, 33, 43],
    [74, 74, 54, 34, 44],
    [75, 65, 55, 35, 45],
    [76, 66, 56, 36, 46],
    [78, 68, 58, 38, 48],
    [79, 69, 59, 39, 49],
    [80, 70, 60, 50, 40],
    [81, 71, 61, 51, 41],
    [82, 72, 62, 52, 42],
    [83, 73, 63, 53, 43],
    [84, 74, 64, 54, 44],
    [85, 75, 65, 55, 45],
    [86, 76, 66, 56, 46],
    [88, 78, 68, 58, 48],
    [89, 79, 69, 59, 49],
    [90, 80, 70, 60, 50],
    [91, 81, 71, 61, 51],
    [92, 82, 72, 62, 52],
    [93, 83, 73, 63, 53],
    [94, 84, 74, 64, 54],
    [95, 85, 75, 65, 55],
    [96, 86, 76, 66, 56],
    [98, 88, 78, 68, 58],
    [99, 89, 79, 69, 59],
  ];

  for (i = 0; i < arr.length; i++) {
    if (
      pole[arr[i][0]].innerHTML === "X" &&
      pole[arr[i][1]].innerHTML === "X" &&
      pole[arr[i][2]].innerHTML === "X" &&
      pole[arr[i][3]].innerHTML === "X" &&
      pole[arr[i][4]].innerHTML === "X"
    ) {
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
