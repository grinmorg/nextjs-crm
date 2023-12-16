"use client";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";
import React from "react";
import { IntroItem } from "./intro-item";
import { useAppContext } from "@/shared/context";

export function IntroGuide() {
  const { showIntro, setShowIntro } = useAppContext()

  const steps = [
    {
      element: ".js-guide-step-1",
      intro: (
        <IntroItem img="/dist/images/guide/1.png">
          Привет, я CRAB и я помогу тебе разобраться в этой CRM...
        </IntroItem>
      ),
      position: "right",
    },
  ];

  return (
    <Steps
      enabled={showIntro}
      steps={steps}
      initialStep={0}
      onExit={() => setShowIntro(false)}
      options={{
        nextLabel: "Далее",
        prevLabel: "Назад",
        doneLabel: "Готово",
      }}
    />
  );
}
