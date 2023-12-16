import { UIButton } from "@/shared/ui/ui-button";
import { UIModal } from "@/shared/ui/ui-modal";
import { UIPopover } from "@/shared/ui/ui-popover";
import { ModalSendQuiz } from "./modal-send-quiz";

export function AllQuizCards() {
    return (
        <div className="grid grid-cols-12 gap-6 mt-2">
            <QuizCard clicks={12} answers={21} />
            <QuizCard clicks={8} answers={2} />
            <QuizCard clicks={92000} answers={29210} />
        </div>
    )
}


function QuizCard({ clicks = 0, answers = 0 }: { clicks?: number, answers?: number }) {
    return (
        <div className="lg:col-span-4 col-span-12">
            <div className="bg-white rounded">
                <div className="p-6 relative">
                    <div className="flex">
                        <div className="grow">
                            <div className="flex">
                                <div className="grow">
                                    <h4 className="tetx-lg text-gray-800 mb-1 mt-0 font-semibold">
                                        Опрос для хакатона "DevRel Hack 2.0"
                                    </h4>
                                    <p className="text-gray-400 pb-0 text-sm mb-4 font-medium">
                                        Опрес с целью привлечь новых участников в наше сообщество после хакатона
                                    </p>
                                </div>
                            </div>
                        </div>

                        <QuizCardPopover />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* item */}
                        <div className="flex items-center justify-between py-6">
                            <div>
                                <div className="inline-flex items-center justify-center h-12 w-12 bg-sky-500/10 rounded me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305c1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062"></path><path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305c-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433"></path></g></svg>
                                </div>
                            </div>
                            <div className="grow">
                                <h3 className="text-xl text-gray-800">{clicks.toLocaleString()}</h3>
                                <p className="text-muted mb-0">Переходов</p>
                            </div>
                        </div>

                        {/* item */}
                        <div className="flex items-center py-6">
                            <div>
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
                            <div className="flex-grow-1">
                                <h3 className="text-xl text-gray-800">{answers.toLocaleString()}</h3>
                                <p className="text-muted mb-0">Ответов</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <UIButton className="w-full mt-4" variant="secondary">
                            Выгрузить данные
                        </UIButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

function QuizCardPopover() {
    return (
        <UIPopover>
            <UIModal button={<button
                className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 me-2" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305c1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062"></path><path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305c-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433"></path></g></svg>
                <span>Показать ссылку и QR</span>
            </button>}>
                <ModalSendQuiz />
            </UIModal>
            <hr className="my-2" />
            <a
                className="flex items-center py-1.5 px-5 text-base text-red-500 hover:bg-slate-100 rounded"
                href="#"
            >
                <svg
                    className="h-4 w-4 me-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1={10} y1={11} x2={10} y2={17} />
                    <line x1={14} y1={11} x2={14} y2={17} />
                </svg>
                <span>Удалить</span>
            </a>
        </UIPopover>
    )
}