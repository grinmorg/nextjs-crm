import clsx from "clsx";
import { UILogo } from "../ui-logo";
import { MenuAsideItem } from "@/shared/interfaces";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "@/shared/context";

interface Props {
  menu: MenuAsideItem[];
}

export function UISidebar({ menu }: Props) {
  const router = useRouter();
  const { showIntro, setShowIntro } = useAppContext();

  return (
    <div className="js-guide-step-1 w-[50px] md:w-[200px] pt-6 pb-10 bg-white dark:bg-violet-950 flex flex-col border-r-[3px] border-violet-500 border-opacity-20">
      <div className="flex justify-center mb-6">
        <UILogo className="md:-ml-4" />
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          {menu.map((item) => (
            <li key={item.href}>
              <SidebarNavItem
                item={item}
                active={router.pathname === item.href}
              />
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setShowIntro(true)}
        className="mt-auto flex items-center gap-2 h-[40px] md:h-[50px] px-[12px] md:px-6 text-gray-500 dark:text-violet-300"
      >
        <div className="min-w-[18px] md:w-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"
              ></path>
              <circle cx="12" cy="16" r="1" fill="currentColor"></circle>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
              ></path>
            </g>
          </svg>
        </div>
        <div className="hidden md:flex grow items-center gap-2 justify-between">
          <span className="text-base text-gray-800 dark:text-white">
            Помощь
          </span>
        </div>
      </button>
    </div>
  );
}

function SidebarNavItem({
  item,
  className,
  active,
}: {
  item: MenuAsideItem;
  className?: string;
  active: boolean;
}) {
  return (
    <Link
      href={item.href}
      className={clsx(
        active
          ? "bg-gradient-to-r from-violet-100 dark:from-violet-900 border-l-4 border-violet-700 text-violet-600 font-semibold"
          : "text-gray-500 dark:text-violet-300",
        "flex items-center gap-2 h-[40px] md:h-[50px] px-[12px] md:px-6",
        className,
      )}
    >
      <div className="min-w-[18px] md:w-6">{item.icon}</div>
      <div className="hidden md:flex grow items-center gap-2 justify-between">
        <span className="text-base text-gray-800 dark:text-white">
          {item.label}
        </span>
      </div>
    </Link>
  );
}
