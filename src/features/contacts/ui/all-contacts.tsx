import { UIAvatar } from "@/shared/ui/ui-avatar";
import { UIButton } from "@/shared/ui/ui-button";
import UIFilter from "@/shared/ui/ui-filter";
import { UIModal } from "@/shared/ui/ui-modal";
import { UISelectField, UISelectOption } from "@/shared/ui/ui-select-field";
import { UITextField } from "@/shared/ui/ui-text-field";
import { Disclosure, Tab, Transition } from "@headlessui/react";
import React from "react";
import { ModalSendEmail } from "./modal-send-email";
import { ModalShowReviews } from "./modal-show-reviews";
import { useGetMembers } from "../model/use-get-members";
import { IMember } from "@/shared/interfaces";
import { UILink } from "@/shared/ui/ui-link";
import { UICheckbox } from "@/shared/ui/ui-checkbox";
import { ModalShowEvents } from "./modal-show-events";
import { getFormattingDate } from "@/shared/lib/utils";
import { toast } from "react-toastify";

const sort = [
  { name: "По алфавиту ↑" },
  { name: "По алфавиту ↓" },
  { name: "По дате добавления ↑" },
  { name: "По дате добавления ↓" },
];

export function AllContacts() {

  const [selected, setSelected] = React.useState<UISelectOption>(sort[0]);

  return (
    <Tab.Group>

      <div className="flex justify-between items-center gap-4 mb-4">
        <UILink href="#">Создать рассылку</UILink>
        <UILink href="#">Создать группу</UILink>
        <UILink href="#">Добавить участника</UILink>
      </div>

      <div className="flex justify-between gap-2 mb-4">

        <Tab.List className="flex gap-2 mb-2">
          <Tab>
            {({ selected }) => (
              <UIButton variant={selected ? "primary" : "secondary"}>Общие</UIButton>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <UIButton variant={selected ? "primary" : "secondary"}>Личные</UIButton>
            )}
          </Tab>
          <Tab>
            {({ selected }) => (
              <UIButton variant={selected ? "primary" : "secondary"}>Группы</UIButton>
            )}
          </Tab>
        </Tab.List>

        <div className="flex items-center gap-4">
          <UITextField
            inputProps={{
              type: "text",
              placeholder: "Поиск",
            }}
          />

          <UIFilter>
            <FilterPopover />
          </UIFilter>

          <UISelectField
            className="min-w-[220px]"
            options={sort}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>

      <Tab.Panels>
        <Tab.Panel><TabPersonal /></Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

function TabPersonal() {

  const { members, getMembers, isPending } = useGetMembers();

  React.useEffect(() => {
    getMembers();
  }, [])


  return (
    <>

      <div className="flex flex-col gap-2 mb-4">
        {members?.map(item => <Item key={item.id} item={item} />)}
      </div>

      {/* {members && members?.length > 4 && <div className="flex justify-center">
        <UIButton className="w-full" variant="secondary">
          Показать ещё
        </UIButton>
      </div>} */}

    </>
  );
}

function Item({ item }: { item: IMember }) {
  return (
    <Disclosure>
      <div className="bg-white dark:bg-violet-950 rounded-xl">
        <div className="px-6 w-full">
          <div className="flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 w-4 h-4 me-4"
              id="task1"
            />
            <button onClick={() => toast.error('Скоро заработает')} className="w-4 h-4 text-gray-500 dark:text-violet-300 me-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="m14.36 4.079l.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561L12 6.439m7.921 3.2l-5.26 5.262L11.56 18l-.16.161c-.578.577-.867.866-1.185 1.114a6.554 6.554 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0l-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876l-1.876-1.876m0 0l1.094-3.281c.258-.775.387-1.162.56-1.526c.205-.43.456-.836.749-1.211c.248-.318.537-.607 1.114-1.184L8.5 9.939"
                ></path>
              </svg>
            </button>
            <Disclosure.Button className="flex-1 lg:me-8 flex flex-wrap lg:flex-nowrap items-center sm:justify-between gap-y-2 py-6">
              {/* Base */}
              <div className="flex items-center gap-4">

                <UIAvatar
                  className="w-8 h-8"
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                />
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {item.name}
                </p>
              </div>

              <div className="flex gap-2">
                {/* Tags */}
                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-sm font-semibold bg-cyan-500/10 text-cyan-500">
                  {item.job}
                </span>
                {/* Desc */}
                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-md text-sm font-semibold bg-teal-500/10 text-teal-500">
                  Middle
                </span>
              </div>


            </Disclosure.Button>
            {/* Socials */}
            <div className="flex items-center gap-4">
              <UIModal
                button={
                  <button className="w-6 text-gray-500 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-900 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="none">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M10.5 22v-2m4 2v-2"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M11 20v.75h.75V20H11Zm-9.75-8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 4a.75.75 0 0 0-1.5 0h1.5ZM14 19.25a.75.75 0 0 0 0 1.5v-1.5Zm7.25-8a.75.75 0 0 0 1.5 0h-1.5Zm-3.75-6a.75.75 0 0 0 0 1.5v-1.5ZM22.75 15a.75.75 0 0 0-1.5 0h1.5ZM7 5.25a.75.75 0 0 0 0 1.5v-1.5Zm2 14a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4-1.5H4.233v1.5H11v-1.5Zm-6.767 0c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355v-1.5ZM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6v1.5Zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5v-1.5ZM10.25 17v3h1.5v-3h-1.5Zm0-5.75V17h1.5v-5.75h-1.5Zm-7.5.75v-.75h-1.5V12h1.5Zm0 5.395V16h-1.5v1.395h1.5Zm17.043 1.855H14v1.5h5.793v-1.5Zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325h-1.5Zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5h1.5ZM21.25 15v2.425h1.5V15h-1.5ZM7 6.75h11v-1.5H7v1.5Zm2 14h6v-1.5H9v1.5Z"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M5 16h3m8-6.116V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 0 1 1.755.156l.08.03c.554.214 1.16.254 1.737.115a.439.439 0 0 1 .542.427v2.221a.513.513 0 0 1-.393.499l-.066.016a3.199 3.199 0 0 1-1.9-.125a3.2 3.2 0 0 0-1.755-.156L16 5.41Z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                }
              >
                <ModalSendEmail />
              </UIModal>

              {item.tg && <a
                href={`https://t.me/${item.tg}`}
                target="_blank"
                className="w-5 text-gray-500 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-900 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M20.628 9.094c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884L10.24 4.927M5.575 6.482c-2.082.694-3.123 1.041-3.439 1.804a1.8 1.8 0 0 0-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362l1.566-4.696M6 18l3.75-3.75M21 3l-8.5 8.5"
                  ></path>
                </svg>
              </a>}

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
            <div className="p-4 flex items-end justify-between">
              <UITextField
                className="max-w-xs"
                label="Город"
                inputProps={{
                  value: item.city,
                  type: "text",
                  placeholder: "Санкт-Петербург",
                  disabled: true
                }}
              />

              <UICheckbox disabled checked={true} label="Не против получать информацию о новых мероприятиях и вакансиях" />


              <p>Дата добавления: <span className="text-gray-500 taxt-xs">{getFormattingDate(item.created_at)}</span></p>


              <div className="flex items-center gap-2">
                <UIModal
                  button={<UIButton variant="secondary">Посещенные события</UIButton>}
                >
                  <ModalShowEvents id={item.id} />
                </UIModal>

                <UIModal
                  button={<UIButton variant="primary">Отзывы участника</UIButton>}
                >
                  <ModalShowReviews id={item.id} />
                </UIModal>
              </div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </div>
    </Disclosure>
  );
}


function FilterPopover() {
  return (
    <div className="bg-white dark:bg-violet-950 p-4 grid grid-cols-12 gap-4">
      <div className="lg:col-span-4 col-span-6">
        <UITextField
          className="mb-4"
          inputProps={{
            type: "text",
            placeholder: "Теги",
          }}
        />

        <UICheckbox label="Есть почта" />
      </div>
      <div className="lg:col-span-4 col-span-6">
        <UITextField
          className="mb-4"
          inputProps={{
            type: "text",
            placeholder: "Статус",
          }}
        />

        <UICheckbox label="Есть телеграм" />
      </div>
      <div className="lg:col-span-4 col-span-6">
        <UITextField
          className="mb-4"
          inputProps={{
            type: "text",
            placeholder: "Город",
          }}
        />

        <UICheckbox label="Оставлял отзывы" />
      </div>
    </div>
  )
}
