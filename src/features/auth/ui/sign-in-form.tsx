import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { ERRORS, ERRORS_MESSAGES } from "@/shared/constants/errors";
import { useSignInForm } from "../model/sign-in-form";
import { OAuthForm } from "./oauth-form";

export function SignInForm() {
  const { register, handleSubmit, isPending, errorType } = useSignInForm();

  const invalidCredsError = errorType === ERRORS.INVALID_CREDS
    ? ERRORS_MESSAGES[ERRORS.INVALID_CREDS]
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
          error={invalidCredsError}
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
          error={invalidCredsError}
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
