import { IntroGuide } from "@/features/intro/ui";
import UIBasePage from "@/shared/ui/layout/ui-base-page";

export default function Page() {
  return (
    <>
      <IntroGuide />
      <UIBasePage>
        <h2 className="text-lg font-medium mr-auto">Виджеты</h2>
      </UIBasePage>
    </>
  );
}
