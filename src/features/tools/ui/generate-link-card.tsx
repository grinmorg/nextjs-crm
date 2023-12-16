import { ROUTES } from "@/shared/constants/routes";
import { UIButton } from "@/shared/ui/ui-button";
import { UILinkButton } from "@/shared/ui/ui-link-button";
import { UIPopover } from "@/shared/ui/ui-popover";

export function GenerateLinkCard() {
  return (
    <div className="lg:col-span-4 col-span-12">
      <div className="bg-white rounded">
        <div className="p-6 relative">
          <div className="flex">
            <div className="grow">
              <div className="flex">
                <div className="grow">
                  <h4 className="tetx-lg text-gray-800 mb-1 mt-0 font-semibold">
                    Генератор опросов
                  </h4>
                  <p className="text-gray-400 pb-0 text-sm mb-4 font-medium">
                    Создайте новый опрос или выберите подходящий для сбора
                    данных участников
                  </p>
                </div>
              </div>
            </div>
            <GenerateLinkPopover />
          </div>

          <div className="flex items-center gap-4">
            {/* item */}
            <div className="flex items-center justify-between py-6">
              <div>
                <div className="inline-flex items-center justify-center h-12 w-12 bg-sky-500/10 rounded me-3">
                  <svg
                    className="text-sky-500"
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
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
              </div>
              <div className="grow">
                <h3 className="text-xl text-gray-800">21</h3>
                <p className="text-muted mb-0">Опрос создан</p>
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
                <h3 className="text-xl text-gray-800">210</h3>
                <p className="text-muted mb-0">Ответов</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <UIButton className="w-full" variant="primary">
              Создать
            </UIButton>
            <UILinkButton
              href={ROUTES.LK_TOOLS_QUIZ}
              className="w-full"
              variant="secondary"
            >
              Показать все
            </UILinkButton>
          </div>
        </div>
      </div>
    </div>
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
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M9.33398 5.3335V3.3335M22.6673 5.3335V3.3335"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M12.6523 15.7656L17.3564 11.0615V23.6058"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.667 29.3335H13.3337C8.30566 29.3335 5.79099 29.3335 4.22966 27.7708C2.66699 26.2095 2.66699 23.6948 2.66699 18.6668V16.0002C2.66699 10.9722 2.66699 8.4575 4.22966 6.89616C5.79099 5.3335 8.30566 5.3335 13.3337 5.3335H18.667C23.695 5.3335 26.2097 5.3335 27.771 6.89616C29.3337 8.4575 29.3337 10.9722 29.3337 16.0002V18.6668C29.3337 23.6948 29.3337 26.2095 27.771 27.7708C26.9003 28.6428 25.7337 29.0282 24.0003 29.1975"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
        <span>За день</span>
      </a>
      <a
        className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 me-2.5"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M9.33398 5.3335V3.3335M22.6673 5.3335V3.3335"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M18.667 29.3335H13.3337C8.30566 29.3335 5.79099 29.3335 4.22966 27.7708C2.66699 26.2095 2.66699 23.6948 2.66699 18.6668V16.0002C2.66699 10.9722 2.66699 8.4575 4.22966 6.89616C5.79099 5.3335 8.30566 5.3335 13.3337 5.3335H18.667C23.695 5.3335 26.2097 5.3335 27.771 6.89616C29.3337 8.4575 29.3337 10.9722 29.3337 16.0002V18.6668C29.3337 23.6948 29.3337 26.2095 27.771 27.7708C26.9003 28.6428 25.7337 29.0282 24.0003 29.1975"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M12.7959 11.9385H18.0908C19.6861 11.9385 20.6393 13.7146 19.7575 15.044L14.1013 23.5713"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>

        <span>За неделю</span>
      </a>
      <a
        className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 me-2.5"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M9.33398 5.3335V3.3335M22.6673 5.3335V3.3335"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.667 29.3335H13.3337C8.30566 29.3335 5.79099 29.3335 4.22966 27.7708C2.66699 26.2095 2.66699 23.6948 2.66699 18.6668V16.0002C2.66699 10.9722 2.66699 8.4575 4.22966 6.89616C5.79099 5.3335 8.30566 5.3335 13.3337 5.3335H18.667C23.695 5.3335 26.2097 5.3335 27.771 6.89616C29.3337 8.4575 29.3337 10.9722 29.3337 16.0002V18.6668C29.3337 23.6948 29.3337 26.2095 27.771 27.7708C26.9003 28.6428 25.7337 29.0282 24.0003 29.1975"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7.84668 11.8418H12.0828C13.9538 11.8418 14.8003 14.1815 13.3626 15.3787L13.0971 15.5997C12.0887 16.4395 12.1486 18.0065 13.2182 18.7668L14.1387 19.4211C15.6578 20.5009 15.0045 22.8884 13.1473 23.0443L8.39906 23.4429"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20.0225 11.8418H22.6785C23.7831 11.8418 24.6785 12.7372 24.6785 13.8418V21.3478C24.6785 22.4524 23.7831 23.3478 22.6785 23.3478H20.0225C18.9179 23.3478 18.0225 22.4524 18.0225 21.3478V13.8418C18.0225 12.7372 18.9179 11.8418 20.0225 11.8418Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>За месяц</span>
      </a>
      <a
        className="flex items-center py-1.5 px-5 text-base text-gray-500 hover:bg-slate-100 hover:text-slate-700 rounded"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 me-2.5"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M9.33398 5.3335V3.3335M22.6673 5.3335V3.3335"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18.667 29.3335H13.3337C8.30566 29.3335 5.79099 29.3335 4.22966 27.7708C2.66699 26.2095 2.66699 23.6948 2.66699 18.6668V16.0002C2.66699 10.9722 2.66699 8.4575 4.22966 6.89616C5.79099 5.3335 8.30566 5.3335 13.3337 5.3335H18.667C23.695 5.3335 26.2097 5.3335 27.771 6.89616C29.3337 8.4575 29.3337 10.9722 29.3337 16.0002V18.6668C29.3337 23.6948 29.3337 26.2095 27.771 27.7708C26.9003 28.6428 25.7337 29.0282 24.0003 29.1975"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5.49219 13.3628H8.35339C9.74819 13.3628 10.3793 15.107 9.30747 15.9996V15.9996C8.55565 16.6256 8.60031 17.7938 9.39772 18.3606L9.54545 18.4656C10.7839 19.3459 10.2513 21.2924 8.7372 21.4195L5.88719 21.6587"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17.7867 13.0078H14.8027C13.6982 13.0078 12.8027 13.9032 12.8027 15.0078V19.6587C12.8027 20.7633 13.6982 21.6587 14.8027 21.6587H17.2694C18.334 21.6587 19.197 20.7957 19.197 19.7311V19.7311C19.197 18.6665 18.334 17.8035 17.2694 17.8035H13.4612"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M25.7193 13.0078H23.3037C22.1991 13.0078 21.3037 13.9032 21.3037 15.0078V15.3812C21.3037 16.4858 22.1991 17.3812 23.3037 17.3812H23.7193C24.8239 17.3812 25.7193 18.2767 25.7193 19.3812V19.6586C25.7193 20.7631 24.8239 21.6586 23.7193 21.6586H21.3037"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span>За год</span>
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
        <span>Скрыть</span>
      </a>
    </UIPopover>
  );
}
