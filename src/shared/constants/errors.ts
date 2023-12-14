export const ERRORS = {
  USER_EXSISTS: "user_already_exists",
  INVALID_PASSWORD: "general_argument_invalid",
  INVALID_CREDS: "user_invalid_credentials",
};

export const ERRORS_MESSAGES = {
  [ERRORS.INVALID_PASSWORD]:
    "Пароль должен быть как минимум 8 символов и не должен быть часто используемым паролем",
  429: "Вы превысили общий лимит запросов, попробуйте позже",
  400: "Пользователь с такой почтой не существует",
  [ERRORS.INVALID_CREDS]: "Почта или пароль введены не верно",
  // [ERRORS.USER_NOT_FOUND]: "Такого пользователя не существует",
};
