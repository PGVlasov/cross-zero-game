import React, { useState } from "react";
import classes from "./Field.module.css";

export default function Field() {
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
    setState2("X");
  }

  function setZero3() {
    setState2("O");
  }
  const [fildValue4, setState4] = useState("");

  function setCross4() {
    setState2("X");
  }

  function setZero4() {
    setState2("O");
  }
  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
  }
  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
  }
  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
  }
  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
  }
  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
  }
  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
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
            >
              {fildValue1}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross2}
              onContextMenu={setZero2}
            >
              {fildValue2}
            </button>
          </td>
          /*{" "}
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross3}
              onContextMenu={setZero3}
            >
              {fildValue3}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross4}
              onContextMenu={setZero4}
            >
              {fildValue4}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross5}
              onContextMenu={setZero5}
            >
              {fildValue5}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross6}
              onContextMenu={setZero6}
            >
              {fildValue6}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross7}
              onContextMenu={setZero7}
            >
              {fildValue7}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross8}
              onContextMenu={setZero8}
            >
              {fildValue8}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross9}
              onContextMenu={setZero9}
            >
              {fildValue9}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross10}
              onContextMenu={setZero10}
            >
              {fildValue10}
            </button>
          </td>
        </tr>
        {/* <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>

          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue}
            </button>
          </td>
        </tr> */}
      </table>
    </div>
  );
}
