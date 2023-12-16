import { GenerateLinkCard } from "./generate-link-card";
import { GenerateMailTemplateCard } from "./generate-mail-template-card";

export function AllToolsCards() {
  return (
    <div className="grid grid-cols-12 gap-6 mt-2">
      <GenerateLinkCard />
      <GenerateMailTemplateCard />
    </div>
  );
}
