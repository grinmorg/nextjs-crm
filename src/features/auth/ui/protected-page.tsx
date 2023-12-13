import { useSessionQuery } from "@/entities/session";
import { ROUTES } from "@/shared/constants/routes";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isError, isPending } = useSessionQuery();

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }


    return <>
      {isPending && <UIPageSpinner />}
      <Component {...props} />
    </>
  };
}
