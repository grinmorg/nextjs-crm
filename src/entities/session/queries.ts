import { getAccount } from "@/shared/api/appwrite";
import { IUser } from "@/shared/interfaces";
import { useEffect, useState } from "react";

export function useSessionQuery() {
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authUser = await getAccount();

        setData(authUser as IUser)

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
    data,
    isError,
    isPending
  }
}
