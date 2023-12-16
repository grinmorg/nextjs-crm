import React from "react";
import Head from "next/head";
import { UILink } from "@/shared/ui/ui-link";
import { getPageTitle } from "@/shared/constants/config";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{getPageTitle("Главная")}</title>
      </Head>

      <section className="bg-violet-900 min-h-screen flex flex-col justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <UILink
            href="/lk/contacts"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  rounded-full bg-gray-800 text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-violet-600 rounded-full text-white px-4 py-1.5 mr-3">
              Новое
            </span>{" "}
            <span className="text-sm font-medium">
              Все контакты и статистика по ним в одном месте
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </UILink>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
            Экономим время DevRel разработчиков
          </h1>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/lk"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 dark:focus:ring-violet-900"
            >
              Перейти к CRM{" "}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
