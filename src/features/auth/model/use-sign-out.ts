import { logout } from "@/shared/api/appwrite";
import { ROUTES } from "@/shared/constants/routes";
import { AppwriteException } from "appwrite";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

export function useSignOut() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsPending(true);
    try {
      await logout();
      router.push(ROUTES.SIGN_IN);
    } catch (e: unknown) {

      setIsPending(false);

      if (e instanceof AppwriteException) {
        toast.error(e.message);

        return;
      }

      console.log('Error in logout: ', e)
    }

    setIsPending(false);
  }



  return {
    isPending,
    singOut: handleSignOut,
  };
}
