const classes = {};
export default function CheckValue() {
  const pole = document.getElementsByClassName(classes.table);
  if (
    pole[0].innerHTML === "X" &&
    pole[10].innerHTML === "X" &&
    pole[20].innerHTML === "X" &&
    pole[30].innerHTML === "X" &&
    pole[40].innerHTML === "X"
  ) {
    console.log("Победа Крестиков");
  } else if (
    pole[0].innerHTML === "0" &&
    pole[10].innerHTML === "0" &&
    pole[20].innerHTML === "0" &&
    pole[30].innerHTML === "0" &&
    pole[40].innerHTML === "0"
  ) {
    console.log("Победа ноликов");
  }
}
