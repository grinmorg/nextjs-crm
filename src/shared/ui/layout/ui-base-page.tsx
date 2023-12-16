import Head from "next/head";
import { UISidebar } from "./ui-sidebar";
import { menuAside } from "@/shared/constants/menuAside";
import { UIHeader } from "./ui-header";
import { ReactNode } from "react";
import { getPageTitle } from "@/shared/constants/config";
import { protectedPage } from "@/features/auth";
import { IntroGuide } from "@/features/intro/ui";
import Script from "next/script";

interface Props {
  children: ReactNode;
  title?: string;
}

export default protectedPage(function UIBasePage({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{getPageTitle(title)}</title>
      </Head>

      <IntroGuide />

      <div className="md:p-4 min-h-screen flex flex-col bg-violet-200 dark:bg-violet-800">
        <div className="flex overflow-hidden md:rounded-xl shadow-xl grow">
          <UISidebar menu={menuAside} />

          <div className="flex flex-col flex-1 bg-violet-100 dark:bg-violet-900">
            <UIHeader />

            {/* START: Content */}
            <div className="px-5 pt-4">{children}</div>
            {/* END: Content */}
          </div>
        </div>
      </div>
    </>
  );
});
