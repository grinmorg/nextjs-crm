import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    name: string;
    email: string;
    password: string;
  }>();

  // при передаче полей signUpMutation.mutate - запустится запрос
  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  // Перебиваю тип для ошибок
  const errors: string[] =
    signUpMutation.error instanceof Error
      ? ["An error occurred"] // Default error message if it's a generic Error
      : signUpMutation.error || [];

  return {
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isPending: signUpMutation.isPending,
    errors,
  };
}
