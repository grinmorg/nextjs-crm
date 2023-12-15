import { supabase } from "@/shared/api/supabase/client";
import { IPost } from "@/shared/interfaces";
import React from "react";
import { toast } from "react-toastify";

export function useGetBlogPosts() {
  const [isPending, setIsPending] = React.useState(false);
  const [posts, setPosts] = React.useState<IPost[] | null>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [postsPerPage, setPostsPerPage] = React.useState<number>(2); // отсчёт с нуля, так что 2 это 3
  const [totalPages, setTotalPage] = React.useState<number>(3);

  const getPosts = async () => {
    setIsPending(true);
    setPosts(null);
    const { count } = await supabase
      .from("posts")
      .select("id", { count: "exact", head: true });
    if (count && count > 0) {
      setTotalPage(Math.ceil(count / postsPerPage));
    }

    const { data, error } = await supabase
      .from("posts")
      .select()
      .range(
        currentPage * postsPerPage - postsPerPage,
        currentPage * postsPerPage,
      );

    if (error) {
      toast.error("Не удалось получить посты");
    } else {
      setPosts(data as IPost[]);
    }

    setIsPending(false);
  };

  return {
    posts,
    getPosts,
    isPending,
    setCurrentPage,
    setPostsPerPage,
    currentPage,
    totalPages,
  };
}
