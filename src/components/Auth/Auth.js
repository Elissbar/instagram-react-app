import React from "react";
import Input from "../UI/Input";
import "./Auth.sass";
// import axios from "axios";
import { Link } from "react-router-dom";
import {validControl} from '../validation/validControl'
import {connect} from 'react-redux'
import {authenticationHandler, formControlHandler} from '../../store/actions/actionAuth'

const Auth = props => {

  function loginFormHandler(value, nameControl) {
    const formInputsControl = { ...props.formInputsControl }; // в новый state после изменений мы будет записывать именно объект, в котором хранятся все контролы
    const control = { ...formInputsControl[nameControl] };

    control.value = value;
    control.touched = true;
    control.valid = validControl(value, control.validation);

    formInputsControl[nameControl] = control; // Кладем в объект контролов уже измененный контрол

    props.formAuthControl(formInputsControl)
  }

  function renderInputs() {
    return Object.keys(props.formInputsControl).map((controlName, index) => {
      const control = props.formInputsControl[controlName];

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
            onChange={event =>
              loginFormHandler(event.target.value, controlName)
            }
          />
        </div>
      );
    });
  }

  return (
    <div className="auth-card">
      <div className="error-message"></div>
      <h1 className="card-title">Instagram</h1>

      <div className="form">
        <form>
          {renderInputs()}

          <div className="auth-button">
            <button className="auth" onClick={authenticationHandler}>
              Войти
            </button>
          </div>

          <div className="or">
            <div className="left-line"></div>
            <div className="middle-el">или</div>
            <div className="right-line"></div>
          </div>

          <div className="enter-in-facebook">
            <button>Войти через Facebook</button>
          </div>
        </form>
      </div>
      <Link to="/registration" className="link">
        Зарегистрироваться
      </Link>
    </div>
  );

  function authenticationHandler(event) {
    event.preventDefault();

    const loginData = {
      email: props.formInputsControl.email.value,
      password: props.formInputsControl.password.value,
      returnSecureToken: true
    };

    props.authenticationHandler(loginData)
  }
};

function mapStateToProps(state) {
  return {
    formInputsControl: state.auth.formInputsControl
  }
}

function mapDispatchToProps(dispatch) {
  return {
    formAuthControl: formInputsControl => dispatch(formControlHandler(formInputsControl)),
    authenticationHandler: loginData => dispatch(authenticationHandler(loginData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
