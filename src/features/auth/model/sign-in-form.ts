import { login } from "@/shared/api/appwrite";
import { authControllerSignIn } from "@/shared/api/generated";
import { ERRORS, ERRORS_MESSAGES } from "@/shared/constants/errors";
import { ROUTES } from "@/shared/constants/routes";
import { IUser } from "@/shared/interfaces";
import { useMutation } from "@tanstack/react-query";
import { AppwriteException } from "appwrite";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function useSignInForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<IUser>();

  const [isPending, setIsPending] = useState(false);
  const [errorType, setErrorType] = useState<string>('');

  const handleSignIn = async (data: IUser) => {
    setIsPending(true);
    try {
      await login(data.email, data.password);
      setErrorType('')
      router.push(ROUTES.HOME);
    } catch (e: unknown) {

      setIsPending(false);

      if (e instanceof AppwriteException) {
        if (e.type === ERRORS.RATE_LIMIT) {
          // Rate Limit
          toast.error(ERRORS_MESSAGES[ERRORS.RATE_LIMIT]);

          return;
        }

        setErrorType(e.type)
      }
    }

    setIsPending(false);
  }

  return {
    register,
    handleSubmit: handleSubmit((data) => handleSignIn(data)),
    isPending,
    errorType,
  };
}
