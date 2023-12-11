import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { ERRORS, ERRORS_MESSAGES } from "@/shared/constants/errors";
import { useSignInForm } from "../model/sign-in-form";
import { OAuthForm } from "./oauth-form";

export function SignInForm() {
  const { register, handleSubmit, isPending, errors } = useSignInForm();

  // Check for specific errors
  const emailMustBeEmailError = errors.includes(ERRORS.MUST_BE_EMAIL)
    ? ERRORS_MESSAGES[ERRORS.MUST_BE_EMAIL]
    : "";
  const emailExistsError = errors.includes(ERRORS.EMAIL_EXSISTS)
    ? ERRORS_MESSAGES[ERRORS.EMAIL_EXSISTS]
    : "";
  const passwordMustBeGraterError = errors.includes(ERRORS.MUST_BE_GRATER)
    ? ERRORS_MESSAGES[ERRORS.MUST_BE_GRATER]
    : "";
  const userNotFoundError = errors.includes(ERRORS.USER_NOT_FOUND)
    ? ERRORS_MESSAGES[ERRORS.USER_NOT_FOUND]
    : "";
  const uncorrectedCredsError = errors.includes(ERRORS.UNCORRECTED_CREDS)
    ? ERRORS_MESSAGES[ERRORS.UNCORRECTED_CREDS]
    : "";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <UITextField
          className="mb-4"
          label="Ваша почта"
          inputProps={{
            ...register("email", { required: true }),
            type: "email",
            placeholder: "Почта",
          }}
          error={userNotFoundError || emailMustBeEmailError || emailExistsError}
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
          error={passwordMustBeGraterError || uncorrectedCredsError}
          required
        />
        <UIButton disabled={isPending} className="w-full" variant="primary">
          Вход
        </UIButton>
      </form>

      <div className="py-4 text-center">
        <span className="fs-13 fw-bold">или</span>
      </div>

      <OAuthForm />
    </>
  );
}
