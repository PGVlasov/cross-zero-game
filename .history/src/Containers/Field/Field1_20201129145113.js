import React from "react";
import classes from "./Field1.module.css";

class Field1 extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    // // Привязка необходима, чтобы сделать this доступным в коллбэке
    // this.onSetCross = this.onSetCross.bind(this);
    // this.onSetZero = this.onSetZero.bind(this);
    const node = this.myRef.current;
    console.log(node);
  }

  //   onSetCross() {}

  //   onSetZero() {}

  render() {
    return (
      <div className={classes.conteiner}>
        <div className={classes.area} ref={this.myRef}>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>9</div>
          <div className={classes.table}>10</div>
          <div className={classes.table}>1</div>
          <div className={classes.table}>2</div>
          <div className={classes.table}>3</div>
          <div className={classes.table}>4</div>
          <div className={classes.table}>5</div>
          <div className={classes.table}>6</div>
          <div className={classes.table}>8</div>
          <div className={classes.table}>99</div>
          <div className={classes.table}>100</div>
        </div>
      </div>
    );
  }
}

export default Field1;
