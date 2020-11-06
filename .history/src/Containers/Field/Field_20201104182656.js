import React from "react";

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
            <button id="id_2" onclick="foo_2()" class="block"></button>
          </td>

          <td>
            <button id="id_3" onclick="foo_3()" class="block"></button>
          </td>
        </tr>

        <tr>
          <td>
            <button id="id_4" onclick="foo_4()" class="block"></button>
          </td>

          <td>
            <button id="id_5" onclick="foo_5()" class="block"></button>
          </td>

          <td>
            <button id="id_6" onclick="foo_6()" class="block"></button>
          </td>
        </tr>

        <tr>
          <td>
            <button id="id_7" onclick="foo_7()" class="block"></button>
          </td>

          <td>
            <button id="id_8" onclick="foo_8()" class="block"></button>
          </td>

          <td>
            <button id="id_9" onclick="foo_9()" class="block"></button>
          </td>
        </tr>
      </table>
    </div>
  );
}
