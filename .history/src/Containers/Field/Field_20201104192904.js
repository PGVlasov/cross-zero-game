import React from "react";
import classes from "./Field.module.css";

export default function Field() {
  let gameField = [];
  return (
    <div className={classes.Field}>
      <table className={classes.table}>
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

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>

        <tr>
          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button i className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>
        </tr>

        <tr>
          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button className={classes.button}></button>
          </td>

          <td>
            <button onclick="foo_9()" className={classes.button}></button>
          </td>
        </tr>
      </table>
    </div>
  );
}
