import React, { Component } from "react";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import classes from "./Player.module.css";
import Auxillary from "../../hoc/Auxillary/Auxillary.js";
import Select from "../../components/UI/Select/Select.js";
import { createControl } from "../../form/formFramework";
import photo from "../../images/photo.jpeg";
import { number } from "is_js";
import { range } from "lodash";
import { matchesSelector } from "sizzle";

export default class Players extends Component {
  state = {
    gender: "male",
    formControls: {
      name: createControl(
        {
          label: "введите имя",
          errorMessage: "значение не может быть пустым",
        },
        { required: true }
      ),
      age: createControl(
        {
          label: "введите возраст",
          type: number,
          errorMessage: "значение не может быть пустым",
        },
        { required: true }
      ),

      adress: createControl(
        {
          label: "введите город",
          type: String,
          errorMessage: "значение не может быть пустым",
        },
        { required: true }
      ),
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
  showRange = () => {
    let range = 2;
    return range;
  };
  saveUser = () => {};
  onChangeHandler = (value, controlName) => {};

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Auxillary key={controlName + Math.random()}>
          <Input
            label={control.label}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            shouldValidate={!!control.validation}
            errorMassage={control.errorMassage}
            onChange={(event) =>
              this.onChangeHandler(event.target.value, controlName)
            }
          />
        </Auxillary>
      );
    });
  }

  render() {
    const select = <Select label="Выберите свой пол" value="" />;
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
          <h3>Игрок</h3>
          <p>Рейтинг (количество побед): {this.showRange(range)}</p>
          <p>
            Email: <strong>{"user.email"}</strong>
          </p>

          <p>
            Имя: <strong>{`user.name`}</strong>
          </p>
          <p>
            Ваше возраст: <strong>{`user.age`}</strong>
          </p>
          <p>
            Пол: <strong>{`user.sex`}</strong>
          </p>
          <p>
            Город: <strong>{`user.sex`}</strong>
          </p>
          <hr />
          <div className={classes.editPlayer}>
            <form onSubmit={this.submitHeandler}>
              <Button type="primary" onClick={this.editUser}>
                Редактировать профиль
              </Button>
              {this.renderControls()}
              <p>
                Выберите свой пол
                <input type="text"></input>
                <select></select>
              </p>
              <Button type="success" onClick={this.saveUser}>
                Сохранить профиль
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
