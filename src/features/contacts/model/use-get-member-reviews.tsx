

import { supabase } from "@/shared/api/supabase/client";
import { IReview } from "@/shared/interfaces";
import React from "react";
import { toast } from "react-toastify";

export function useGetMemberReviews() {
    const [isPending, setIsPending] = React.useState(false);
    const [reviews, setReviews] = React.useState<IReview[] | null>(null);

    const getReviews = async (id: number) => {
        setIsPending(true);
        setReviews(null);
        let { data, error } = await supabase
            .from('reviews')
            .select('*')
            .eq('member_id', id)

        if (error) {
            toast.error("Не удалось получить");
        } else {
            setReviews(data as IReview[]);
        }

        setIsPending(false);
    };

    return {
        reviews,
        getReviews,
        isPending,
    };
}
