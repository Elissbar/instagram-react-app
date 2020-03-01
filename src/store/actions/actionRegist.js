import axios from "axios";

const API_KEY = "AIzaSyBy6qJByKsfLg7sUNJ2v43W6QNF-cEzsok";

export function formControlHandler(formInputsControl) {
  return {
    type: "INPUTS_HANDLER",
    formInputsControl
  };
}

export function requestHandler(registrationData) {
  return async () => {
    try {
      if (registrationData.password.length < 6) {
        throw new Error("SHORT_PASSWORD");
      } else {
        const response = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          registrationData
        );

        console.log(response.data);
      }
    } catch (error) {

      if (error.message === "Request failed with status code 400") {
        if (error.response.data.error.message === "EMAIL_EXISTS") {
          const errorLogin = "Этот логин уже занят!";
          document.querySelector(".error-message").innerHTML = errorLogin;
        }
      } else if (error.message === "SHORT_PASSWORD") {
        const errorLogin = "Слишком короткий пароль!";
        document.querySelector(".error-message").innerHTML = errorLogin;
      }

    }
  };
}
