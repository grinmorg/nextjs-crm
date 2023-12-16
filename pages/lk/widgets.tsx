import { AllWidgetsCards } from "@/features/widgets/ui/all-widgets-cards";
import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { UILink } from "@/shared/ui/ui-link";

export default function Page() {
  return (
    <>
      <UIBasePage>
        <AllWidgetsCards />

        <UILink className="block mt-4" href="#">+ Добавить пост</UILink>

      </UIBasePage>

    </>
  );
}
