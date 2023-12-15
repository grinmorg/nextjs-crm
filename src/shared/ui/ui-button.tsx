import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { STYLES } from "../constants/styles";

type UIButtonVariant = "primary" | "secondary" | "danger";
export type UIButtonProps = {
  variant: UIButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UIButton({ className, variant, ...props }: UIButtonProps) {
  return (
    <button
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
