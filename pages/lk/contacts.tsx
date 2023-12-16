import { AllContect } from "@/features/contacts/ui/all-contacts";
import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { UIAvatar } from "@/shared/ui/ui-avatar";
import { UILink } from "@/shared/ui/ui-link";
import { UIModal } from "@/shared/ui/ui-modal";
import { UITextField } from "@/shared/ui/ui-text-field";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";

export default function Page() {
  return (
    <UIBasePage>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium mr-auto mb-4 dark:text-white">
          Все контакты
        </h2>
        <UILink href="#">+ Добавить участника</UILink>
      </div>

      <AllContect />
    </UIBasePage>
  );
}
