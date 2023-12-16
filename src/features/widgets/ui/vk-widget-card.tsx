import { UIPopover } from "@/shared/ui/ui-popover";
import React from "react";

export function VkWidgetCard() {


    return (
        <>
            <div className="lg:col-span-4 col-span-12">
                <div className="bg-white rounded">
                    <div className="p-6 relative">
                        <div className="flex">
                            <div className="grow">
                                <div className="flex">
                                    <div className="grow">
                                        <iframe name="fXD98781" id="vkwidget2" src="https://vk.com/widget_post.php?app=0&amp;width=100%25&amp;_ver=1&amp;owner_id=-354372&amp;post_id=195098&amp;hash=hq2bEbR7S0WjmGEFOgY5yQIV8W7T&amp;from=undefined&amp;preview=1&amp;startWidth=510&amp;url=https%3A%2F%2Fvk.com%2Fheadhunter%3Fw%3Dwall-354372_195098&amp;referrer=&amp;title=%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B9%20%D0%9C%D0%BE%D1%80%D0%B3%D0%B0%D1%87%D0%B5%D0%B2&amp;18c744ac842" width="100%" height="300"></iframe>
                                    </div>
                                </div>
                            </div>
                            <GenerateLinkPopover />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
                <div className="bg-white rounded">
                    <div className="p-6 relative">
                        <div className="flex">
                            <div className="grow">
                                <div className="flex">
                                    <div className="grow">
                                        <iframe name="fXD68a8a" src="https://vk.com/widget_post.php?app=0&amp;width=100%25&amp;_ver=1&amp;owner_id=-34168005&amp;post_id=725847&amp;hash=PBQAcUdhJI6jhWhgZSdrRfDSYPj6&amp;from=undefined&amp;preview=1&amp;startWidth=510&amp;url=https%3A%2F%2Fvk.com%2Fprobizportal%3Fw%3Dwall-34168005_725847&amp;referrer=&amp;title=%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D0%B8%D0%B9%20%D0%9C%D0%BE%D1%80%D0%B3%D0%B0%D1%87%D0%B5%D0%B2&amp;18c74514bbe" width="100%" height="300"></iframe>
                                    </div>
                                </div>
                            </div>
                            <GenerateLinkPopover />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function GenerateLinkPopover() {
    return (
        <UIPopover>
            <a
                className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
                href="#"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 me-2.5"
                    viewBox="0 0 24 24"
                >
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                        <path d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121c-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122c.3.3.662.497 1.121.627" />
                        <path strokeLinejoin="round" d="M12 2v13m0 0l-3-3.5m3 3.5l3-3.5" />
                    </g>
                </svg>
                <span>Выгрузить</span>
            </a>

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
    );
}
