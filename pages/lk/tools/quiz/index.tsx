import { AllQuizCards } from "@/features/tools/ui/quiz/all-quiz-cards";
import { ROUTES } from "@/shared/constants/routes";
import { STYLES } from "@/shared/constants/styles";
import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { UILink } from "@/shared/ui/ui-link";

export default function ToolsQuizPage() {
  return (
    <UIBasePage>
      <div className="flex justify-between">
        <h2 className={STYLES.TITLE.H2}>
          <UILink href={ROUTES.LK_TOOLS}>Инструменты</UILink>- Все опросы
        </h2>
      </div>

      <AllQuizCards />
    </UIBasePage>
  );
}
