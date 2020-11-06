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
          {/* <td className={classes.td}>
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
          </td> */}
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
