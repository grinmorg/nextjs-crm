import { UIButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sign-out";

export function SignOutButton() {
  const { isPending, signOut } = useSignOut();
  return (
    <UIButton
      variant="secondary"
      disabled={isPending}
      onClick={() => signOut()}
    >
      Выход
    </UIButton>
  );
}
