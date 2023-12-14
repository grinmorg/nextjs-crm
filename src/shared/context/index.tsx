"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../interfaces";
import { supabase } from "../api/supabase/client";
import { UIPageSpinner } from "../ui/ui-page-spinner";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        setLoading(true);

        const { data }: any = await supabase.auth.getSession();

        if (data) {
          setUser(data.session.user);
        }
      } catch (e) {
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        supabase,
      }}
    >
      {loading && !user && <UIPageSpinner />}
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
