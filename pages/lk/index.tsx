import { EventStats } from "@/features/stats/ui/event-stats";
import { MainStats } from "@/features/stats/ui/main-stats";
import UIBasePage from "@/shared/ui/layout/ui-base-page";

export default function Page() {
  return (
    <UIBasePage>
      <MainStats />
      <EventStats />
    </UIBasePage>
  );
}
