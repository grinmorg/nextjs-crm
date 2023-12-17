import { QuizForm } from "@/quiz/ui/quiz-form";
import { getPageTitle } from "@/shared/constants/config";
import Head from "next/head";
import React from "react";

export default function QuizTestPage() {

  return (
    <>
      <Head>
        <title>{getPageTitle("Форма для участника")}</title>
      </Head>

      <QuizForm />
    </>
  );
}
