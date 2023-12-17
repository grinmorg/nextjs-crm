import { supabase } from "@/shared/api/supabase/client";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { IMember } from "@/shared/interfaces";
import React from "react";
import { toast } from "react-toastify";

export function useQuizForm() {
    const [isPending, setIsPending] = React.useState(false);
    const [currentMember, setCurrentMember] = React.useState<IMember | null>(null);
    const [fieldName, setFieldName] = React.useState<string | null>(null);
    const [value, setValue] = React.useState<string | null | undefined>('')
    const debouncedValue = useDebounce<string | null | undefined>(value, 500);

    React.useEffect(() => {
        const fetchMember = async () => {
            if (!fieldName) return;

            setIsPending(true);

            const { data, error } = await supabase
                .from("members")
                .select('*')
                .eq(fieldName, value)

            if (error?.message) {
                toast.error(error.message);
            } else {
                if (data?.length) {
                    setCurrentMember(data[0] as IMember);
                }
            }

            setIsPending(false);
        }
        fetchMember();
    }, [debouncedValue])

    const findMemberByField = async (name: string, value: string | null | undefined) => {
        setFieldName(name);
        setValue(value);
    }

    const handleRegisterOrUpdate = async (member: IMember, isRegistred: boolean) => {
        setIsPending(true);

        if (isRegistred) {
            // update
            const { data, error } = await supabase
                .from('members')
                .update({
                    name: member.name,
                    email: member.email,
                    tg: member.tg,
                    job: member.job,
                    level: member.level,
                })
                .eq('id', currentMember?.id)
                .select()

            if (error?.message) {
                toast.error(error.message);
            } else {
                return true
            }
        } else {
            const { data, error } = await supabase
                .from('members')
                .insert([
                    {
                        name: member.name,
                        email: member.email,
                        tg: member.tg,
                        job: member.job,
                        level: member.level,
                    }
                ])
                .select()

            if (error?.message) {
                toast.error(error.message);
            } else {
                return true
            }
        }

        setIsPending(false);
    };

    return {
        isPending,
        handleRegisterOrUpdate,
        findMemberByField,
        currentMember
    };
}
