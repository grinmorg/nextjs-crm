import { SignOutButton } from "@/features/auth";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { UIThemeToggle } from "../ui-theme-toggle";
import { UIAvatar } from "../ui-avatar";
import { UIButton } from "../ui-button";
import { useAppContext } from "@/shared/context";
import { toast } from "react-toastify";

export function UIHeader() {

  const { isNewsletter, setIsNewsletter } = useAppContext()

  const sendNewsletter = () => {
    setIsNewsletter(false);
    toast.success('Сообщения отправлены');
  }

  return (
    <header className="border-b-[3px] border-violet-500 border-opacity-20 bg-white dark:bg-violet-950 py-3 px-6">
      <div className="flex gap-2 ">
        <div className="flex gap-4 items-center">
          <UIThemeToggle />
        </div>
        {isNewsletter && <div className="ml-auto flex gap-2">
          <p className="bg-green-500 rounded p-2 text-white">Выберите участников для рассылки</p>
          <UIButton onClick={sendNewsletter} variant="secondary">Отправить</UIButton>
        </div>}

        <div className="ml-auto flex gap-4 items-center">
          {/* Notify */}
          <button className="w-6 h-6 text-gray-500 dark:text-violet-300 relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M9.107 2.674A6.52 6.52 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.775 25.775 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002M7.5 19c.655 1.748 2.422 3 4.5 3c.245 0 .485-.017.72-.05M16.5 19a4.498 4.498 0 0 1-1.302 1.84"
              ></path>
            </svg>

            <span className="w-2 h-2 bg-violet-500 rounded-full absolute top-0 left-1 text-white text-xs animate-ping"></span>
            <span className="w-2 h-2 bg-violet-500 rounded-full absolute top-0 left-1 text-white text-xs"></span>
          </button>

          {/* Settings */}
          <button className="w-6 h-6 text-gray-500 dark:text-violet-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"></circle>
                <path
                  strokeLinecap="round"
                  d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453c.208-.36.369-.639.489-.873m-.81-2.766a1.617 1.617 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362c.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873"
                ></path>
              </g>
            </svg>
          </button>

          {/* Avatar */}
          <Popover className="relative h-8 w-8">
            {({ open }) => (
              <>
                <Popover.Button>
                  <UIAvatar src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-1 w-[200px] max-w-xs -translate-x-1/2 transform px-4 sm:px-0">
                    <div className="overflow-hidden rounded-bl-lg shadow-lg ring-1 ring-black/5">
                      <div className="relative grid gap-8 bg-white dark:bg-violet-950 p-7 lg:grid-cols-2">
                        <SignOutButton />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
}
