import { Popover, Transition } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import { Fragment, ReactNode } from "react";

export default function UIFilter({ children }: { children: ReactNode }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                        ${
                          open
                            ? "text-violet-500"
                            : "text-gray-800 dark:text-violet-300"
                        }
                        group bg-white border-gray-300 dark:border-gray-700 py-2 px-4 leading-6 flex items-center w-full border rounded text-sm dark:text-white focus:border-violet-500 dark:focus:border-violet-300 focus:ring-0 outline-none dark:bg-violet-900
                        `}
          >
            <span>Фильтры</span>
            <AdjustmentsHorizontalIcon
              className={`${
                open ? "text-violet-500" : "text-gray-500 dark:text-white"
              }
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-violet-500/80`}
              aria-hidden="true"
            />
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
            <Popover.Panel className="absolute right-0 z-10 mt-4 w-screen max-w-sm px-4 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                {children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
