"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase/client";

type AuthContextType = { isAuth: boolean };
const AuthContext = createContext<AuthContextType>({ isAuth: false });

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (!alive) return;
        if (error) {
          setIsAuth(false);
          return;
        }
        setIsAuth(!!data?.session?.user?.id);
      } catch {
        setIsAuth(false);
      }
    })();

    const { data } = supabase.auth.onAuthStateChange((_evt, session) => {
      setIsAuth(!!session?.user?.id);
    });

    return () => {
      alive = false;
      data.subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>;
}
