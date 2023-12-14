import { supabase } from "@/shared/api/supabase/client";
import { POST_DEFAULT_CONTENT } from "@/shared/constants/editor";
import { ROUTES } from "@/shared/constants/routes";
import { IPost } from "@/shared/interfaces";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const MODEL = {
  title: "",
  desc: "",
  content: JSON.stringify(POST_DEFAULT_CONTENT),
  user_id: null,
};

export function useCreateBlogPost() {
  const [isPending, setIsPending] = useState(false);
  const [newPost, setNewPost] = useState<IPost>(MODEL);
  const router = useRouter();

  const savePost = async (post: IPost) => {
    setIsPending(true);
    try {
      const data = await supabase.from("posts").insert(post);

      if (data) {
        toast.success("Пост успешно создан");
        router.push(ROUTES.LK_BLOG);
      } else {
        toast.error("При создании поста что то пошло не так");
      }
      return data;
    } catch (error) {
      toast.error("При создании поста что то пошло не так");
    }

    setIsPending(false);
    return undefined;
  };

  return {
    isPending,
    savePost,
    newPost,
    setNewPost,
  };
}
