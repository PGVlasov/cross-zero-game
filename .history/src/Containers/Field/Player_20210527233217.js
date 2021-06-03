import React, { Component } from "react";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import classes from "./Player.module.css";
import { createControl } from "../../form/formFramework";
import photo from "../../images/photo.jpeg";
import { number } from "is_js";

export default class Players extends Component {
  state = {
    formControls: {
      email: createControl(
        {
          label: "введите email",
          errorMessage: "email не может быть пустым",
        },
        { required: true }
      ),
      name: createControl(
        {
          label: "введите имя",
          errorMessage: "значение не может быть пустым",
        },
        { required: true }
      ),
      avatarUrl: String,
      age: number,
      sex: String,
    },
  };

  editUser = () => {
    let user = "";
    return user;
  };

  submitHeandler = (event) => {
    event.preventDefault();
  };

  addAvatar = () => {};

  saveAvatar = () => {};

  saveUser = () => {};

  render() {
    return (
      <div className={classes.Player}>
        <h1>Профиль</h1>
        <div className={classes.PlayerPhoto}>
          <img className="avatar" src={photo} alt="Аватара нет"></img>
        </div>
        <Button type="primary" onClick={this.addAvatar}>
          Добавить фотографию
        </Button>
        <div className={classes.PlayerForm}>
          <p>
            Ваше email: <strong>{"user.email"}</strong>
          </p>

          <p>
            Ваше имя: <strong>{`user.name`}</strong>
          </p>
          <p>
            Ваше пол: <strong>{`user.sex`}</strong>
          </p>
          <p>
            Ваше возраст: <strong>{`user.age`}</strong>
          </p>
          <hr />
          <div className={classes.editPlayer}>
            <form onSubmit={this.submitHeandler}>
              <Button type="primary" onClick={this.editUser}>
                Редактировать профиль
              </Button>
              <p>Введите ваш email:</p>
              <input type="email"></input>
              <p>Введите ваше имя:</p>
              <input type="text"></input>
              <p>
                Выберите свой пол
                <input type="text"></input>
                <select></select>
              </p>
              <p>Введите ваш возраст:</p>
              <input type="number"></input>
              <Button type="primary" onClick={this.saveUser}>
                Сохранить профиль
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
