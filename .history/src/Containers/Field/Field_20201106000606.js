import React, { useState } from "react";
import classes from "./Field.module.css";

export default function Field() {
  const [fildValue1, setState1] = useState("");

  //let gameField = [];

  function setCross() {
    setState1("X");
  }

  function setZero() {
    setState1("O");
  }

  return (
    <div className={classes.Field}>
      <table className={classes.table}>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onContextMenu={setZero}
            >
              {fildValue1}
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
      </table>
    </div>
  );
}
