import { SignInForm } from "@/features/auth";
import { ROUTES } from "@/shared/constants/routes";
import { UIFormPageSplitLayout } from "@/shared/ui/layout/ui-form-page-split";
import { UILink } from "@/shared/ui/ui-link";

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
    <main className="py-6 min-h-screen bg-violet-200">
      <div className="container">
        <UIFormPageSplitLayout
          title="Вход в учётную запись"
          desc="Введите вашу почту и пароль"
          form={<SignInForm />}
          footer={
            <p className="text-gray-500 leading-6 text-base">
              Ещё нет аккаунта?{" "}
              <UILink href={ROUTES.SIGN_UP}>Регистрация</UILink>
            </p>
          }
          slides={slides}
        />
      </div>
    </main>
  );
}
