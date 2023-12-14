import { IntroJsGuide } from "@/shared/lib/intro-guide";
import UIBasePage from "@/shared/ui/layout/ui-base-page";

export default function Page() {


  return (
    <>
      <IntroJsGuide />
      <UIBasePage>
        <h2 className="text-lg font-medium mr-auto">Виджеты</h2>
      </UIBasePage>
    </>
  );
}
