import { supabase } from "@/shared/api/supabase/client";
import { Provider } from "@supabase/supabase-js";
import { toast } from "react-toastify";

export function OAuthForm() {
  const OAuthHandler = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/lk`,
      },
    });

    if (error) {
      toast.error("Произошла ошибка");
    }
  };

  return (
    <>
      <div className="py-4 text-center">
        <span className="fs-13 fw-bold dark:text-white">или</span>
      </div>

      <div className="w-full flex flex-col gap-2">
        <button
          onClick={() => OAuthHandler("github")}
          className="block border text-gray-500 dark:text-violet-300 font-medium leading-6 text-center align-middle select-none py-2 px-4 text-sm rounded-md transition-all hover:shadow-md"
        >
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="me-2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Войти через GitHub
          </span>
        </button>
        <button
          onClick={() => toast.error('Скоро заработает')}
          className="block border text-gray-500 dark:text-violet-300 font-medium leading-6 text-center align-middle select-none py-2 px-4 text-sm rounded-md transition-all hover:shadow-md"
        >
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.544 2.673a1.549 1.549 0 0 1 1.8.097v.001c.246.198.426.466.515.769l1.446 4.428h5.39L16.14 3.54a1.54 1.54 0 0 1 .515-.769l.004-.004a1.554 1.554 0 0 1 1.795-.095l.002.001c.274.174.486.43.605.732l.004.01l2.473 6.451a5.45 5.45 0 0 1-1.813 6.303l-6.73 5.064h-.002a1.66 1.66 0 0 1-2 0l-6.731-5.065a5.452 5.452 0 0 1-1.806-6.294l2.48-6.469c.12-.302.333-.558.607-.732m.811 2.063L4.16 10.464c-.28.737-.337 1.604-.12 2.362c.217.755.671 1.42 1.295 1.896l6.66 5.01l6.653-5.005a3.65 3.65 0 0 0 1.308-1.904c.22-.76.159-1.638-.123-2.378l-2.189-5.71L16 9.769H8z"
              ></path>
            </svg>
            Войти через GitLab
          </span>
        </button>
        <button
          onClick={() => OAuthHandler("google")}
          className="block border text-gray-500 dark:text-violet-300 font-medium leading-6 text-center align-middle select-none py-2 px-4 text-sm rounded-md transition-all hover:shadow-md"
        >
          <span className="flex items-center justify-center">
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
              ></path>
            </svg>
            Войти через Google
          </span>
        </button>
      </div>
    </>
  );
}
