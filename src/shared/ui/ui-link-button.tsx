import Link from "next/link";
import { cn } from "../lib/utils";
import { STYLES } from "../constants/styles";
import clsx from "clsx";

type UIButtonVariant = "primary" | "secondary" | "danger";
export type UILinkProps = { variant: UIButtonVariant } & Parameters<
  typeof Link
>[0];

export function UILinkButton({ variant, className, ...props }: UILinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "px-4 py-2 rounded cursor-pointer flex gap-2 items-center justify-center",
        {
          primary: STYLES.BUTTONS.PRIMARY,
          secondary: STYLES.BUTTONS.SECONDARY,
          danger: STYLES.BUTTONS.DANGER,
        }[variant],
      )}
    />
  );
}
