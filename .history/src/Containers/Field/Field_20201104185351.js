import React from "react";
import classes from "./Field.module.css";

export default function Field() {
  let gameField = [];
  return (
    <div>
      <table className={classes.table}>
        <tr>
          <td>
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
            <button
              id="id_8"
              onclick="foo_8()"
              className={classes.button}
            ></button>
          </td>

          <td>
            <button onclick="foo_9()" className={classes.button}></button>
          </td>
        </tr>
      </table>
    </div>
  );
}
