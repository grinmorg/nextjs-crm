import Link from "next/link";
import { ROUTES } from "../constants/routes";
import { clsx } from "clsx";

export function UILogo({ className }: { className?: string }) {
  return (
    <Link
      className={clsx(className, "flex items-end gap-1")}
      href={ROUTES.HOME}
    >
      <img alt="CRAB" className="w-10 md:w-12" src="/dist/images/logo.svg" />
      <span className="leading-none hidden md:inline"> CRAB </span>
    </Link>
  );
}
