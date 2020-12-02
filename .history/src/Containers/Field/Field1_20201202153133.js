import React from "react";
import classes from "./Field1.module.css";
let move = 0;

// function checkValue() {
//   const boxes = document.getElementById("pole");
//   console.log(boxes);
// }

// class Field1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();

//     this.onSetValue = this.onSetValue.bind(this);
//   }

function Field1(props) {
  const boxes = document.getElementById("pole");
  console.log(boxes);
  //   boxes.addEventListener("click", function (event) {
  //     if (move % 2 === 0) {
  //       event.target.innerHTML = "X";
  //     } else {
  //       event.target.innerHTML = "0";
  //     }

  // move++;
  //checkValue();
  // if (event.target.innerHTML === "X") {
  //   alert("Поле затято");
  // }
  // console.log(event);
  // console.log(event.target.innerHTML);
  //ref={this.myRef}
  //   });

  return (
    <div className={classes.conteiner}>
      <div className={classes.area} onClick={this.onSetValue}>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>{" "}
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>{" "}
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>{" "}
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>{" "}
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>{" "}
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>{" "}
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>{" "}
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
        <div className={classes.table} id={"pole"}></div>
      </div>
    </div>
  );
}

export default Field1;
