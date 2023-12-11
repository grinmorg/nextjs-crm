import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

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
          primary:
            "text-white bg-violet-500 hover:bg-violet-600 transition-all disabled:opacity-50 shadow shadow-violet-500/30 ",
          secondary:
            "text-violet-500 border border-violet-500 disabled:opacity-50 transition-all hover:shadow-lg hover:bg-violet-500 hover:text-white hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40",
          danger:
            "border border-red-500 text-red-500 transition-all hover:shadow-lg hover:bg-red-500 hover:text-white hover:shadow-red-500/30 focus:shadow-none focus:outline focus:outline-red-500/40 disabled:opacity-50",
        }[variant],
      )}
    />
  );
}
