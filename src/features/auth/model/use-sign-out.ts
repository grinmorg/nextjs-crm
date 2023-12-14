import { supabase } from "@/shared/api/supabase/client";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

export function useSignOut() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsPending(true);

    const { error } = await supabase.auth.signOut();

    if (error?.message) {
      toast.error(error.message);
    } else {
      router.push(ROUTES.SIGN_IN);
    }

    setIsPending(false);
  };

  return {
    isPending,
    signOut: handleSignOut,
  };
}
