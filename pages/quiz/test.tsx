import { getPageTitle } from "@/shared/constants/config";
import { STYLES } from "@/shared/constants/styles";
import { UIButton } from "@/shared/ui/ui-button";
import { UISelectField, UISelectOption } from "@/shared/ui/ui-select-field";
import { UITextField } from "@/shared/ui/ui-text-field";
import Head from "next/head";
import React from "react";

const level = [
    { name: "Intern/Trainee" },
    { name: "Junior" },
    { name: "Middle" },
    { name: "Senior" }
];

export default function QuizTestPage() {

    const [selected, setSelected] = React.useState<UISelectOption>(level[0]);

    return (
        <>
            <Head>
                <title>{getPageTitle("Форма для участника")}</title>
            </Head>
            <main className="py-6 bg-violet-200 dark:bg-violet-900 min-h-screen flex flex-col justify-center">
                <div className="container px-2 md:px-0">
                    <div className="max-w-xl mx-auto bg-white dark:bg-violet-950 rounded-lg transition-all p-4 h-full">
                        <h2 className={STYLES.TITLE.H2}>
                            Форма обратной связи "DevRel Hack 2.0"
                        </h2>
                        <form onSubmit={() => { }}>
                            <UITextField
                                className="mb-4"
                                label="Ваше имя"
                                inputProps={{
                                    type: "text",
                                    placeholder: "Имя",
                                }}
                                required
                            />

                            <UITextField
                                className="mb-4"
                                label="Ваша почта"
                                inputProps={{
                                    type: "email",
                                    placeholder: "Почта",
                                }}
                                required
                            />

                            <UITextField
                                className="mb-4"
                                label="Telegram"
                                inputProps={{
                                    type: "text",
                                    placeholder: "Ник в ТГ",
                                }}
                                required
                            />

                            <UITextField
                                className="mb-4"
                                label="Специальность (язык программирования)"
                                inputProps={{
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
                                    type: "text",
                                    placeholder: "Комментарий",
                                }}
                            />

                            <UIButton className="w-full" variant="primary">
                                Отправить
                            </UIButton>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}