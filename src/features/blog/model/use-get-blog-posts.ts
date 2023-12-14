import { supabase } from "@/shared/api/supabase/client";
import { IPost } from "@/shared/interfaces";
import React from "react";
import { toast } from "react-toastify";

export function useGetBlogPosts() {
  const [isPending, setIsPending] = React.useState(false);
  const [posts, setPosts] = React.useState<IPost[] | null>(null);

  const getPosts = async () => {
    setIsPending(true);
    const { data, error } = await supabase.from("posts").select();

    if (error) {
      toast.error("Не удалось получить посты");
    } else {
      console.log("posts: ", data);
      setPosts(data as IPost[]);
    }

    setIsPending(false);
  };

  return {
    posts,
    getPosts,
    isPending,
  };
}
