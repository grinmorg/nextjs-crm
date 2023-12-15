import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId } from "react";

export type UITextFieldProps = {
  className?: string;
  label?: string;
  required?: boolean;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export function UITextField({
  className,
  error,
  label,
  required,
  inputProps,
}: UITextFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-800 dark:text-white"
        >
          {label}
          {required && <small> *</small>}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          error ? "border-red-300" : "border-gray-300 dark:border-gray-700",
          "py-2 px-4 leading-6 block w-full border rounded text-sm dark:text-white focus:border-violet-500 dark:focus:border-violet-300 focus:ring-0 outline-none dark:bg-violet-900",
        )}
      />
      {error && <div className="text-red-500 text-xs">{error}</div>}
    </div>
  );
}
