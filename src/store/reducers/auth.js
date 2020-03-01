const initialState = {
  formInputsControl: {
    email: {
      value: "",
      type: "email",
      placeholder: "Моб. телефон или эл. адрес",
      valid: false, // По умолчанию - false, так как строка пустая. Т.е. нельзя отправить пустую строку
      touched: false, // Проверка было ли затронуто поле пользователем
      validation: {
        // Если объект есть в контроле - значит поле нужно валидировать
        required: true, // Обязательное поле
        email: true
      }
    },
    password: {
      value: "",
      type: "password",
      placeholder: "Пароль",
      valid: false, // По умолчанию - false, так как строка пустая. Т.е. нельзя отправить пустую строку
      touched: false, // Проверка было ли затронуто поле пользователем
      validation: {
        // Если объект есть в контроле - значит поле нужно валидировать
        required: true, // Обязательное поле
        minLength: 6
      }
    }
  }
};

export const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_HANDLER":
      return {
        ...state,
        formInputsControl: action.formInputsControl
      };
    default:
      return state;
  }
};
