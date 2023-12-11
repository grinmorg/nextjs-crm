export const ERRORS = {
  MUST_BE_GRATER: "must-be-greater-8",
  MUST_BE_EMAIL: "email must be an email",
  EMAIL_EXSISTS: "email-exists",
  USER_NOT_FOUND: "user-not-found",
  UNCORRECTED_CREDS: "uncorrected-credentials",
};

export const ERRORS_MESSAGES = {
  [ERRORS.MUST_BE_GRATER]: "Пароль должен быть как минимум 8 символов",
  [ERRORS.MUST_BE_EMAIL]: "Почта должна быть почтой, например test@mail.ru",
  [ERRORS.EMAIL_EXSISTS]: "Аккаунт с такой почтой уже существует",
  [ERRORS.USER_NOT_FOUND]: "Такого пользователя не существует",
  [ERRORS.UNCORRECTED_CREDS]: "Данные для входа не верны",
};
