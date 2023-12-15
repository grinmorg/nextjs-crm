import { UIAvatar } from "@/shared/ui/ui-avatar";
import { UIButton } from "@/shared/ui/ui-button";
import UIFilter from "@/shared/ui/ui-filter";
import { UIModal } from "@/shared/ui/ui-modal";
import { UISelectField, UISelectOption } from "@/shared/ui/ui-select-field";
import { UITextField } from "@/shared/ui/ui-text-field";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { ModalSendEmail } from "./modal-send-email";

const sort = [
    { name: "По алфавиту ↑" },
    { name: "По алфавиту ↓" },
    { name: "По дате добавления ↑" },
    { name: "По дате добавления ↓" },
];

export function AllContect() {

    const [selected, setSelected] = React.useState<UISelectOption>(sort[0]);

    return (
        <>
            <div className="flex justify-between gap-2 mb-4">
                <UITextField
                    inputProps={{
                        type: "text",
                        placeholder: "Поиск",
                    }}
                />

                <div className="flex items-center gap-4">
                    <UIFilter>
                        <div className="bg-white dark:bg-violet-950 p-4">Панель</div>
                    </UIFilter>

                    <UISelectField
                        className="min-w-[220px]"
                        options={sort}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>
            </div >

            <div className="flex flex-col gap-2 mb-4">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className="flex justify-center">
                <UIButton className="w-full" variant="secondary">
                    Показать ещё
                </UIButton>
            </div>
        </>
    )
}

function Item() {
    return (
        <Disclosure>
            <div className="bg-white dark:bg-violet-950 rounded-xl">
                <div className="px-6 w-full">
                    <div className="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
                        <Disclosure.Button className="flex-1 lg:me-8 flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2 py-6">
                            {/* Base */}
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300"
                                    id="task1"
                                />
                                <UIAvatar
                                    className="w-8 h-8"
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow"
                                />
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Валерий Иванов
                                </p>
                            </div>

                            {/* Tags */}
                            <div>
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-500">
                                    Frontend
                                </span>
                            </div>

                            {/* Desc */}
                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-xs font-semibold bg-teal-500/10 text-teal-500">
                                Кидает глупые мемы
                            </span>
                        </Disclosure.Button>
                        {/* Socials */}
                        <div className="flex items-center gap-4">
                            <UIModal button={<button
                                className="w-6 text-gray-500 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-900 transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-width="1.5"
                                            d="M10.5 22v-2m4 2v-2"
                                        ></path>
                                        <path
                                            fill="currentColor"
                                            d="M11 20v.75h.75V20H11Zm-9.75-8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 4a.75.75 0 0 0-1.5 0h1.5ZM14 19.25a.75.75 0 0 0 0 1.5v-1.5Zm7.25-8a.75.75 0 0 0 1.5 0h-1.5Zm-3.75-6a.75.75 0 0 0 0 1.5v-1.5ZM22.75 15a.75.75 0 0 0-1.5 0h1.5ZM7 5.25a.75.75 0 0 0 0 1.5v-1.5Zm2 14a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5H4.233v1.5H11v-1.5Zm-6.767 0c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355v-1.5ZM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6v1.5Zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5v-1.5ZM10.25 17v3h1.5v-3h-1.5Zm0-5.75V17h1.5v-5.75h-1.5Zm-7.5.75v-.75h-1.5V12h1.5Zm0 5.395V16h-1.5v1.395h1.5Zm17.043 1.855H14v1.5h5.793v-1.5Zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325h-1.5Zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5h1.5ZM21.25 15v2.425h1.5V15h-1.5ZM7 6.75h11v-1.5H7v1.5Zm2 14h6v-1.5H9v1.5Z"
                                        ></path>
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-width="1.5"
                                            d="M5 16h3m8-6.116V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 0 1 1.755.156l.08.03c.554.214 1.16.254 1.737.115a.439.439 0 0 1 .542.427v2.221a.513.513 0 0 1-.393.499l-.066.016a3.199 3.199 0 0 1-1.9-.125a3.2 3.2 0 0 0-1.755-.156L16 5.41Z"
                                        ></path>
                                    </g>
                                </svg>
                            </button>}>
                                <ModalSendEmail />
                            </UIModal>

                            <a
                                href="https://t.me/grinmorg"
                                target="_blank"
                                className="w-5 text-gray-500 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-900 transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                        d="M20.628 9.094c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884L10.24 4.927M5.575 6.482c-2.082.694-3.123 1.041-3.439 1.804a1.8 1.8 0 0 0-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362l1.566-4.696M6 18l3.75-3.75M21 3l-8.5 8.5"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 h-0 opacity-0"
                    enterTo="transform scale-100 h-auto opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 h-auto opacity-100"
                    leaveTo="transform scale-95 h-0 opacity-0"
                >
                    <Disclosure.Panel>
                        <div className="p-6 w-full">
                            <UITextField
                                className="max-w-xs"
                                label="Адрес"
                                inputProps={{
                                    type: "text",
                                    placeholder: "Санкт-Петербург, Главная 9",
                                }}
                            />
                        </div>
                    </Disclosure.Panel>
                </Transition>
            </div>
        </Disclosure>
    );
}
