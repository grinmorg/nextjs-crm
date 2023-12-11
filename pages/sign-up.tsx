import { SignUpForm } from "@/features/auth";
import { ROUTES } from "@/shared/constants/routes";
import { UIFormPageSplitLayout } from "@/shared/ui/layout/ui-form-page-split";
import { UILink } from "@/shared/ui/ui-link";

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
    <main className="py-6 min-h-screen bg-violet-200">
      <div className="container">
        <UIFormPageSplitLayout
          title="Создайте свой аккаунт"
          desc="У вас нет учетной записи? Создайте свой аккаунт, это займет меньше минуты"
          form={<SignUpForm />}
          footer={
            <p className="text-gray-500 leading-6 text-base">
              У вас уже есть аккаунт?{" "}
              <UILink href={ROUTES.SIGN_IN}>Вход</UILink>
            </p>
          }
          slides={slides}
        />
      </div>
    </main>
  );
}
