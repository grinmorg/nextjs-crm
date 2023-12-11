import clsx from "clsx";
import { ReactNode } from "react";
import { UILogo } from "../ui-logo";

interface SidebarItem {
    icon: ReactNode;
    title: string;
    active?: boolean;
}

export function UISidebar() {
    const items: SidebarItem[] = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"


                    viewBox="0 0 24 24"
                >
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                        <path
                            stroke-linecap="round"
                            d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3"
                        ></path>
                        <path d="M2.5 6.5c0-1.886 0-2.828.586-3.414C3.672 2.5 4.614 2.5 6.5 2.5c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586C2.5 9.328 2.5 8.386 2.5 6.5Zm11 11c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586c-.586-.586-.586-1.528-.586-3.414Zm-11 0c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586C2.5 20.328 2.5 19.386 2.5 17.5Z"></path>
                    </g>
                </svg>
            ),
            title: "Виджеты",
            active: true
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M22 22H2"></path><path d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 22V9M9 22V5c0-1.414 0-2.121.44-2.56C9.878 2 10.585 2 12 2c1.414 0 2.121 0 2.56.44C15 2.878 15 3.585 15 5v0"></path><path stroke-linecap="round" d="M9 22V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V16m0 6v-2.25"></path></g></svg>
            ),
            title: "Статистика",
            active: false
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path d="M7 4V2.5M17 4V2.5"></path><path stroke-linejoin="round" d="m9 14.5l1.5-1.5v4"></path><path d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Zm8.5-7H10.75M2 9h3.875"></path><path d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></path></g></svg>
            ),
            title: "Календарь",
            active: false
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224"></path><path stroke-linecap="round" d="M8 7h8m-8 3.5h5m0 5.5v3.53c0 .276 0 .414-.095.47c-.095.056-.224-.006-.484-.13l-1.242-.59c-.088-.04-.132-.062-.179-.062c-.047 0-.091.021-.179.063l-1.242.59c-.26.123-.39.185-.484.129C9 19.944 9 19.806 9 19.53v-3.08"></path><path stroke-linecap="round" d="M10 22c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"></path></g></svg>
            ),
            title: "Контакты",
            active: false
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.36 4.079l.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561L12 6.439m7.921 3.2l-5.26 5.262L11.56 18l-.16.161c-.578.577-.867.866-1.185 1.114a6.554 6.554 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0l-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876l-1.876-1.876m0 0l1.094-3.281c.258-.775.387-1.162.56-1.526c.205-.43.456-.836.749-1.211c.248-.318.537-.607 1.114-1.184L8.5 9.939"></path></svg>
            ),
            title: "Инструменты",
            active: false
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-width="1.5" d="M17 3.338A9.954 9.954 0 0 0 12 2C6.477 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5"></path><path stroke-linejoin="round" stroke-width="2" d="M8 12h.009m3.982 0H12m3.991 0H16"></path></g></svg>
            ),
            title: "Чат",
            active: false
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 12h1m7 0h-4m4-4h-1m-3 0H8m0 8h5M3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></path></svg>
            ),
            title: "Новости",
            active: false
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592c-.146.188-.271.39-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558c-.188.146-.39.271-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938"></path><path stroke-linecap="round" d="M8 13h2.5M8 9h6.5M8 17h1.5M3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172M21 14c0 3.771 0 5.657-1.172 6.828m-15.656 0C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172m0 0c.944-.943 1.127-2.348 1.163-4.828"></path></g></svg>
            ),
            title: "Блог",
            active: false
        },
    ];

    return (
        <div className="w-[50px] md:w-[200px] pt-6 pb-10 bg-white flex flex-col border-r-[3px] border-violet-500 border-opacity-20">
            <div className="flex justify-center mb-6">
                <UILogo className="md:-ml-4" />
            </div>
            <nav>
                <ul className="flex flex-col gap-2">
                    {items.map(item => <li key={item.title} className={clsx(item.active ? "bg-gradient-to-r from-violet-100 border-l-4 border-violet-700" : '')}>
                        <SidebarNavItem item={item} />
                    </li>)}
                </ul>
            </nav>

            <SidebarNavItem className="mt-auto" item={{
                icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></path></g></svg>
                ),
                title: "Помощь",
                active: false
            }} />
        </div>
    );
}


function SidebarNavItem({ item, className }: { item: SidebarItem, className?: string }) {
    return (
        <a
            href="#"
            className={clsx(item.active ? "text-violet-600 font-semibold" : "text-gray-500", "flex items-center gap-2 h-[40px] md:h-[50px] rounded-lg px-[12px] md:px-6", className)}
        >
            <div className="min-w-[18px] md:w-6">
                {item.icon}
            </div>
            <div className="hidden md:flex grow items-center gap-2 justify-between">
                <span className="text-base text-gray-800">{item.title}</span>
            </div>
        </a>
    )
}