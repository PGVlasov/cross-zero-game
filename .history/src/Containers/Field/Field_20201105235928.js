import React, { useState } from "react";
import classes from "./Field.module.css";

export default function Field() {
  const [fildValue, setState] = useState("");

  //let gameField = [];

  function setCross() {
    setState("X");
  }

  function setZero() {
    setState("O");
  }

  return (
    <div className={classes.Field}>
      <table className={classes.table}>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onDoubleClick={setZero}
            >
              {fildValue}
            </button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>
          <td className={classes.td}>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>
      </table>
    </div>
  );
}
