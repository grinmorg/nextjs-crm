import { ROUTES } from "@/shared/constants/routes";
import { UIButton } from "@/shared/ui/ui-button";
import { UILinkButton } from "@/shared/ui/ui-link-button";

export function GenerateAIStats() {
  return (
    <div className="lg:col-span-4 col-span-12">
      <div className="bg-white rounded">
        <div className="p-6 relative">
          <div className="flex">
            <div className="grow">
              <div className="flex">
                <div className="grow">
                  <h4 className="tetx-lg text-gray-800 mb-1 mt-0 font-semibold">
                    ИИ аналитика
                  </h4>
                  <p className="text-gray-400 pb-0 text-sm mb-4 font-medium">
                    Обратитесь к виртуальному помощнику для составления статистики и решения вопросов
                  </p>
                </div>
              </div>
            </div>

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
                <h3 className="text-xl text-gray-800">150</h3>
                <p className="text-muted mb-0">Запросов</p>
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
                <h3 className="text-xl text-gray-800">150</h3>
                <p className="text-muted mb-0">Решенных проблем</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <UIButton className="w-full" variant="primary">
              Сделать запрос
            </UIButton>
            <UILinkButton
              href={ROUTES.LK_TOOLS_QUIZ}
              className="w-full"
              variant="secondary"
            >
              Все решения
            </UILinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
