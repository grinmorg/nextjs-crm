import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/sign-up-form";
import { ERRORS, ERRORS_MESSAGES } from "@/shared/constants/errors";
import { OAuthForm } from "./oauth-form";

export function SignUpForm() {
  const { register, handleSubmit, isPending, errorType } = useSignUpForm();

  const userExistsError = errorType === ERRORS.USER_EXSISTS
    ? ERRORS_MESSAGES[ERRORS.USER_EXSISTS]
    : "";
  const invalidPasswordError = errorType === ERRORS.INVALID_PASSWORD
    ? ERRORS_MESSAGES[ERRORS.INVALID_PASSWORD]
    : "";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <UITextField
          className="mb-4"
          label="Ваше имя"
          inputProps={{
            ...register("name", { required: false }),
            type: "text",
            placeholder: "Имя",
          }}
        />
        <UITextField
          className="mb-4"
          label="Ваша почта"
          inputProps={{
            ...register("email", { required: true }),
            type: "email",
            placeholder: "Почта",
          }}
          required
          error={userExistsError}
        />

        <UITextField
          className="mb-4"
          label="Ваш пароль"
          inputProps={{
            ...register("password", { required: true }),
            type: "password",
            placeholder: "Пароль",
          }}
          required
          error={invalidPasswordError}
        />
        <UIButton disabled={isPending} className="w-full" variant="primary">
          Регистрация
        </UIButton>
      </form>

      <div className="py-4 text-center">
        <span className="fs-13 fw-bold">или</span>
      </div>

      <OAuthForm />
    </>
  );
}
