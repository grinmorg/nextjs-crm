import { SignInForm } from "@/features/auth";
import { getPageTitle } from "@/shared/constants/config";
import { ROUTES } from "@/shared/constants/routes";
import { UIFormPageSplitLayout } from "@/shared/ui/layout/ui-form-page-split";
import { UILink } from "@/shared/ui/ui-link";
import Head from "next/head";

export default function SignIn() {
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
        <title>{getPageTitle("Вход")}</title>
      </Head>
      <main className="py-6 min-h-screen bg-violet-200 dark:bg-violet-900">
        <div className="container">
          <UIFormPageSplitLayout
            title="Вход в систему"
            desc="Введите вашу почту и пароль"
            form={<SignInForm />}
            footer={
              <p className="text-gray-500 dark:text-violet-300 leading-6 text-base">
                Ещё нет профиля?{" "}
                <UILink href={ROUTES.SIGN_UP}>Регистрация</UILink>
              </p>
            }
            slides={slides}
          />
        </div>
      </main>
    </>
  );
}
