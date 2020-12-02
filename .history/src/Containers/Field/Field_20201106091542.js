import React, { useState } from "react";
import classes from "./Field.module.css";

export default function Field() {
  const styles = {
    btn: {
      fontSize: 40,
      color: "white",
    },
  };

  //let gameField = [];

  const [fildValue1, setState1] = useState("");

  function setCross1() {
    setState1("X");
  }

  function setZero1() {
    setState1("O");
  }
  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
  }
  const [fildValue3, setState3] = useState("");

  function setCross3() {
    setState3("X");
  }

  function setZero3() {
    setState3("O");
  }
  const [fildValue4, setState4] = useState("");

  function setCross4() {
    setState4("X");
  }

  function setZero4() {
    setState4("O");
  }
  const [fildValue5, setState5] = useState("");

  function setCross5() {
    setState5("X");
  }

  function setZero5() {
    setState5("O");
  }
  const [fildValue6, setState6] = useState("");

  function setCross6() {
    setState6("X");
  }

  function setZero6() {
    setState6("O");
  }
  const [fildValue7, setState7] = useState("");

  function setCross7() {
    setState7("X");
  }

  function setZero7() {
    setState7("O");
  }
  const [fildValue8, setState8] = useState("");

  function setCross8() {
    setState8("X");
  }

  function setZero8() {
    setState8("O");
  }
  const [fildValue9, setState9] = useState("");

  function setCross9() {
    setState9("X");
  }

  function setZero9() {
    setState9("O");
  }
  const [fildValue10, setState10] = useState("");

  function setCross10() {
    setState10("X");
  }

  function setZero10() {
    setState10("O");
  }
  const [fildValue11, setState11] = useState("");

  function setCross11() {
    setState11("X");
  }

  function setZero11() {
    setState11("O");
  }
  const [fildValue12, setState12] = useState("");

  function setCross12() {
    setState12("X");
  }

  function setZero12() {
    setState2("O");
  }
  const [fildValue13, setState13] = useState("");

  function setCross13() {
    setState13("X");
  }

  function setZero13() {
    setState13("O");
  }
  const [fildValue14, setState14] = useState("");

  function setCross14() {
    setState14("X");
  }

  function setZero14() {
    setState14("O");
  }
  const [fildValue15, setState15] = useState("");

  function setCross15() {
    setState15("X");
  }

  function setZero15() {
    setState15("O");
  }
  const [fildValue16, setState16] = useState("");

  function setCross16() {
    setState16("X");
  }

  function setZero16() {
    setState16("O");
  }
  const [fildValue17, setState17] = useState("");

  function setCross17() {
    setState17("X");
  }

  function setZero17() {
    setState17("O");
  }
  const [fildValue18, setState18] = useState("");

  function setCross18() {
    setState18("X");
  }

  function setZero18() {
    setState18("O");
  }
  const [fildValue19, setState19] = useState("");

  function setCross19() {
    setState19("X");
  }

  function setZero19() {
    setState19("O");
  }
  const [fildValue20, setState20] = useState("");

  function setCross20() {
    setState20("X");
  }

  function setZero20() {
    setState20("O");
  }

  return (
    <div className={classes.Field}>
      <table className={classes.table}>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross11}
              onContextMenu={setZero11}
              style={styles.btn}
            >
              {fildValue11}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross12}
              onContextMenu={setZero12}
              style={styles.btn}
            >
              {fildValue12}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross13}
              onContextMenu={setZero13}
              style={styles.btn}
            >
              {fildValue13}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross14}
              onContextMenu={setZero14}
              style={styles.btn}
            >
              {fildValue14}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross15}
              onContextMenu={setZero15}
              style={styles.btn}
            >
              {fildValue15}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross16}
              onContextMenu={setZero16}
              style={styles.btn}
            >
              {fildValue16}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross17}
              onContextMenu={setZero17}
              style={styles.btn}
            >
              {fildValue17}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross18}
              onContextMenu={setZero18}
              style={styles.btn}
            >
              {fildValue18}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross19}
              onContextMenu={setZero19}
              style={styles.btn}
            >
              {fildValue19}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross20}
              onContextMenu={setZero20}
              style={styles.btn}
            >
              {fildValue20}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross1}
              onContextMenu={setZero1}
              style={styles.btn}
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
              style={styles.btn}
            >
              {fildValue2}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
              style={styles.btn}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
              style={styles.btn}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
              style={styles.btn}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
              style={styles.btn}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
              style={styles.btn}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
              style={styles.btn}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
              style={styles.btn}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
              style={styles.btn}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
