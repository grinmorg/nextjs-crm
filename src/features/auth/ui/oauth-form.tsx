import { supabase } from "@/shared/api/supabase/client";

export function OAuthForm() {
  const authWithGitHub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/lk`,
      },
    });

    console.log(data);
  };

  const authWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/lk`,
      },
    });

    console.log(data);
  };

  return (
    <>
      <div className="py-4 text-center">
        <span className="fs-13 fw-bold dark:text-white">или</span>
      </div>

      <div className="w-full flex flex-col gap-2">
        <button
          onClick={authWithGitHub}
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
            Войти через Github
          </span>
        </button>
        <button
          onClick={authWithGoogle}
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
