import { supabase } from "@/shared/api/supabase/client";
import { getPageTitle } from "@/shared/constants/config";
import { STYLES } from "@/shared/constants/styles";
import { UIButton } from "@/shared/ui/ui-button";
import { UISelectField, UISelectOption } from "@/shared/ui/ui-select-field";
import { UITextField } from "@/shared/ui/ui-text-field";
import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormFields {
  name: string
  email?: string
  tg?: string
  job?: string
  level?: string
  message?: string
}

const level = [
  { name: "Intern/Trainee" },
  { name: "Junior" },
  { name: "Middle" },
  { name: "Senior" },
];

export default function QuizTestPage() {
  const [selected, setSelected] = React.useState<UISelectOption>(level[0]);
  const [ready, setReady] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormFields>({
    defaultValues: {
      name: "",
      email: "",
      tg: "",
      job: "",
      level: "",
      message: ""
    },
  });

  const save = async (formFields: any) => {
    try {
      const data = await supabase.from("reviews").insert(formFields);

      if (data) {
        setReady(true)
      } else {
        toast.error("При создании поста что то пошло не так");
      }
    } catch (error) {
      toast.error("При создании поста что то пошло не так");
    }
  };

  const handleInputChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setReady(true)
  };

  return (
    <>
      <Head>
        <title>{getPageTitle("Форма для участника")}</title>
      </Head>
      <main className="py-6 bg-violet-200 dark:bg-violet-900 min-h-screen flex flex-col justify-center">
        <div className="container px-2 md:px-0">
          <div className="max-w-xl mx-auto bg-white dark:bg-violet-950 rounded-lg transition-all p-4 h-full">

            {ready ? <div className="text-center">
              <img src="/dist/images/welcome.png" alt="Welcome" className="mx-auto mb-8" />
              <h3 className="mb-2 text-2xl">Спасибо, ваше мненение важно для нас!</h3>
            </div> : <form onSubmit={(e) => handleInputChange(e)}>
              <h2 className={STYLES.TITLE.H2}>
                Форма обратной связи "DevRel Hack 2.0"
              </h2>
              <UITextField
                className="mb-4"
                label="Ваше имя"
                inputProps={{
                  ...register("name", { required: true }),
                  type: "text",
                  placeholder: "Имя",
                }}
                required
              />

              <UITextField
                className="mb-4"
                label="Ваша почта"
                inputProps={{
                  ...register("email", { required: false }),
                  type: "email",
                  placeholder: "Почта",
                }}

              />

              <UITextField
                className="mb-4"
                label="Telegram"
                inputProps={{
                  ...register("tg", { required: false }),
                  type: "text",
                  placeholder: "Ник в ТГ",
                }}

              />

              <UITextField
                className="mb-4"
                label="Специальность (язык программирования)"
                inputProps={{
                  ...register("job", { required: false }),
                  type: "text",
                  placeholder: "Бэкенд разработчик (Python)",
                }}
              />

              <UISelectField
                label="Уровень"
                className="mb-4"
                options={level}
                selected={selected}
                setSelected={setSelected}
              />

              <UITextField
                className="mb-4"
                label="Отзыв о мероприятии"
                inputProps={{
                  ...register("message", { required: false }),
                  type: "text",
                  placeholder: "Комментарий",
                }}
              />

              <UIButton className="w-full" variant="primary">
                Отправить
              </UIButton>
            </form>}

          </div>
        </div>
      </main>
    </>
  );
}
