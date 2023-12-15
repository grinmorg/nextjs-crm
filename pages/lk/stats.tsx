import { EventStats } from "@/features/stats/ui/event-stats";
import { MainStats } from "@/features/stats/ui/main-stats";
import UIBasePage from "@/shared/ui/layout/ui-base-page";

export default function Page() {
  return (
    <UIBasePage>
      <h2 className="text-2xl font-medium mr-auto mb-4 dark:text-white">Статистика</h2>

      <MainStats />
      <EventStats />

    </UIBasePage>
  );
}

