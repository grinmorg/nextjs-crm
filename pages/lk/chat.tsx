import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { UIAvatar } from "@/shared/ui/ui-avatar";
import { UIButton } from "@/shared/ui/ui-button";

export default function Page() {
  return (
    <UIBasePage>
      <section className="mb-4">
        <div className="border  dark:bg-violet-950 bg-white dark:bg-dark-violet-500  rounded-2xl px-6 pt-[15px] pb-[38px]">
          <div className="flex justify-between items-center border-b border-violet-500 pb-1 dark:border-violet-300 mb-[30px]">
            {" "}
            <span className="text-sm text-gray-800 dark:text-gray-100 dark:text-gray-dark-1100">
              36 Сообщений
            </span>
          </div>
          <div className="flex flex-col justify-between gap-[35px] xl:flex-row">
            <div className="flex flex-col gap-y-3">
              <UserCard avatarUrl="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow" />
              <UserCard avatarUrl="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
              <UserCard avatarUrl="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Pink&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Pale" />
              <UserCard avatarUrl="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" />
              <UserCard avatarUrl="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow" />
            </div>
            <div className="flex-1 relative">
              <div className="flex justify-between border-b border-violet-500 pb-4 dark:border-violet-300 mb-[18px]">
                <div className="flex gap-x-[38px]">
                  <div className="overflow-hidden w-12 h-12 rounded-full">
                    <UIAvatar
                      className="w-full h-full object-cover"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow"
                    />
                  </div>
                  <div className="flex flex-col gap-y-[6px]">
                    <h3 className="leading-4 font-medium text-gray-800 text-[16px] dark:text-gray-dark-1100">
                      Валентина Иванова
                    </h3>
                    <div className="flex items-center gap-x-[5px]">
                      <span className="text-gray-400 text-xs font-semibold dark:text-gray-dark-400">
                        Сейчас онлайн
                      </span>
                      <div className="bg-green rounded-full w-[10px] h-[10px]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <button className="w-5 h-5 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover text-gray-500 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.58335 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58333C17.5 5.21108 13.9556 1.66666 9.58335 1.66666C5.2111 1.66666 1.66669 5.21108 1.66669 9.58333C1.66669 13.9556 5.2111 17.5 9.58335 17.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3334 18.3333L16.6667 16.6667"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="w-5 h-5 overflow-hidden">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover text-gray-500 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.75 7.5C7.57843 7.5 8.25 6.82843 8.25 6C8.25 5.17157 7.57843 4.5 6.75 4.5C5.92157 4.5 5.25 5.17157 5.25 6C5.25 6.82843 5.92157 7.5 6.75 7.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.00244 14.2125L5.69994 11.73C6.29244 11.3325 7.14744 11.3775 7.67994 11.835L7.92744 12.0525C8.51244 12.555 9.45744 12.555 10.0424 12.0525L13.1624 9.37501C13.7474 8.87251 14.6924 8.87251 15.2774 9.37501L16.4999 10.425"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="w-6 h-6 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover text-gray-500 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8.35337 13.6133H4.14004C2.03337 13.6133 1.33337 12.2133 1.33337 10.8067V5.19332C1.33337 3.08666 2.03337 2.38666 4.14004 2.38666H8.35337C10.46 2.38666 11.16 3.08666 11.16 5.19332V10.8067C11.16 12.9133 10.4534 13.6133 8.35337 13.6133Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.0134 11.4L11.16 10.1V5.89336L13.0134 4.59336C13.92 3.96003 14.6667 4.34669 14.6667 5.46003V10.54C14.6667 11.6534 13.92 12.04 13.0134 11.4Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.66663 7.33331C8.21891 7.33331 8.66663 6.8856 8.66663 6.33331C8.66663 5.78103 8.21891 5.33331 7.66663 5.33331C7.11434 5.33331 6.66663 5.78103 6.66663 6.33331C6.66663 6.8856 7.11434 7.33331 7.66663 7.33331Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="w-6 h-6 overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-cover text-gray-500 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 12.9167C11.8417 12.9167 13.3333 11.425 13.3333 9.58334V5.00001C13.3333 3.15834 11.8417 1.66667 10 1.66667C8.15834 1.66667 6.66667 3.15834 6.66667 5.00001V9.58334C6.66667 11.425 8.15834 12.9167 10 12.9167Z"
                        stroke="currentColor"
                        strokeWidth="1.0625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.625 8.04167V9.45834C3.625 12.975 6.48333 15.8333 10 15.8333C13.5167 15.8333 16.375 12.975 16.375 9.45834V8.04167"
                        stroke="currentColor"
                        strokeWidth="1.0625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.84167 5.35833C9.59167 5.08333 10.4083 5.08333 11.1583 5.35833"
                        stroke="currentColor"
                        strokeWidth="1.0625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.33334 7.125C9.77501 7.00833 10.2333 7.00833 10.675 7.125"
                        stroke="currentColor"
                        strokeWidth="1.0625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 15.8333V18.3333"
                        stroke="currentColor"
                        strokeWidth="1.0625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <time className="text-center text-gray-400 text-xs block mb-6 dark:text-gray-dark-400">
                Август 15, 2023
              </time>
              <div className="flex flex-col overflow-y-scroll scrollbar-hide gap-y-[27px] mb-[124.5px] max-h-[750px]">
                <div className="flex gap-x-[5px] max-w-[608px]">
                  <div className="flex flex-col cursor-pointer items-center gap-y-[10px] w-[32px]">
                    <div className="relative">
                      <div className="overflow-hidden rounded-full w-[32px] h-[32px] border-white dark:border-dark-violet-500 border-0">
                        <UIAvatar
                          className="w-full h-full object-cover"
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow"
                        />
                      </div>
                      <div className="absolute rounded-full border border-white bottom-0 right-0 dark:border-dark-violet-500 w-[10px] h-[10px] bg-green-500" />
                    </div>
                    <span className="leading-4 text-[14px] hidden text-gray-500 dark:text-gray-dark-500">
                      false
                    </span>
                  </div>
                  <div className="flex flex-col mt-2 gap-y-[6px]">
                    <div className="flex items-center gap-x-[13px]">
                      <span className="text-xs text-gray-600 dark:text-gray-dark-600">
                        Валентина Иванова
                      </span>
                      <time className="text-xs text-gray-400 dark:text-gray-dark-400">
                        сегодня в 13:02
                      </time>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <div className="rounded-2xl rounded-tl-none bg-cyan-500 p-[18px]">
                        <p className="text-xs text-white max-w-[395px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec fermentum consequat suscipit. Praesent
                          condimentum nibh sed sem ornare, ac malesuada diam
                          congue.
                        </p>
                      </div>
                      <div className="dropdown dropdown-end -translate-x-4">
                        <label
                          className="cursor-pointer dropdown-label flex items-center justify-between p-4"
                          tabIndex={0}
                        >
                          <img
                            className="mx-auto cursor-pointer"
                            src="https://wp.alithemes.com/html/frox/demos/assets/images/icons/icon-more.svg"
                            alt="more icon"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex self-end gap-x-[5px] max-w-[608px] mr-2">
                  <div className="flex flex-col mt-2 gap-y-[6px]">
                    <div className="flex items-center self-end gap-x-[13px]">
                      <span className="text-xs text-gray-600 dark:text-gray-dark-600">
                        Валентина Иванова
                      </span>
                      <time className="text-xs text-gray-400 dark:text-gray-dark-400">
                        сегодня в 13:02
                      </time>
                    </div>
                    <div className="flex items-center gap-x-3 flex-row-reverse">
                      <div className="rounded-2xl rounded-tr-none bg-violet-500 dark:bg-dark-violet-500-border p-[18px]">
                        <p className="text-xs text-gray-100 max-w-[395px] dark:text-gray-dark-1100">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec fermentum consequat suscipit. Praesent
                          condimentum nibh sed sem ornare, ac malesuada diam
                          congue.
                        </p>
                      </div>
                      <div className="dropdown dropdown-end translate-x-4">
                        <label
                          className="cursor-pointer dropdown-label flex items-center justify-between p-4"
                          tabIndex={0}
                        >
                          <img
                            className="mx-auto cursor-pointer"
                            src="https://wp.alithemes.com/html/frox/demos/assets/images/icons/icon-more.svg"
                            alt="more icon"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col cursor-pointer items-center gap-y-[10px] w-[32px]">
                    <div className="relative">
                      <div className="overflow-hidden rounded-full w-[32px] h-[32px] border-white dark:border-dark-violet-500 border-0">
                        <UIAvatar
                          className="w-full h-full object-cover"
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Pink&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Smile&skinColor=Pale"
                        />
                      </div>
                      <div className="absolute rounded-full border border-white bottom-0 right-0 dark:border-dark-violet-500 w-[10px] h-[10px] bg-red-500" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-[5px] max-w-[608px]">
                  <div className="flex flex-col cursor-pointer items-center gap-y-[10px] w-[32px]">
                    <div className="relative">
                      <div className="overflow-hidden rounded-full w-[32px] h-[32px] border-white dark:border-dark-violet-500 border-0">
                        <UIAvatar
                          className="w-full h-full object-cover"
                          src="https://avataaars.io/?avatarStyle=Transparent&amp;topType=LongHairNotTooLong&amp;accessoriesType=Prescription02&amp;hairColor=Blue&amp;facialHairType=Blank&amp;clotheType=ShirtScoopNeck&amp;clotheColor=Gray01&amp;eyeType=WinkWacky&amp;eyebrowType=UpDownNatural&amp;mouthType=Eating&amp;skinColor=Yellow"
                        />
                      </div>
                      <div className="absolute rounded-full border border-white bottom-0 right-0 dark:border-dark-violet-500 w-[10px] h-[10px] bg-green-500" />
                    </div>
                    <span className="leading-4 text-[14px] hidden text-gray-500 dark:text-gray-dark-500">
                      false
                    </span>
                  </div>
                  <div className="flex flex-col mt-2 gap-y-[6px]">
                    <div className="flex items-center gap-x-[13px]">
                      <span className="text-xs text-gray-600 dark:text-gray-dark-600">
                        Валентина Иванова
                      </span>
                      <time className="text-xs text-gray-400 dark:text-gray-dark-400">
                        сегодня в 13:02
                      </time>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <div className="rounded-2xl rounded-tl-none bg-cyan-500 p-[18px]">
                        <p className="text-xs text-white max-w-[395px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec fermentum consequat suscipit.
                        </p>
                      </div>
                      <div className="dropdown dropdown-end -translate-x-4">
                        <label
                          className="cursor-pointer dropdown-label flex items-center justify-between p-4"
                          tabIndex={0}
                        >
                          <img
                            className="mx-auto cursor-pointer"
                            src="https://wp.alithemes.com/html/frox/demos/assets/images/icons/icon-more.svg"
                            alt="more icon"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form
                className="flex items-center border border-violet-500 w-full order-last absolute bottom-0 justify-between gap-[10px] py-[14px] rounded-[10px] dark:border-violet-300 px-[22px] lg:order-first"
                action="#"
              >
                <input
                  className="w-full outline-none border-none text-xs font-normal bg-transparent text-gray-400 flex-1 dark:text-gray-dark-400"
                  type="text"
                  placeholder="Ваше сообщение"
                />
                <div className="flex items-center gap-x-6">
                  <UIButton className="w-full" variant="primary">
                    Отправить
                  </UIButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </UIBasePage>
  );
}

