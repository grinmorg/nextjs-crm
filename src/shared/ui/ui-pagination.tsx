import React from "react";

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export function UIPagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: Props) {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage: number) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage: number) => prevPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mb-4 max-w-7xl">
      <div className="flex items-center">
        <button
          className="disabled:opacity-50 bg-white dark:bg-violet-950 dark:text-white flex items-center gap-2 border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg disabled:shadow-none focus:shadow-lg py-2 px-3"
          onClick={handlePrevClick}
          disabled={currentPage == 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
            ></path>
          </svg>{" "}
          Назад
        </button>
      </div>

      <div className="flex items-center">
        <button
          className="disabled:opacity-50 bg-white dark:bg-violet-950 dark:text-white flex items-center gap-2 border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg disabled:shadow-none focus:shadow-lg py-2 px-3"
          onClick={handleNextClick}
          disabled={currentPage == totalPages}
        >
          Вперед{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
