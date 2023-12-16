import { UIPagination } from "@/shared/ui/ui-pagination";
import { Dialog } from "@headlessui/react";
import React from "react";
import { toast } from "react-toastify";
import { IReview } from "@/shared/interfaces";
import { UIAvatar } from "@/shared/ui/ui-avatar";
import { getFormattingDate } from "@/shared/lib/utils";
import { UISpinner } from "@/shared/ui/ui-spinner";
import { useGetMemberReviews } from "../model/use-get-member-reviews";


export function ModalShowEvents({ id }: { id: number }) {

  const { reviews, getReviews, isPending } = useGetMemberReviews();

  React.useEffect(() => {
    getReviews(id);
    console.log(reviews)
  }, [id])

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Посещенные события
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500 mb-4">
          Показываются события на которых был данный участник
        </p>
        {isPending && <div className="flex justify-center"><UISpinner className="text-violet-500 w-20 h-20" /></div>}
        {!isPending && reviews?.length ?
          <>
            {reviews.map(item => <ReviewItem key={item.id} item={item} />)}

            {reviews?.length > 3 && <UIPagination
              setCurrentPage={() => { toast.error('Скоро заработает') }}
              currentPage={1}
              totalPages={2}
            />}

          </>
          : <p>Данный участник ещё не был на событиях</p>}

      </div>
    </>
  );
}


function ReviewItem({ item }: { item: IReview }) {

  const online = !!Math.round(Math.random());

  return (
    <div className="bg-white mb-2.5 border-b last:border-b-0">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div>
            <p className="text-[18px] font-medium text-gray-800">DevRel Hack 2.0</p>
            <p className="text-[13px] font-normal text-gray-400">16/12/2023</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex flex-wrap gap-2">
            <p className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-red-500/10 text-red-500">
              Хакатон
            </p>
            <p className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-violet-500/10 text-violet-500">
              Митап
            </p>
            <p className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-500">
              Frontend
            </p>
          </div>

          {online ? <p className="text-green-500 text-sm">Онлайн </p> : <p className="text-red-500 text-sm">Офлайн</p>}
        </div>
      </div>
    </div>

  )
}