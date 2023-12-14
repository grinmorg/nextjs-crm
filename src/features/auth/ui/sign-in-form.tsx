import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { OAuthForm } from "./oauth-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IUser } from "@/shared/interfaces";
import { useRouter } from "next/router";
import { useTransition } from "react";
import { supabase } from "@/shared/api/supabase/client";
import { ROUTES } from "@/shared/constants/routes";
import { toast } from "react-toastify";
import { ERRORS_MESSAGES } from "@/shared/constants/errors";

const FormSchema = z.object({
  email: z.string().email({
    message: "Некорректная почта",
  }),
  password: z.string().min(6, {
    message: "Минимально 6 символов",
  }),
});

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  let [isPending, startTransition] = useTransition();

  const onSubmit = (data: IUser) => {
    startTransition(async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error?.status) {
        toast.error(ERRORS_MESSAGES[error?.status]);
      } else {
        toast.success("Добро пожаловать");

        router.push(ROUTES.HOME);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <UITextField
          className="mb-4"
          label="Ваша почта"
          inputProps={{
            ...register("email", { required: true }),
            type: "email",
            placeholder: "Почта",
          }}
          error={errors.email?.message}
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
          error={errors.password?.message}
          required
        />
        <UIButton disabled={isPending} className="w-full" variant="primary">
          Вход
        </UIButton>
      </form>

      <OAuthForm />
    </>
  );
}
