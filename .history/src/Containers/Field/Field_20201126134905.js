import React, { useState, useRef } from "react";
import classes from "./Field.module.css";
import ReactDOM from "react-dom";

export default function Field() {
  const styles = {
    btn: {
      fontSize: 40,
      color: "white",
    },
  };

  const gameField = [];

  const [fildValue1, setState1] = useState("");

  function setCross1() {
    setState1("X");
  }

  function setZero1() {
    setState1("O");
    // console.log(myRef1.current.toString);
  }

  const [fildValue2, setState2] = useState("");

  function setCross2() {
    setState2("X");
  }

  function setZero2() {
    setState2("O");
  }

  //   if (fildValue2 !== "") {
  //     gameField.push(fildValue2);
  //   }

  //   console.log(gameField);

  const [fildValue3, setState3] = useState("");

  function setCross3() {
    setState3("X");
  }

  function setZero3() {
    setState3("O");
  }

  //   if (fildValue3 !== "") {
  //     gameField.push(fildValue3);
  //   }

  const [fildValue4, setState4] = useState("");

  function setCross4() {
    setState4("X");
  }

  function setZero4() {
    setState4("O");
  }
  //   if (fildValue4 !== "") {
  //     gameField.push(fildValue4);
  //   }

  const [fildValue5, setState5] = useState("");

  function setCross5() {
    setState5("X");
  }

  function setZero5() {
    setState5("O");
  }

  //   if (fildValue5 !== "") {
  //     gameField.push(fildValue5);
  //   }

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
  const [fildValue11, setState11] = useState("");

  function setCross11() {
    setState11("X");
  }

  function setZero11() {
    setState11("O");
  }
  const [fildValue12, setState12] = useState("");

  function setCross12() {
    setState12("X");
  }

  function setZero12() {
    setState12("O");
  }
  const [fildValue13, setState13] = useState("");

  function setCross13() {
    setState13("X");
  }

  function setZero13() {
    setState13("O");
  }
  const [fildValue14, setState14] = useState("");

  function setCross14() {
    setState14("X");
  }

  function setZero14() {
    setState14("O");
  }
  const [fildValue15, setState15] = useState("");

  function setCross15() {
    setState15("X");
  }

  function setZero15() {
    setState15("O");
  }
  const [fildValue16, setState16] = useState("");

  function setCross16() {
    setState16("X");
  }

  function setZero16() {
    setState16("O");
  }
  const [fildValue17, setState17] = useState("");

  function setCross17() {
    setState17("X");
  }

  function setZero17() {
    setState17("O");
  }
  const [fildValue18, setState18] = useState("");

  function setCross18() {
    setState18("X");
  }

  function setZero18() {
    setState18("O");
  }
  const [fildValue19, setState19] = useState("");

  function setCross19() {
    setState19("X");
  }

  function setZero19() {
    setState19("O");
  }
  const [fildValue20, setState20] = useState("");

  function setCross20() {
    setState20("X");
  }

  function setZero20() {
    setState20("O");
  }
  const [fildValue21, setState21] = useState("");

  function setCross21() {
    setState21("X");
  }

  function setZero21() {
    setState21("O");
  }
  const [fildValue22, setState22] = useState("");

  function setCross22() {
    setState22("X");
  }

  function setZero22() {
    setState22("O");
  }
  const [fildValue23, setState23] = useState("");

  function setCross23() {
    setState23("X");
  }

  function setZero23() {
    setState23("O");
  }
  const [fildValue24, setState24] = useState("");

  function setCross24() {
    setState24("X");
  }

  function setZero24() {
    setState24("O");
  }
  const [fildValue25, setState25] = useState("");

  function setCross25() {
    setState25("X");
  }

  function setZero25() {
    setState25("O");
  }
  const [fildValue26, setState26] = useState("");

  function setCross26() {
    setState26("X");
  }

  function setZero26() {
    setState26("O");
  }
  const [fildValue27, setState27] = useState("");

  function setCross27() {
    setState27("X");
  }

  function setZero27() {
    setState27("O");
  }
  const [fildValue28, setState28] = useState("");

  function setCross28() {
    setState28("X");
  }

  function setZero28() {
    setState28("O");
  }
  const [fildValue29, setState29] = useState("");

  function setCross29() {
    setState29("X");
  }

  function setZero29() {
    setState29("O");
  }
  const [fildValue30, setState30] = useState("");

  function setCross30() {
    setState30("X");
  }

  function setZero30() {
    setState30("O");
  }
  const [fildValue31, setState31] = useState("");

  function setCross31() {
    setState31("X");
  }

  function setZero31() {
    setState31("O");
  }
  const [fildValue32, setState32] = useState("");

  function setCross32() {
    setState32("X");
  }

  function setZero32() {
    setState32("O");
  }
  const [fildValue33, setState33] = useState("");

  function setCross33() {
    setState33("X");
  }

  function setZero33() {
    setState33("O");
  }
  const [fildValue34, setState34] = useState("");

  function setCross34() {
    setState34("X");
  }

  function setZero34() {
    setState34("O");
  }
  const [fildValue35, setState35] = useState("");

  function setCross35() {
    setState35("X");
  }

  function setZero35() {
    setState35("O");
  }
  const [fildValue36, setState36] = useState("");

  function setCross36() {
    setState36("X");
  }

  function setZero36() {
    setState36("O");
  }
  const [fildValue37, setState37] = useState("");

  function setCross37() {
    setState37("X");
  }

  function setZero37() {
    setState37("O");
  }
  const [fildValue38, setState38] = useState("");

  function setCross38() {
    setState38("X");
  }

  function setZero38() {
    setState38("O");
  }
  const [fildValue39, setState39] = useState("");

  function setCross39() {
    setState39("X");
  }

  function setZero39() {
    setState39("O");
  }
  const [fildValue40, setState40] = useState("");

  function setCross40() {
    setState40("X");
  }

  function setZero40() {
    setState40("O");
  }
  const [fildValue41, setState41] = useState("");

  function setCross41() {
    setState41("X");
  }

  function setZero41() {
    setState41("O");
  }
  const [fildValue42, setState42] = useState("");

  function setCross42() {
    setState42("X");
  }

  function setZero42() {
    setState42("O");
  }
  const [fildValue43, setState43] = useState("");

  function setCross43() {
    setState43("X");
  }

  function setZero43() {
    setState43("O");
  }
  const [fildValue44, setState44] = useState("");

  function setCross44() {
    setState44("X");
  }

  function setZero44() {
    setState44("O");
  }
  const [fildValue45, setState45] = useState("");

  function setCross45() {
    setState45("X");
  }

  function setZero45() {
    setState45("O");
  }
  const [fildValue46, setState46] = useState("");

  function setCross46() {
    setState46("X");
  }

  function setZero46() {
    setState46("O");
  }
  const [fildValue47, setState47] = useState("");

  function setCross47() {
    setState47("X");
  }

  function setZero47() {
    setState47("O");
  }
  const [fildValue48, setState48] = useState("");

  function setCross48() {
    setState48("X");
  }

  function setZero48() {
    setState48("O");
  }
  const [fildValue49, setState49] = useState("");

  function setCross49() {
    setState49("X");
  }

  function setZero49() {
    setState49("O");
  }
  const [fildValue50, setState50] = useState("");

  function setCross50() {
    setState50("X");
  }

  function setZero50() {
    setState50("O");
  }
  const [fildValue51, setState51] = useState("");

  function setCross51() {
    setState51("X");
  }

  function setZero51() {
    setState51("O");
  }
  const [fildValue52, setState52] = useState("");

  function setCross52() {
    setState52("X");
  }

  function setZero52() {
    setState52("O");
  }
  const [fildValue53, setState53] = useState("");

  function setCross53() {
    setState53("X");
  }

  function setZero53() {
    setState53("O");
  }
  const [fildValue54, setState54] = useState("");

  function setCross54() {
    setState54("X");
  }

  function setZero54() {
    setState54("O");
  }
  const [fildValue55, setState55] = useState("");

  function setCross55() {
    setState55("X");
  }

  function setZero55() {
    setState55("O");
  }
  const [fildValue56, setState56] = useState("");

  function setCross56() {
    setState56("X");
  }

  function setZero56() {
    setState56("O");
  }
  const [fildValue57, setState57] = useState("");

  function setCross57() {
    setState57("X");
  }

  function setZero57() {
    setState57("O");
  }
  const [fildValue58, setState58] = useState("");

  function setCross58() {
    setState58("X");
  }

  function setZero58() {
    setState58("O");
  }
  const [fildValue59, setState59] = useState("");

  function setCross59() {
    setState59("X");
  }

  function setZero59() {
    setState59("O");
  }
  const [fildValue60, setState60] = useState("");

  function setCross60() {
    setState60("X");
  }

  function setZero60() {
    setState60("O");
  }
  const [fildValue61, setState61] = useState("");

  function setCross61() {
    setState61("X");
  }

  function setZero61() {
    setState61("O");
  }
  const [fildValue62, setState62] = useState("");

  function setCross62() {
    setState62("X");
  }

  function setZero62() {
    setState62("O");
  }
  const [fildValue63, setState63] = useState("");

  function setCross63() {
    setState63("X");
  }

  function setZero63() {
    setState63("O");
  }
  const [fildValue64, setState64] = useState("");

  function setCross64() {
    setState64("X");
  }

  function setZero64() {
    setState64("O");
  }
  const [fildValue65, setState65] = useState("");

  function setCross65() {
    setState65("X");
  }

  function setZero65() {
    setState65("O");
  }
  const [fildValue66, setState66] = useState("");

  function setCross66() {
    setState66("X");
  }

  function setZero66() {
    setState66("O");
  }
  const [fildValue67, setState67] = useState("");

  function setCross67() {
    setState67("X");
  }

  function setZero67() {
    setState67("O");
  }
  const [fildValue68, setState68] = useState("");

  function setCross68() {
    setState68("X");
  }

  function setZero68() {
    setState68("O");
  }
  const [fildValue69, setState69] = useState("");

  function setCross69() {
    setState69("X");
  }

  function setZero69() {
    setState69("O");
  }
  const [fildValue70, setState70] = useState("");

  function setCross70() {
    setState70("X");
  }

  function setZero70() {
    setState70("O");
  }
  const [fildValue71, setState71] = useState("");

  function setCross71() {
    setState71("X");
  }

  function setZero71() {
    setState71("O");
  }
  const [fildValue72, setState72] = useState("");

  function setCross72() {
    setState72("X");
  }

  function setZero72() {
    setState72("O");
  }
  const [fildValue73, setState73] = useState("");

  function setCross73() {
    setState73("X");
  }

  function setZero73() {
    setState73("O");
  }
  const [fildValue74, setState74] = useState("");

  function setCross74() {
    setState74("X");
  }

  function setZero74() {
    setState74("O");
  }
  const [fildValue75, setState75] = useState("");

  function setCross75() {
    setState75("X");
  }

  function setZero75() {
    setState75("O");
  }
  const [fildValue76, setState76] = useState("");

  function setCross76() {
    setState76("X");
  }

  function setZero76() {
    setState76("O");
  }
  const [fildValue77, setState77] = useState("");

  function setCross77() {
    setState77("X");
  }

  function setZero77() {
    setState77("O");
  }
  const [fildValue78, setState78] = useState("");

  function setCross78() {
    setState78("X");
  }

  function setZero78() {
    setState78("O");
  }
  const [fildValue79, setState79] = useState("");

  function setCross79() {
    setState79("X");
  }

  function setZero79() {
    setState79("O");
  }
  const [fildValue80, setState80] = useState("");

  function setCross80() {
    setState80("X");
  }

  function setZero80() {
    setState80("O");
  }
  const [fildValue81, setState81] = useState("");

  function setCross81() {
    setState81("X");
  }

  function setZero81() {
    setState81("O");
  }
  const [fildValue82, setState82] = useState("");

  function setCross82() {
    setState82("X");
  }

  function setZero82() {
    setState82("O");
  }
  const [fildValue83, setState83] = useState("");

  function setCross83() {
    setState83("X");
  }

  function setZero83() {
    setState83("O");
  }
  const [fildValue84, setState84] = useState("");

  function setCross84() {
    setState84("X");
  }

  function setZero84() {
    setState84("O");
  }
  const [fildValue85, setState85] = useState("");

  function setCross85() {
    setState85("X");
  }

  function setZero85() {
    setState85("O");
  }
  const [fildValue86, setState86] = useState("");

  function setCross86() {
    setState86("X");
  }

  function setZero86() {
    setState86("O");
  }
  const [fildValue87, setState87] = useState("");

  function setCross87() {
    setState87("X");
  }

  function setZero87() {
    setState87("O");
  }
  const [fildValue88, setState88] = useState("");

  function setCross88() {
    setState88("X");
  }

  function setZero88() {
    setState88("O");
  }
  const [fildValue89, setState89] = useState("");

  function setCross89() {
    setState89("X");
  }

  function setZero89() {
    setState89("O");
  }
  const [fildValue90, setState90] = useState("");

  function setCross90() {
    setState90("X");
  }

  function setZero90() {
    setState90("O");
  }
  const [fildValue91, setState91] = useState("");

  function setCross91() {
    setState91("X");
  }

  function setZero91() {
    setState91("O");
  }
  const [fildValue92, setState92] = useState("");

  function setCross92() {
    setState92("X");
  }

  function setZero92() {
    setState92("O");
  }
  const [fildValue93, setState93] = useState("");

  function setCross93() {
    setState93("X");
  }

  function setZero93() {
    setState93("O");
  }
  const [fildValue94, setState94] = useState("");

  function setCross94() {
    setState94("X");
  }

  function setZero94() {
    setState94("O");
  }
  const [fildValue95, setState95] = useState("");

  function setCross95() {
    setState95("X");
  }

  function setZero95() {
    setState95("O");
  }
  const [fildValue96, setState96] = useState("");

  function setCross96() {
    setState96("X");
  }

  function setZero96() {
    setState96("O");
  }
  const [fildValue97, setState97] = useState("");

  function setCross97() {
    setState97("X");
  }

  function setZero97() {
    setState97("O");
  }
  const [fildValue98, setState98] = useState("");

  function setCross98() {
    setState98("X");
  }

  function setZero98() {
    setState98("O");
  }
  const [fildValue99, setState99] = useState("");

  function setCross99() {
    setState99("X");
  }

  function setZero99() {
    setState99("O");
  }
  const [fildValue100, setState100] = useState("");

  function setCross100() {
    setState100("X");
  }

  function setZero100() {
    setState100("O");
  }

  return (
    <div className={classes.Field}>
      <table className={classes.table}>
        <tbody>
          <div /*ref={this.myRef}*/ onClick={setCross1}>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  //onClick={setCross1}
                  //onDoubleClick={setZero1}
                  style={styles.btn}
                >
                  {fildValue1}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  //  onClick={setCross2}
                  //  onDoubleClick={setZero2}
                  style={styles.btn}
                  //ref={gameField}
                >
                  {fildValue2}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross3}
                  onDoubleClick={setZero3}
                  style={styles.btn}
                >
                  {fildValue3}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross4}
                  onDoubleClick={setZero4}
                  style={styles.btn}
                >
                  {fildValue4}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross5}
                  onDoubleClick={setZero5}
                  style={styles.btn}
                >
                  {fildValue5}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross6}
                  onDoubleClick={setZero6}
                  style={styles.btn}
                >
                  {fildValue6}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross7}
                  onDoubleClick={setZero7}
                  style={styles.btn}
                >
                  {fildValue7}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross8}
                  onDoubleClick={setZero8}
                  style={styles.btn}
                >
                  {fildValue8}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross9}
                  onDoubleClick={setZero9}
                  style={styles.btn}
                >
                  {fildValue9}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross10}
                  onDoubleClick={setZero10}
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
                  onClick={setCross11}
                  onDoubleClick={setZero11}
                  style={styles.btn}
                  ref={gameField}
                >
                  {fildValue11}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross12}
                  onDoubleClick={setZero12}
                  style={styles.btn}
                >
                  {fildValue12}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross13}
                  onDoubleClick={setZero13}
                  style={styles.btn}
                >
                  {fildValue13}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross14}
                  onDoubleClick={setZero14}
                  style={styles.btn}
                >
                  {fildValue14}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross15}
                  onDoubleClick={setZero15}
                  style={styles.btn}
                >
                  {fildValue15}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross16}
                  onDoubleClick={setZero16}
                  style={styles.btn}
                >
                  {fildValue16}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross17}
                  onDoubleClick={setZero17}
                  style={styles.btn}
                >
                  {fildValue17}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross18}
                  onDoubleClick={setZero18}
                  style={styles.btn}
                >
                  {fildValue18}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross19}
                  onDoubleClick={setZero19}
                  style={styles.btn}
                >
                  {fildValue19}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross20}
                  onDoubleClick={setZero20}
                  style={styles.btn}
                >
                  {fildValue20}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross21}
                  onContextMenu={setZero21}
                  style={styles.btn}
                >
                  {fildValue21}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross22}
                  onContextMenu={setZero22}
                  style={styles.btn}
                >
                  {fildValue22}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross23}
                  onContextMenu={setZero23}
                  style={styles.btn}
                >
                  {fildValue23}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross24}
                  onContextMenu={setZero24}
                  style={styles.btn}
                >
                  {fildValue24}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross25}
                  onContextMenu={setZero25}
                  style={styles.btn}
                >
                  {fildValue25}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross26}
                  onContextMenu={setZero26}
                  style={styles.btn}
                >
                  {fildValue26}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross27}
                  onContextMenu={setZero27}
                  style={styles.btn}
                >
                  {fildValue27}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross28}
                  onContextMenu={setZero28}
                  style={styles.btn}
                >
                  {fildValue28}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross29}
                  onContextMenu={setZero29}
                  style={styles.btn}
                >
                  {fildValue29}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross30}
                  onContextMenu={setZero30}
                  style={styles.btn}
                >
                  {fildValue30}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross31}
                  onContextMenu={setZero31}
                  style={styles.btn}
                >
                  {fildValue31}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross32}
                  onContextMenu={setZero32}
                  style={styles.btn}
                >
                  {fildValue32}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross33}
                  onContextMenu={setZero33}
                  style={styles.btn}
                >
                  {fildValue33}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross34}
                  onContextMenu={setZero34}
                  style={styles.btn}
                >
                  {fildValue34}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross35}
                  onContextMenu={setZero35}
                  style={styles.btn}
                >
                  {fildValue35}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross36}
                  onContextMenu={setZero36}
                  style={styles.btn}
                >
                  {fildValue36}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross37}
                  onContextMenu={setZero37}
                  style={styles.btn}
                >
                  {fildValue37}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross38}
                  onContextMenu={setZero38}
                  style={styles.btn}
                >
                  {fildValue38}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross39}
                  onContextMenu={setZero39}
                  style={styles.btn}
                >
                  {fildValue39}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross40}
                  onContextMenu={setZero40}
                  style={styles.btn}
                >
                  {fildValue40}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross41}
                  onContextMenu={setZero41}
                  style={styles.btn}
                >
                  {fildValue41}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross42}
                  onContextMenu={setZero42}
                  style={styles.btn}
                >
                  {fildValue42}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross43}
                  onContextMenu={setZero43}
                  style={styles.btn}
                >
                  {fildValue43}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross44}
                  onContextMenu={setZero44}
                  style={styles.btn}
                >
                  {fildValue44}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross45}
                  onContextMenu={setZero45}
                  style={styles.btn}
                >
                  {fildValue45}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross46}
                  onContextMenu={setZero46}
                  style={styles.btn}
                >
                  {fildValue46}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross47}
                  onContextMenu={setZero47}
                  style={styles.btn}
                >
                  {fildValue47}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross48}
                  onContextMenu={setZero48}
                  style={styles.btn}
                >
                  {fildValue48}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross49}
                  onContextMenu={setZero49}
                  style={styles.btn}
                >
                  {fildValue49}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross50}
                  onContextMenu={setZero50}
                  style={styles.btn}
                >
                  {fildValue50}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross51}
                  onContextMenu={setZero51}
                  style={styles.btn}
                >
                  {fildValue51}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross52}
                  onContextMenu={setZero52}
                  style={styles.btn}
                >
                  {fildValue52}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross53}
                  onContextMenu={setZero53}
                  style={styles.btn}
                >
                  {fildValue53}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross54}
                  onContextMenu={setZero54}
                  style={styles.btn}
                >
                  {fildValue54}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross55}
                  onContextMenu={setZero55}
                  style={styles.btn}
                >
                  {fildValue55}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross56}
                  onContextMenu={setZero56}
                  style={styles.btn}
                >
                  {fildValue56}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross57}
                  onContextMenu={setZero57}
                  style={styles.btn}
                >
                  {fildValue57}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross58}
                  onContextMenu={setZero58}
                  style={styles.btn}
                >
                  {fildValue58}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross59}
                  onContextMenu={setZero59}
                  style={styles.btn}
                >
                  {fildValue59}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross60}
                  onContextMenu={setZero60}
                  style={styles.btn}
                >
                  {fildValue60}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross61}
                  onContextMenu={setZero61}
                  style={styles.btn}
                >
                  {fildValue61}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross62}
                  onContextMenu={setZero62}
                  style={styles.btn}
                >
                  {fildValue62}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross63}
                  onContextMenu={setZero63}
                  style={styles.btn}
                >
                  {fildValue63}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross64}
                  onContextMenu={setZero64}
                  style={styles.btn}
                >
                  {fildValue64}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross65}
                  onContextMenu={setZero65}
                  style={styles.btn}
                >
                  {fildValue65}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross66}
                  onContextMenu={setZero66}
                  style={styles.btn}
                >
                  {fildValue66}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross67}
                  onContextMenu={setZero67}
                  style={styles.btn}
                >
                  {fildValue67}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross68}
                  onContextMenu={setZero68}
                  style={styles.btn}
                >
                  {fildValue68}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross69}
                  onContextMenu={setZero69}
                  style={styles.btn}
                >
                  {fildValue69}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross70}
                  onContextMenu={setZero70}
                  style={styles.btn}
                >
                  {fildValue70}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross71}
                  onContextMenu={setZero71}
                  style={styles.btn}
                >
                  {fildValue71}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross72}
                  onContextMenu={setZero72}
                  style={styles.btn}
                >
                  {fildValue72}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross73}
                  onContextMenu={setZero73}
                  style={styles.btn}
                >
                  {fildValue73}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross74}
                  onContextMenu={setZero74}
                  style={styles.btn}
                >
                  {fildValue74}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross75}
                  onContextMenu={setZero75}
                  style={styles.btn}
                >
                  {fildValue75}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross76}
                  onContextMenu={setZero76}
                  style={styles.btn}
                >
                  {fildValue76}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross77}
                  onContextMenu={setZero77}
                  style={styles.btn}
                >
                  {fildValue77}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross78}
                  onContextMenu={setZero78}
                  style={styles.btn}
                >
                  {fildValue78}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross79}
                  onContextMenu={setZero79}
                  style={styles.btn}
                >
                  {fildValue79}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross80}
                  onContextMenu={setZero80}
                  style={styles.btn}
                >
                  {fildValue80}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross81}
                  onContextMenu={setZero81}
                  style={styles.btn}
                >
                  {fildValue81}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross82}
                  onContextMenu={setZero82}
                  style={styles.btn}
                >
                  {fildValue82}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross83}
                  onContextMenu={setZero83}
                  style={styles.btn}
                >
                  {fildValue83}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross84}
                  onContextMenu={setZero84}
                  style={styles.btn}
                >
                  {fildValue84}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross85}
                  onContextMenu={setZero85}
                  style={styles.btn}
                >
                  {fildValue85}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross86}
                  onContextMenu={setZero86}
                  style={styles.btn}
                >
                  {fildValue86}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross87}
                  onContextMenu={setZero87}
                  style={styles.btn}
                >
                  {fildValue87}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross88}
                  onContextMenu={setZero88}
                  style={styles.btn}
                >
                  {fildValue88}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross89}
                  onContextMenu={setZero89}
                  style={styles.btn}
                >
                  {fildValue89}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross90}
                  onContextMenu={setZero90}
                  style={styles.btn}
                >
                  {fildValue90}
                </button>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross91}
                  onContextMenu={setZero91}
                  style={styles.btn}
                >
                  {fildValue91}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross92}
                  onContextMenu={setZero92}
                  style={styles.btn}
                >
                  {fildValue92}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross93}
                  onContextMenu={setZero93}
                  style={styles.btn}
                >
                  {fildValue93}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross94}
                  onContextMenu={setZero94}
                  style={styles.btn}
                >
                  {fildValue94}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross95}
                  onContextMenu={setZero95}
                  style={styles.btn}
                >
                  {fildValue95}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross96}
                  onContextMenu={setZero96}
                  style={styles.btn}
                >
                  {fildValue96}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross97}
                  onContextMenu={setZero97}
                  style={styles.btn}
                >
                  {fildValue97}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross98}
                  onContextMenu={setZero98}
                  style={styles.btn}
                >
                  {fildValue98}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross99}
                  onContextMenu={setZero99}
                  style={styles.btn}
                >
                  {fildValue99}
                </button>
              </td>
              <td className={classes.td}>
                <button
                  className={classes.button}
                  onClick={setCross100}
                  onContextMenu={setZero100}
                  style={styles.btn}
                >
                  {fildValue100}
                </button>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  );
}
