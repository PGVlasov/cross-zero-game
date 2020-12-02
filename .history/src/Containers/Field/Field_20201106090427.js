import React, { useState } from "react";
import classes from "./Field.module.css";

export default function Field() {
  const styles = {
    btn: {
      fontSize: 40,
      color: "white",
    },
  };

  const [fildValue1, setState1] = useState("");

  //let gameField = [];

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
