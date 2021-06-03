import React, { Component } from "react";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import classes from "./Player.module.css";
import photo from "../../images/photo.jpeg";

export default class Players extends Component {
  state = {
    email: {
      type: String,
      required: true,
    },
    name: String,
    password: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    resetToken: String,
    resetTokenExp: Date,
  };
  edituser = () => {
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
        <div className={classes.PlayerForm}>
          <Button type="primary" onClick={this.addAvatar}>
            Добавить фотографию
          </Button>
          <Button type="primary" onClick={this.saveAvatar}>
            Сохранить фотографию
          </Button>

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
              <Button type="primary" onClick={this.edituser}>
                Редактировать профиль
              </Button>
              <input type="email"></input>
              <input type="text"></input>
              <input type="text"></input>
              <select></select>
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
