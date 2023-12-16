import Link from "next/link";
import { cn } from "../lib/utils";

export type UILinkProps = {} & Parameters<typeof Link>[0];

export function UILink({ className, ...props }: UILinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        className,
        "p-1 text-violet-500 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-500 cursor-pointer font-semibold transition",
      )}
    />
  );
}
