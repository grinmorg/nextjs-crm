"use client";
import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { OAuthForm } from "./oauth-form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "@/shared/interfaces";
import { toast } from "react-toastify";
import { useTransition } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/routes";
import createSupabaseBrowerClient from "@/shared/api/supabase/client";
import { ERRORS_MESSAGES } from "@/shared/constants/errors";

const FormSchema = z
  .object({
    email: z.string().email({
      message: "Некорректная почта",
    }),
    password: z.string().min(6, {
      message: "Пароль обязателен (минимально 6 символов)",
    }),
    confirm: z.string().min(6, {
      message: "Пароль обязателен (минимально 6 символов)",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Пароли не совпадают",
    path: ["confirm"],
  });

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });

  const router = useRouter();

  let [isPending, startTransition] = useTransition();

  const onSubmit = (data: IUser) => {
    startTransition(async () => {
      const supabase = createSupabaseBrowerClient();

      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });
      if (error?.status) {
        toast.error(ERRORS_MESSAGES[error?.status]);
      } else {
        toast.success("Регистрация прошла успешно");

        const user = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });

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
          required
          error={errors.email?.message}
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
        <UITextField
          className="mb-4"
          label="Пароль ещё раз"
          inputProps={{
            ...register("confirm", { required: true }),
            type: "password",
            placeholder: "Пароль ещё раз",
          }}
          error={errors.confirm?.message}
          required
        />
        <UIButton disabled={isPending} className="w-full" variant="primary">
          Регистрация
        </UIButton>
      </form>

      <OAuthForm />
    </>
  );
}
