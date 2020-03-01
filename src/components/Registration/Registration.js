import React from "react";
import "./Registration.sass";
import Input from "../UI/Input";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {formControlHandler, requestHandler} from '../../store/actions/actionRegist'
import {validControl} from '../validation/validControl'

const Registration = props => {

  function renderInputs() {
    return Object.keys(props.formInputsControl).map((nameControl, index) => {
      const control = props.formInputsControl[nameControl];

      return (
        <div className="container-inputs" key={index}>
          <Input
            placeholder={control.placeholder}
            type={control.type}
            value={control.value}
            touched={control.touched || null}
            valid={control.valid || null}
            errorMessage={control.errorMessage || null}
            shouldValidate={!!control.validation}
            onChange={event => changeHandler(event.target.value, nameControl)}
          />
        </div>
      );
    });
  }

  function changeHandler(value, nameControl) {
    const formInputsControl = { ...props.formInputsControl }; // в новый state после изменений мы будет записывать именно объект, в котором хранятся все контролы
    const control = { ...formInputsControl[nameControl] };
    

    control.value = value;
    control.touched = true;
    control.valid = validControl(value, control.validation);

    formInputsControl[nameControl] = control; // Кладем в объект контролов уже измененный контрол

    props.formControlHandler(formInputsControl)
  }

  return (
    <div className="card regist-card">
      <div className="error-message"></div>
      <h1 className="card-title">Instagram</h1>

      <div className="form">
        <form>
          <h2 className="form-title">
            Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
          </h2>

          <div className="enter-in-facebook">
            <button>Войти через Facebook</button>
          </div>

          <div className="or">
            <div className="left-line"></div>
            <div className="middle-el">или</div>
            <div className="right-line"></div>
          </div>

          {renderInputs()}

          <div className="register-button">
            <button className="register" onClick={registerHandler}>
              Регистрация
            </button>
          </div>

          <p className="info">
            Регистрируясь, вы принимаете наши Условия , Политику использования
            данных , и Политику в отношении файлов cookie .
          </p>
        </form>
      </div>
      <Link to="/login/acounts" className="link-to-auth">
        Войти
      </Link>
    </div>
  );

  async function registerHandler(event) {
    event.preventDefault();

    const registrationData = {
      email: props.formInputsControl.email.value,
      password: props.formInputsControl.password.value,
      // fullName: props.formInputsControl.fullName.value,
      // userName: props.formInputsControl.userName.value,
      returnSecureToken: true
    };

    props.requestHandler(registrationData)
  }
};

function mapStateToProps(state) {
  return {
    formInputsControl: state.regist.formInputsControl
  }
}

function mapDispatchToProps(dispatch) {
  return {
    formControlHandler: formInputsControl => dispatch(formControlHandler(formInputsControl)),
    requestHandler: registrationData => dispatch(requestHandler(registrationData))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Registration);
