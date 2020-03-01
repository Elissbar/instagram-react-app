import axios from "axios";

const API_KEY = "AIzaSyBy6qJByKsfLg7sUNJ2v43W6QNF-cEzsok";

export function formControlHandler(formInputsControl) {
  return {
    type: "FORM_HANDLER",
    formInputsControl
  };
}

export function authenticationHandler(loginData) {
  return async () => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        loginData
      );

      console.log(response.data);
    } catch (error) {
      const errorName = error.response.data.error.message; //  Код ошибки от сервера

      switch (errorName) {
        case "INVALID_EMAIL":
          const errorLogin = "Невалидный email!";
          document.querySelector(".error-message").innerHTML = errorLogin;
          break;
        case "INVALID_PASSWORD":
          const errorPassword = "Неверный пароль!";
          document.querySelector(".error-message").innerHTML = errorPassword;
          break;
        case "EMAIL_NOT_FOUND":
          const errorAuthUser = "Пользователь с таким логином не найден!";
          document.querySelector(".error-message").innerHTML = errorAuthUser;
          break;
        default:
          return;
      }
    }
  };
}