function UserCard({ avatarUrl }: { avatarUrl: string }) {
  return (
    <div className="bg-violet-50 dark:bg-violet-700 rounded-lg border border-violet-500 relative pr-2 dark:bg-gray-dark-100 dark:border-violet-300 py-[14px] px-2">
      <div className="flex gap-x-[11px]">
        <div className="flex flex-col cursor-pointer items-center gap-y-[10px] w-[32px]">
          <div className="relative">
            <div className="overflow-hidden rounded-full w-[32px] h-[32px] border-white dark:border-dark-violet-500 border-2">
              <UIAvatar
                className="inline-block h-full w-full"
                src={avatarUrl}
              />
            </div>
            <div className="absolute rounded-full border border-white bottom-0 right-0 dark:border-dark-violet-500 w-[10px] h-[10px] bg-green-500-500" />
          </div>
          <span className="leading-4 text-[14px] hidden text-gray-500 dark:text-gray-dark-500">
            false
          </span>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-[13px]">
            <h4 className="text-gray-800 font-semibold leading-4 dark:text-gray-dark-1100 text-[14px]">
              Надежда Иванова
            </h4>
            <time className="text-xs text-gray-400 dark:text-gray-dark-400">
              сегодня в 13:02
            </time>
          </div>
          <span className="text-xs text-gray-400 dark:text-gray-dark-500">
            Начальник DevRel отдела
          </span>

          <p className="text-xs text-gray-500 dark:text-gray-dark-400 max-w-[261px]">
            Привет, можешь кинуть мне фотки с последнего митапа? Я их чуть
            подре...
          </p>
        </div>
      </div>
      <div className="dropdown dropdown-end absolute right-0 top-0">
        <label
          className="cursor-pointer dropdown-label flex items-center justify-between p-4"
          tabIndex={0}
        >
          <img
            className="mx-auto cursor-pointer"
            src="https://wp.alithemes.com/html/frox/demos/assets/images/icons/icon-more.svg"
            alt="more icon"
          />
        </label>
      </div>
    </div>
  );
}
