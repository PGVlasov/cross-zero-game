import React, { Component } from "react";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import classes from "./Player.module.css";
import Auxillary from "../../hoc/Auxillary/Auxillary.js";
import Select from "../../components/UI/Select/Select.js";
import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFramework";
import photo from "../../images/photo.jpeg";
import { number } from "is_js";
import { range } from "lodash";

function createOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    name: createControl(
      {
        label: "Введите имя",
        errorMessage: "Имя не может быть пустым",
      },
      { required: true }
    ),
    www: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

export default class Players extends Component {
  state = {
    player: [],
    gender: "",
    editButtomClicked: false,
    isFormValid: false,
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
          validation: {
            minLenght: 6,
            errorMessage: "Название города не иожет быть менее 2 символов",
          },
        },
        { required: true }
      ),
    },
  };

  editUser = (event) => {
    event.preventDefault();
    console.log("you can edit your profile");
    this.setState({
      editButtomClicked: true,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addAvatar = () => {};
  showRange = () => {
    let range = 2;
    return range;
  };
  saveUser = (event) => {
    event.preventDefault();
    const player = this.state.player.concat();
    const index = player.length + 1;

    const { name, age, adress } = this.state.formControls;

    let playerItem = {
      person: name.value,
      id: index,
    };

    this.setState({
      editButtomClicked: false,
    });
  };
  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;
    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  selectChangeHeandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Auxillary key={controlName + index}>
          <Input
            label={control.label}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
        </Auxillary>
      );
    });
  }

  render() {
    const select = (
      <Select
        label="Выберите свой пол"
        value={this.state.gender}
        onChange={this.selectChangeHeandler}
        options={[{ text: "мужчина" }, { text: "женщина" }]}
      />
    );
    console.log(this.state.editButtomClicked);
    if (this.state.editButtomClicked) {
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
              Город: <strong>{`user.adress`}</strong>
            </p>
            <hr />
            <div className={classes.editPlayer}>
              <form onSubmit={this.submitHandler}>
                <Button type="primary" onClick={this.editUser}>
                  Редактировать профиль
                </Button>
              </form>
              <div>
                <form disabled={!this.state.editButtomClicked}>
                  {this.renderControls()}
                  <p>{select}</p>
                  <Button
                    type="success"
                    onClick={this.saveUser}
                    disabled={!this.state.isFormValid}
                  >
                    Сохранить профиль
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
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
              Город: <strong>{`user.adress`}</strong>
            </p>
            <hr />
            <div className={classes.editPlayer}>
              <form onSubmit={this.submitHandler}>
                <Button type="primary" onClick={this.editUser}>
                  Редактировать профиль
                </Button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}
