import { Popover } from "@headlessui/react";
import { ReactNode } from "react";

export function UIPopover({ children }: { children: ReactNode }) {
  return (
    <Popover className="shrink text-end">
      {({ open }) => (
        <>
          <Popover.Button className="text-gray-800 outline-none" type="button">
            <svg
              className="h-6 w-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={1} />
              <circle cx={19} cy={12} r={1} />
              <circle cx={5} cy={12} r={1} />
            </svg>
          </Popover.Button>
          <Popover.Panel className="bg-white shadow rounded py-2 px-1.5 min-w-[10rem] absolute right-2">
            {children}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
