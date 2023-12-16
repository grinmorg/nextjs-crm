"use client";
import clsx from "clsx";
import { PropsWithRef, SelectHTMLAttributes, useId } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export type UISelectOption = {
  value?: string;
  name: string;
};

export type UISelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  options?: UISelectOption[];
  selected: UISelectOption; // Selected value
  setSelected: React.Dispatch<React.SetStateAction<UISelectOption>>; // setSelected callback
};

export function UISelectField({
  className,
  error,
  label,
  selected,
  setSelected,
  options,
}: UISelectFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-800 dark:text-white"
        >
          {label}
        </label>
      )}
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative bg-white rounded border border-gray-300 dark:border-gray-700 dark:bg-violet-900">
          <Listbox.Button className="relative w-full   py-2 pl-4 min-h-[40px] pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-300 sm:text-sm">
            <span className="block truncate dark:text-white">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          {options && (
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-violet-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {options.map((item, itemIdx) => (
                  <Listbox.Option
                    key={itemIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active
                        ? "bg-amber-100 text-amber-900"
                        : "text-gray-800 dark:text-white"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? "font-medium" : "font-normal"
                            }`}
                        >
                          {item.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          )}
        </div>
      </Listbox>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
