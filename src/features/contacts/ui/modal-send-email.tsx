import { EMAIL_DEFAULT_CONTENT } from "@/shared/constants/editor";
import { IPost } from "@/shared/interfaces";
import { UIButton } from "@/shared/ui/ui-button";
import UIContentEditor from "@/shared/ui/ui-content-editor";
import { UISelectField, UISelectOption } from "@/shared/ui/ui-select-field";
import { UITextField } from "@/shared/ui/ui-text-field";
import { Dialog } from "@headlessui/react";
import React from "react";

const MODEL = {
  title: "",
  desc: "",
  content: JSON.stringify(EMAIL_DEFAULT_CONTENT),
  user_id: null,
};

const templates = [
  { name: "Шаблон для события" },
  { name: "Шаблон для приглашения" },
  { name: "Шаблон для митапа" },
  { name: "Шаблон для хакатона" },
];

export function ModalSendEmail() {
  const [newPost, setNewPost] = React.useState<IPost>(MODEL);
  const [selected, setSelected] = React.useState<UISelectOption>(templates[0]);

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Отправить письмо
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500 mb-4">
          Выбирите нужный шаблон или создайте новый
        </p>

        <form>
          <UITextField
            className="mb-4"
            label="Получатели"
            inputProps={{
              type: "text",
              placeholder: "Перечислите всех получателей через запятую",
            }}
            required
          />

          <UITextField
            className="mb-4"
            label="Тема"
            inputProps={{
              type: "text",
              placeholder: "Тема письма",
            }}
            required
          />

          <UISelectField
            className="mb-4"
            options={templates}
            selected={selected}
            setSelected={setSelected}
          />

          <UIContentEditor
            content={newPost.content as string}
            onContent={(content: any) => {
              setNewPost((prev: any) => ({
                ...prev,
                content: JSON.stringify(content.getJSON()),
              }));
            }}
          />

          <div className="flex items-center gap-4">
            <UIButton className="w-full mt-4" variant="primary">
              Отправить
            </UIButton>
            <UIButton className="w-full mt-4" variant="secondary">
              Сохранить черновик
            </UIButton>
          </div>
        </form>
      </div>
    </>
  );
}
