const REGEX_CONSTANT: { [key: string]: RegExp } = {
    ONLY_CHARACTERS: /^[a-zA-Z]+$/,
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    PHONE_NUMBER: /^(?:\(\d{3}\)\s?|\d{3}[-.\s]?)(\d{3})[-.\s]?(\d{4})$/,
    PASSWORD_VERIFY: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&]).{8,}$/
  };

export {
    REGEX_CONSTANT
}