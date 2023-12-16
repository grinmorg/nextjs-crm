import { AllToolsCards } from "@/features/tools/ui/all-tools-cards";
import { STYLES } from "@/shared/constants/styles";
import UIBasePage from "@/shared/ui/layout/ui-base-page";

export default function Page() {
  return (
    <UIBasePage>
      <div className="flex justify-between">
        <h2 className={STYLES.TITLE.H2}>
          Инструменты
        </h2>
      </div>

      <AllToolsCards />
    </UIBasePage>
  );
}
