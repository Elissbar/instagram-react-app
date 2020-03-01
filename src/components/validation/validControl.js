import is from "is_js";

export function validControl(value, validation) {
  if (!validation) {
    return;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (validation.email) {
    isValid = is.email(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  return isValid;
}
