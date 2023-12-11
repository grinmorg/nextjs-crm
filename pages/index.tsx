import React from "react";
import { useQuery } from "@tanstack/react-query";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import Head from "next/head";
import { protectedPage } from "@/features/auth";
import { Profile } from "@/widgets/profile";
import { UILogo } from "@/shared/ui/ui-logo";
import { UISidebar } from "@/shared/ui/layout/ui-sidebar";
import { UIHeader } from "@/shared/ui/layout/ui-header";

// protectedPage hoc проверяет авторизован ли пользователь
export default protectedPage(function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  // <Profile />

  return (
    <>
      <Head>
        <title>DevRel CRM</title>
      </Head>

      <div className="md:p-4 min-h-screen flex flex-col bg-violet-200">
        <div className="flex overflow-hidden md:rounded-xl shadow-xl grow">
          <UISidebar />

          <div className="flex flex-col flex-1 bg-violet-100">
            <UIHeader />

            {/* START: Content */}
            <div className="px-5 pt-4">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="text-lg font-medium mr-auto">Title</h2>
              </div>
            </div>
            {/* END: Content */}
          </div>
        </div>
      </div>
    </>
  );
});
