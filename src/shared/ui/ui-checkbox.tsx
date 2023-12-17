import React, { InputHTMLAttributes } from "react"

export type Props = {
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function UICheckbox({ label, ...props }: Props) {
    const id = React.useId();
    return (

        <label htmlFor={id} className="inline-flex gap-2 cursor-pointer items-center">
            <div className="relative">
                <input type="checkbox" id={id} className="peer sr-only"  {...props} />
                <div className="h-5 w-9 min-w-[36px] min-h-[20px] rounded-full bg-gray-100 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-violet-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-0 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50"></div>
            </div>
            {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
        </label>
    )
}