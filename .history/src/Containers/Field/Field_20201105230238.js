import React from "react";
import classes from "./Field.module.css";

export default function Field() {
  let gameField = [];
  function setSign() {}

  return (
    <div className={classes.Field}>
      <table className={classes.table}>
        <tr className={classes.tr}>
          <td className={classes.td}>
            <button
              className={classes.button}
              onClick={setCross}
              onDoubleClick={setZero}
            ></button>
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
