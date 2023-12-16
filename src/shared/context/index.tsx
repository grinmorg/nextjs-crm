"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../interfaces";
import { supabase } from "../api/supabase/client";
import { UIPageSpinner } from "../ui/ui-page-spinner";

interface IAppContext {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  supabase: any;
  showIntro: boolean;
  setShowIntro: React.Dispatch<React.SetStateAction<boolean>>;
  isNewsletter: boolean;
  setIsNewsletter: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [showIntro, setShowIntro] = useState<boolean>(false); // помощник
  const [isNewsletter, setIsNewsletter] = useState<boolean>(false); // рассылка

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

  const contextValues: IAppContext = {
    user,
    setUser,
    supabase,
    showIntro,
    setShowIntro,
    isNewsletter, 
    setIsNewsletter
  };

  return (
    <AppContext.Provider value={contextValues}>
      {loading && !user && <UIPageSpinner />}
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }

  return context;
}
