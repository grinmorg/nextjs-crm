import clsx from "clsx";
import Link from "next/link";

export type UILinkProps = {} & Parameters<typeof Link>[0];

export function UILink({ className, ...props }: UILinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-violet-500 hover:text-violet-600 cursor-pointer font-semibold",
      )}
    />
  );
}
