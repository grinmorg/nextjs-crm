import { getAccount } from "@/shared/api/appwrite";
import { useEffect, useState } from "react";

export function useSessionQuery() {
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isAuth = await getAccount();

        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  return {
    isError,
    isPending
  }
}
