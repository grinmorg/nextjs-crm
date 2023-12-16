

import { supabase } from "@/shared/api/supabase/client";
import { IMember } from "@/shared/interfaces";
import React from "react";
import { toast } from "react-toastify";

export function useGetMembers() {
    const [isPending, setIsPending] = React.useState(false);
    const [members, setMembers] = React.useState<IMember[] | null>(null);

    const getMembers = async () => {
        setIsPending(true);
        setMembers(null);
        let { data, error } = await supabase
            .from("members")
            .select()

        if (error) {
            toast.error("Не удалось получить");
        } else {
            setMembers(data as IMember[]);
        }

        setIsPending(false);
    };

    return {
        members,
        getMembers,
        isPending,
    };
}
