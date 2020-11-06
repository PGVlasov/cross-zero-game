import React from "react";
import classes from "./Field.module.css";

export default function Field() {
  let gameField = [];
  return (
    <div>
      <table className={classe.table}>
        <tr>
          <td>
            <button
              className={classes.button}
              id="id_1"
              onclick="foo_1()"
            ></button>
          </td>

          <td>
            <button
              id="id_2"
              onclick="foo_2()"
              className={classes.button}
            ></button>
          </td>

          <td>
            <button
              id="id_3"
              onclick="foo_3()"
              className={classes.button}
            ></button>
          </td>
        </tr>

        <tr>
          <td>
            <button
              id="id_4"
              onclick="foo_4()"
              className={classes.button}
            ></button>
          </td>

          <td>
            <button
              id="id_5"
              onclick="foo_5()"
              className={classes.button}
            ></button>
          </td>

          <td>
            <button
              id="id_6"
              onclick="foo_6()"
              className={classes.button}
            ></button>
          </td>
        </tr>

        <tr>
          <td>
            <button
              id="id_7"
              onclick="foo_7()"
              className={classes.button}
            ></button>
          </td>

          <td>
            <button
              id="id_8"
              onclick="foo_8()"
              className={classes.button}
            ></button>
          </td>

          <td>
            <button
              id="id_9"
              onclick="foo_9()"
              className={classes.button}
            ></button>
          </td>
        </tr>
      </table>
    </div>
  );
}
