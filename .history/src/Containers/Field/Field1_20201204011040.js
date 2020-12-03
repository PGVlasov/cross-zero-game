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
    [0, 1, 2, 3, 4],
    [5, 1, 2, 3, 4],
    [5, 6, 2, 3, 4],
    [5, 6, 7, 3, 4],
    [5, 6, 7, 8, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 11, 12, 13, 14],
    [15, 16, 12, 13, 14],
    [15, 16, 17, 13, 14],
    [15, 16, 17, 18, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [25, 21, 22, 23, 24],
    [25, 26, 22, 23, 24],
    [25, 26, 27, 23, 24],
    [25, 26, 27, 28, 24],
    [25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34],
    [35, 31, 32, 33, 34],
    [35, 36, 32, 33, 34],
    [35, 36, 37, 33, 34],
    [35, 36, 37, 38, 34],
    [35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44],
    [45, 41, 42, 43, 44],
    [45, 46, 42, 43, 44],
    [45, 46, 47, 43, 44],
    [45, 46, 47, 48, 44],
    [45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54],
    [55, 51, 52, 53, 54],
    [55, 56, 52, 53, 54],
    [55, 56, 57, 53, 54],
    [55, 56, 57, 58, 54],
    [55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64],
    [65, 61, 62, 63, 64],
    [56, 66, 62, 63, 64],
    [65, 66, 67, 63, 64],
    [65, 66, 67, 68, 64],
    [65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74],
    [75, 71, 72, 73, 74],
    [75, 76, 72, 73, 74],
    [75, 76, 77, 73, 74],
    [75, 76, 77, 78, 74],
    [75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84],
    [85, 81, 82, 83, 84],
    [85, 86, 82, 83, 84],
    [85, 86, 87, 83, 84],
    [85, 86, 87, 88, 84],
    [85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94],
    [95, 91, 92, 93, 94],
    [95, 96, 92, 93, 94],
    [95, 96, 97, 93, 94],
    [95, 96, 97, 98, 94],
    [95, 96, 97, 98, 99],
    [0, 11, 22, 33, 44],
    [10, 21, 32, 43, 54],
    [20, 31, 42, 53, 64],
    [30, 41, 52, 63, 74],
    [40, 51, 62, 73, 84],
    [50, 61, 72, 83, 94],
    [1, 12, 23, 34, 45],
    [55, 11, 22, 33, 44],
    [65, 21, 32, 43, 54],
    [75, 31, 42, 53, 64],
    [85, 41, 52, 63, 74],
    [95, 51, 62, 73, 84],
    [2, 13, 24, 35, 46],
    [12, 23, 34, 45, 56],
    [22, 33, 44, 55, 66],
    [32, 43, 54, 65, 76],
    [42, 53, 64, 75, 86],
    [52, 63, 74, 85, 95],
    [3, 14, 25, 36, 47],
    [13, 24, 35, 46, 57],
    [23, 34, 45, 56, 67],
    [33, 44, 55, 66, 77],
    [43, 54, 65, 76, 87],
    [53, 64, 75, 86, 97],
    [4, 15, 26, 37, 48],
    [14, 25, 36, 47, 58],
    [24, 35, 46, 57, 68],
    [34, 45, 56, 67, 78],
    [44, 55, 66, 77, 88],
    [54, 65, 76, 87, 98],
    [5, 16, 27, 38, 49],
    [15, 26, 37, 48, 59],
    [25, 36, 47, 58, 69],
    [35, 46, 57, 68, 79],
    [45, 56, 67, 78, 89],
    [55, 66, 77, 88, 99],
    [59, 68, 77, 66, 55],
    [49, 38, 47, 56, 65],
    [39, 48, 57, 66, 75],
    [29, 38, 47, 36, 45],
    [19, 28, 37, 46, 55],
    [9, 18, 27, 36, 45],
    [8, 17, 26, 35, 44],
    [18, 27, 36, 45, 54],
    [28, 37, 46, 55, 64],
    [38, 47, 56, 65, 74],
    [48, 57, 66, 75, 84],
    [58, 67, 76, 85, 94],
    [7, 16, 25, 34, 43],
    [17, 26, 35, 44, 53],
    [27, 36, 45, 54, 63],
    [37, 46, 55, 64, 73],
    [47, 56, 65, 74, 83],
    [57, 66, 75, 84, 93],
    [6, 15, 24, 33, 42],
    [16, 25, 34, 43, 52],
    [26, 35, 44, 53, 62],
    [36, 45, 54, 63, 72],
    [46, 55, 64, 73, 82],
    [56, 65, 74, 83, 92],
    [5, 14, 23, 32, 41],
    [15, 24, 33, 42, 51],
    [25, 34, 43, 52, 61],
    [35, 44, 53, 62, 71],
    [45, 54, 63, 72, 81],
    [55, 64, 73, 82, 91],
    [4, 13, 22, 31, 40],
    [14, 23, 32, 41, 50],
    [24, 33, 42, 51, 60],
    [34, 43, 52, 61, 70],
    [44, 53, 62, 71, 80],
    [54, 63, 72, 81, 90],
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
      Field1.location.reload();
    } else if (
      pole[arr[i][0]].innerHTML === "0" &&
      pole[arr[i][1]].innerHTML === "0" &&
      pole[arr[i][2]].innerHTML === "0" &&
      pole[arr[i][3]].innerHTML === "0" &&
      pole[arr[i][4]].innerHTML === "0"
    ) {
      console.log("Победа Ноликов");
      Field1.location.reload();
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
