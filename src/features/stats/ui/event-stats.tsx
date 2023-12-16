import { UIAvatar } from "@/shared/ui/ui-avatar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);

type ChartType = "d" | "l" | "w";

export function EventStats() {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between my-6">
          <div className="">
            <h4 className="text-base text-gray-800">Все события</h4>
          </div>
          <div className="text-end">
            <a href="#" className="font-semibold text-violet-500 text-sm">
              Смотреть все{" "}
              <svg
                className="h-5 w   5 inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
        {/* end title */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-3">
          <EventCard type="d" />
          <EventCard type="l" />
          <EventCard />
        </div>
        {/* end grid */}
      </div>
    </section>
  );
}

function EventCard({ type = "d" }: { type?: ChartType }) {
  return (
    <div className="bg-white rounded">
      <div className="p-6">
        {/* action start */}
        <div className="flex items-center">
          <div className="grow">
            <p className="text-gray-400 text-sm font-medium">Август 09, 2023</p>
          </div>
        </div>
        {/* action end */}
        <div className="mt-3">
          <h4 className="mt-0 mb-1">
            <a className="text-lg text-gray-600 hover:text-blue-500" href="#">
              Митап в честь открытия новой CRM
            </a>
          </h4>
          <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-500">
            Проект
          </span>
          <p className="text-gray-400 text-sm my-4">
            Обсудим решения и вникнем немного в рабочие процессы...
          </p>
        </div>
        {/* progress */}
        <div className="mt-4">
          <div className="flex mb-3">
            <div className="grow">
              <h6 className="mt-0">Участиники из контактов</h6>
            </div>
            <div className="shrink text-end">
              <small className="fw-semibold">75%</small>
            </div>
          </div>
          <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700 ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-green-500"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        {/* progress end */}
        {/* assignment start */}
        <div className="flex -space-x-2 mt-3">
          <UIAvatar
            className="inline-block h-8 w-8"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Prescription02&hairColor=Blue&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Eating&skinColor=Yellow"
          />
          <UIAvatar
            className="inline-block h-8 w-8"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          />
        </div>
        {/* assignment end */}

        <hr className="my-4" />

        <ChartInfo type={type} />
      </div>
    </div>
  );
}


function ChartInfo({ type = "d" }: { type?: ChartType }) {
  const labels = ['20', '40', '60', '80', '100'];
  const datapoints = [10, 28, 13, 42, 57];

  return (
    <div>
      {type == 'd' &&
        <Doughnut data={{
          labels: ['Frontend', 'Backend', 'Fullstack'],
          datasets: [
            {
              label: 'Количество',
              data: [300, 50, 100],
              backgroundColor: [
                'rgb(139, 92, 245)',
                'rgb(6, 182, 212)',
                'rgb(34, 197, 94)'
              ],
              hoverOffset: 4
            }
          ],
        }} />
      }

      {type == 'l' &&
        <Line data={{
          labels,
          datasets: [
            {
              label: 'Оценка мероприятия',
              data: datapoints,
              borderColor: 'rgb(139, 92, 245)',
              fill: false,
              cubicInterpolationMode: 'monotone',
              tension: 0.4
            }
          ]
        }}
          options={{
            scales: {
              x: {
                type: 'category', // Use 'category' scale for x-axis
                labels: labels,
              },
              y: {
                // Other y-axis configurations if needed
              }
            }
          }} />
      }
    </div>
  )
}