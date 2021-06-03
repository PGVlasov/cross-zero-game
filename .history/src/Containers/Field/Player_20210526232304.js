import React, { Component } from "react";
import Button from "../../components/UI/Button/Button.js";
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

  addAvatar = () => {};

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
          <div className={classes.PlayerForm}>
            <form
              action="/profile"
              method="POST"
              enctype="multipart/form-data"
            />
            <p>
              Ваше email: <strong>{"{user.email}"}</strong>
            </p>
          </div>
          <div className={classes.PlayerForm}>
            <label for="name">Ваше имя</label>
            <span className="helper-text" data-error="Имя не может быть пустым">
              ${"username"}
            </span>
            <div>
              <Button type="primary" onClick={this.registerHeandler}>
                Редактировать Профиль
              </Button>
            </div>
          </div>
        </div>
        {/* 
         
    

        <div className="col s6">
          <form action="/profile" method="POST" enctype="multipart/form-data"/>
            <p>Ваше email: <strong>{{user.email}}</strong></p>
         </div>
            <div className="input-field">
              <input id="name" name="name" type="text" className="validate"  value="{{user.name}}">
              <label for="name">Ваше имя</label>
              <span className="helper-text" data-error="Имя не может быть пустым"></span>
            </div>

            <div className="file-field input-field">
              <div className="btn">
                <span>Аватар</span>
                <input type="file" name="avatar">
                </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text">
              </div>
            </div>

            <input type="hidden" name="_csrf" value="{{csrf}}">

            <button type="submit" className="btn">Изменить</button>
        </div>
        </div>
      </div>> */}
      </div>
    );
  }
}
