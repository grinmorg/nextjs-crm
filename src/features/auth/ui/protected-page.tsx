import { readUserSession } from "@/shared/api/supabase/actions";
import { ROUTES } from "@/shared/constants/routes";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import React, { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);
    const [sessionData, setSessionData] = React.useState<{
      session: any;
    } | null>(null);

    React.useEffect(() => {
      const fetchSession = async () => {
        try {
          const { data } = await readUserSession();
          setSessionData(data);
        } catch (error) {
          console.error("Error fetching user session:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchSession();
    }, []);

    if (loading) {
      // Display a loading spinner or any other loading indicator
      return <UIPageSpinner />;
    }

    if (!sessionData || !sessionData.session) {
      // Redirect to the sign-in page if the user is not authenticated
      router.replace(ROUTES.SIGN_IN);
      return null; // Or you can return a message or component indicating redirection is in progress
    }

    return <Component {...props} />;
  };
}
