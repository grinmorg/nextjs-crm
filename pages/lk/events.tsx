import { STYLES } from "@/shared/constants/styles";
import UIBasePage from "@/shared/ui/layout/ui-base-page";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { UIAvatar } from "@/shared/ui/ui-avatar";
import { UIButton } from "@/shared/ui/ui-button";
import { UILinkButton } from "@/shared/ui/ui-link-button";
import { ROUTES } from "@/shared/constants/routes";
import { useAppContext } from "@/shared/context";

export default function Page() {

  let [isOpen, setIsOpen] = React.useState(false)

  const { setIsNewsletter } = useAppContext();

  const handleClick = (arg: any) => { // bind with an arrow function
    setIsOpen(true)
  }

  return (
    <UIBasePage>
      <div className="mb-4 bg-white dark:bg-violet-950 p-4 rounded-xl">
        <div className="h-[500px]">
          <FullCalendar
            height="100%"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            eventClick={handleClick}
            locale="ru"
            buttonText={{
              today: 'Сегодня',
              month: 'Месяц',
              week: 'Неделя',
              day: 'День',
              list: 'Список'
            }}
            firstDay={1}
            events={[
              { title: 'DevRel Hack 2.0', start: '2023-12-15', end: '2023-12-18' },
              { title: 'Митап 1', date: '2023-12-28' },
              { title: 'Митап 2', date: '2023-12-30' }
            ]}
          />
        </div>

        <UIButton
          className="w-full mt-4"
          variant="secondary"
        >
          Добавить событие
        </UIButton>
      </div>

      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`max-w-lg w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Подробности мероприятия DevRel Hack 2.0
                  </Dialog.Title>

                  <div className="mb-4 flex flex-wrap gap-2 items-center border-b pb-2">
                    <p>Старт:</p> <span className="text-sm text-gray-500">15.12.2023 14:00</span>
                  </div>
                  <div className="mb-4 flex flex-wrap gap-2 items-center border-b pb-2">
                    <p>Завершение:</p> <span className="text-sm text-gray-500">17.12.2023 22:00</span>
                  </div>

                  <p>Описание:</p>
                  <p className="mb-4 border-b pb-4 text-sm text-gray-500">
                    🚀 Присоединяйся к DevRel Hack 2.0 с 15 по 17 декабря: 15 декабря подключайся к митапу с классными спикерами и профессионалами ИТ-сообщества, после чего принимай участие в онлайн-хакатоне от Codenrock!
                  </p>

                  <p className="">Контакты организатора:</p>

                  <div className="flex gap-4 flex-wrap py-2 justify-between">
                    <div className="mb-2">
                      <a href="#" className="flex gap-0.5 text-gray-400 text-sm outline-none">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        grinmorg@gamil.com
                      </a>
                    </div>
                    <div className="mb-2">
                      <a href="#" className="flex gap-0.5 text-gray-400 text-sm">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        +00 123-456-789
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-between">
                    <div className="">
                      <UIAvatar
                        className="w-12 h-12 me-3"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow"
                      />
                      <div className="grow">
                        <h4 className="tetx-lg text-gray-800 mb-1 mt-0 font-semibold">
                          Надежда Иванова
                        </h4>
                        <p className="text-gray-400 pb-0 text-xs">
                          Начальник DevRel отдела
                        </p>
                      </div>
                    </div>


                    <div className="flex items-end">
                      <div className="w-full">
                        <div className="inline-flex items-center justify-center h-12 w-12 bg-green-500/10 rounded me-3">
                          <svg
                            className="text-green-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full">
                        <h3 className="text-xl text-gray-800">210</h3>
                        <p className="text-sm mb-0">Приглашено</p>
                      </div>
                    </div>
                  </div>


                  <div className="flex gap-2">
                    <UIButton
                      className="w-full mt-4"
                      variant="primary"
                    >
                      Посмотреть статистику
                    </UIButton>
                    <UILinkButton
                      onClick={() => setIsNewsletter(true)}
                      href={ROUTES.LK_CONTACTS}
                      className="w-full mt-4"
                      variant="secondary"
                    >
                      Создать рассылку
                    </UILinkButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </UIBasePage >
  );
}