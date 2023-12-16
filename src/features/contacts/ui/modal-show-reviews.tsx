import { UIPagination } from "@/shared/ui/ui-pagination";
import { Dialog } from "@headlessui/react";
import React from "react";
import { toast } from "react-toastify";
import { IReview } from "@/shared/interfaces";
import { UIAvatar } from "@/shared/ui/ui-avatar";
import { getFormattingDate } from "@/shared/lib/utils";
import { UISpinner } from "@/shared/ui/ui-spinner";
import { useGetMemberReviews } from "../model/use-get-member-reviews";


export function ModalShowReviews({ id }: { id: number }) {

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
        Все отзывы участника
      </Dialog.Title>
      <div className="mt-2">
        <p className="text-sm text-gray-500 mb-4">
          Показывается название мероприятия, текст отзыва и оценка
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
          : <p>Данный участник ещё не оставил отзыв</p>}

      </div>
    </>
  );
}


function ReviewItem({ item }: { item: IReview }) {

  return (
    <div className="comment-item bg-white mb-2.5">
      <div className="comment-author flex justify-between items-center mb-3">
        <div className="flex space-x-3 items-center">
          <UIAvatar
            className="inline-block h-12 w-12"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          />
          <div>
            <p className="text-[18px] font-medium text-gray-800">{item.event}</p>
            <p className="text-[13px] font-normal text-gray-400">{getFormattingDate(item.created_at)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex">
            <StarRating stars={item.stars} />
          </div>
        </div>
      </div>
      <div className="comment mb-[30px]">
        <p className="text-[15px] text-gray-600 leading-7 text-normal">
          {item.message}
        </p>
      </div>
    </div>

  )
}


function StarRating({ stars = '0' }: { stars?: string }) {
  const renderStars = () => {
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      starArray.push(
        <span key={i}>
          <svg
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
              fill={parseInt(stars) < i + 1 ? "#dedede" : "#FFA800"}
            />
          </svg>
        </span>
      );
    }
    return starArray;
  };

  return <div className="flex">{renderStars()}</div>;
};