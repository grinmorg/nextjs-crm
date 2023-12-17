import { SignUpForm } from "@/features/auth";
import { getPageTitle } from "@/shared/constants/config";
import { ROUTES } from "@/shared/constants/routes";
import { UIFormPageSplitLayout } from "@/shared/ui/layout/ui-form-page-split";
import { UILink } from "@/shared/ui/ui-link";
import Head from "next/head";

export default function SignUp() {
  const slides = [
    {
      id: 1,
      img: "https://coderthemes.com/prompt/tailwind/assets/images/hero/saas1.png",
      title: "Наша фича",
      desc: "Описание нашей крутой фичи",
    },
    {
      id: 2,
      img: "https://coderthemes.com/prompt/tailwind/assets/images/hero/saas2.png",
      title: "Наша фича 2",
      desc: "Описание нашей крутой фичи 2",
    },
    {
      id: 3,
      img: "https://coderthemes.com/prompt/tailwind/assets/images/hero/saas3.png",
      title: "Наша фича 3",
      desc: "Описание нашей крутой фичи 3",
    },
  ];

  return (
    <>
      <Head>
        <title>{getPageTitle("Регистрация")}</title>
      </Head>

      <main className="py-6 min-h-screen bg-violet-200 dark:bg-violet-900">
        <div className="container mx-auto px-2 md:px-0">
          <UIFormPageSplitLayout
            title="Создайте свой профиль"
            desc="Создайте свой профиль, это займет меньше минуты"
            form={<SignUpForm />}
            footer={
              <p className="text-gray-500 dark:text-violet-300 leading-6 text-base">
                У вас уже есть профиль?{" "}
                <UILink href={ROUTES.SIGN_IN}>Вход</UILink>
              </p>
            }
            slides={slides}
          />
        </div>
      </main>
    </>
  );
}
