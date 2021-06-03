import React, { Component } from "react";

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

  render() {
    return (
      <div></div>
      <h1>Профиль</h1>

      <div className="row">
        <div className="col s6">
          {/* {{#if user.avatarUrl}} */}
            <img
              className="avatar"
              src="/{{user.avatarUrl}}"
              alt="avatar-{{user.name}}"
            >
          {/* {{else}} */}
            <p>Аватара нет</p>
          {/* {{/if}} */}
        </div>

        <div className="col s6">
          <form action="/profile" method="POST" enctype="multipart/form-data">
            <p>Ваше email: <strong>{{user.email}}</strong></p>

            <div className="input-field">
              <input id="name" name="name" type="text" className="validate" required value="{{user.name}}">
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
          </form>
        </div>
      </div>>
    );
  }
}
