import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/sign-up-form";
import { ERRORS, ERRORS_MESSAGES } from "@/shared/constants/errors";
import { OAuthForm } from "./oauth-form";

export function SignUpForm() {
  const { register, handleSubmit, isPending, errors } = useSignUpForm();

  // Check for specific errors
  const emailMustBeEmailError = errors.includes(ERRORS.MUST_BE_EMAIL)
    ? ERRORS_MESSAGES[ERRORS.MUST_BE_EMAIL]
    : "";
  const emailExistsError = errors.includes(ERRORS.EMAIL_EXSISTS)
    ? ERRORS_MESSAGES[ERRORS.EMAIL_EXSISTS]
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
          error={emailMustBeEmailError || emailExistsError}
          required
        />

        <UITextField
          className="mb-4"
          label="Ваш пароль"
          inputProps={{
            ...register("password", { required: true }),
            type: "password",
            placeholder: "Пароль",
          }}
          error={
            errors.includes(ERRORS.MUST_BE_GRATER)
              ? ERRORS_MESSAGES[ERRORS.MUST_BE_GRATER]
              : ""
          }
          required
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
