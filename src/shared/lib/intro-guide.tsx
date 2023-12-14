"use client"
import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';
import React from 'react';

export function IntroJsGuide() {

    const [show, setShow] = React.useState(false);

    React.useLayoutEffect(() => {
        const checkElementExistence = () => {
            const element = document.querySelector('.js-guide-step-1');
            console.log(element)
            return !!element;
        };

        const timeoutFn = setTimeout(() => {
            if (checkElementExistence()) {
                setShow(true);
            }
        }, 1000);

        return () => clearTimeout(timeoutFn);
    }, [])

    const steps = [
        {
            element: '.js-guide-step-1',
            intro: 'Шапка',
            position: 'right',
            tooltipClass: 'myTooltipClass',
            highlightClass: 'myHighlightClass',
        },
        {
            element: '.js-guide-step-2',
            intro: 'Сайдбар',
        },
    ];

    if (!show) return;

    return (
        <Steps
            enabled={true}
            steps={steps}
            initialStep={0}
            onExit={() => { }}
            options={{
                nextLabel: "Далее",
                prevLabel: "Назад",
                doneLabel: "Готово"
            }}
        />
    )
}