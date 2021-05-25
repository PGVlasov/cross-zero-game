import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div className={cls.join("")}>
      <label htmlFor=""></label>{" "}
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.errorMessage || "Введите правильное значение"}</span>
    </div>
  );
};

// function isInvalid({ valid, touched, shouldValidate }) {
//   return !valid && shouldValidate && touched;
// }

// const Input = (props) => {
//   const inputType = props.type || "text";
//   const cls = [classes.Input];
//   const htmlFor = `${inputType}-${Math.random()}`;

//   if (isInvalid(props)) {
//     cls.push(classes.invalid);
//   }

//   return (
//     <div className={cls.join(" ")}>
//       <label htmlFor={htmlFor}>{props.label}</label>
//       <input
//         type={inputType}
//         id={htmlFor}
//         value={props.value}
//         onChange={props.onChange}
//       ></input>
//       {isInvalid(props) ? (
//         <span>{props.errorMessage || "Введите правильное значение"}</span>
//       ) : null}
//     </div>
//   );
// };

// export default Input;
