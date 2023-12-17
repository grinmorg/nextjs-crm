import { STYLES } from "@/shared/constants/styles";
import { UIButton } from "@/shared/ui/ui-button";
import { UISelectField, UISelectOption } from "@/shared/ui/ui-select-field";
import { UITextField } from "@/shared/ui/ui-text-field";
import { supabase } from "@/shared/api/supabase/client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UICheckbox } from "@/shared/ui/ui-checkbox";
import { useQuizForm } from "../model/use-quiz-form";
import { IMember } from "@/shared/interfaces";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Имя не заполнено",
    }),
    email: z.string().nullable(),
    tg: z.string().nullable(),
    job: z.string().min(2, {
        message: "Специальность не заполнена",
    }),
    level: z.string().nullable(),
    message: z.string().nullable(),
});

const level = [
    { "name": "Intern/Trainee" },
    { "name": "Junior" },
    { "name": "Middle" },
    { "name": "Senior" },
];

export function QuizForm() {

    const [selected, setSelected] = React.useState<UISelectOption>(level[0]);
    const [ready, setReady] = React.useState<boolean>(false);
    const [agree, setAgree] = React.useState<boolean>(true);
    const [disableButton, setDisableButton] = React.useState<boolean>(false);

    const { isPending, handleRegisterOrUpdate, currentMember, findMemberByField } = useQuizForm();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            tg: "",
            job: "",
            level: "",
            message: ""
        },
    });

    // Слежу за изменением tg и email
    const watchFields = watch(["email", "tg"])

    React.useEffect(() => {
        if (currentMember) {
            if (currentMember.name) setValue('name', currentMember.name);
            if (currentMember.email) setValue('email', currentMember.email);
            if (currentMember.tg) setValue('tg', currentMember.tg);
            if (currentMember.job) setValue('job', currentMember.job);

            if (currentMember.level) {
                setSelected(JSON.parse(currentMember.level));
            }
            toast.success('Часть полей заполнена автоматически');
        }
    }, [currentMember])

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name == 'tg' || name == 'email') {
                findMemberByField(name, value[name]);
            }
        }
        )
        return () => subscription.unsubscribe()
    }, [watch])

    const onSubmit = (data: any) => {
        setDisableButton(true)

        setValue("level", JSON.stringify(selected))

        const member: IMember = {
            ...data
        }

        handleRegisterOrUpdate(member, !!currentMember)
            .then(() => setReady(true))

        setDisableButton(false)

    };


    return (
        <main className="py-6 bg-violet-200 dark:bg-violet-900 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-2 md:px-0">
                <div className="max-w-xl mx-auto bg-white dark:bg-violet-950 rounded-lg transition-all p-4 h-full">

                    {ready ? <div className="text-center">
                        <img src="/dist/images/welcome.png" alt="Welcome" className="mx-auto mb-8" />
                        <h3 className="mb-2 text-2xl">Спасибо, ваше мненение важно для нас!</h3>
                    </div> : <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
                            error={errors.name?.message}
                        />

                        <UITextField
                            className="mb-4"
                            label="Ваша почта"
                            inputProps={{
                                ...register("email", { required: false }),
                                type: "email",
                                placeholder: "Почта",
                            }}
                            error={errors.email?.message}
                        />

                        <UITextField
                            className="mb-4"
                            label="Telegram"
                            inputProps={{
                                ...register("tg", { required: false }),
                                type: "text",
                                placeholder: "Ник в ТГ",
                            }}
                            error={errors.tg?.message}
                        />

                        <UITextField
                            className="mb-4"
                            label="Специальность (язык программирования)"
                            inputProps={{
                                ...register("job", { required: false }),
                                type: "text",
                                placeholder: "Бэкенд разработчик (Python)",
                            }}
                            error={errors.job?.message}
                        />

                        <UISelectField
                            label="Уровень"
                            className="mb-4"
                            options={level}
                            selected={selected}
                            setSelected={setSelected}
                            error={errors.level?.message}
                        />

                        <UITextField
                            className="mb-4"
                            label="Отзыв о мероприятии"
                            inputProps={{
                                ...register("message", { required: false }),
                                type: "text",
                                placeholder: "Комментарий",
                            }}
                            error={errors.message?.message}
                        />

                        <UICheckbox checked={agree} onChange={() => setAgree(!agree)} label="Не против получать информацию о новых мероприятиях и вакансиях" />

                        <UIButton disabled={disableButton} className="w-full mt-2" variant="primary">
                            Отправить
                        </UIButton>
                    </form>}

                </div>
            </div>
        </main>
    )
}