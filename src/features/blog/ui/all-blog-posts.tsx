import React from "react";
import { useGetBlogPosts } from "../model/use-get-blog-posts";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { IPost } from "@/shared/interfaces";
import { UIPagination } from "@/shared/ui/ui-pagination";

const tags = [
  "Бизнес",
  "Сообщество",
  "Анонсы",
  "Туториалы",
  "Ресурсы",
  "Интервью",
];

export function AllBlogPosts() {
  const { posts, getPosts, isPending } = useGetBlogPosts();

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {isPending && <UIPageSpinner />}
      <div className="flex items-center gap-2">
        <p className="dark:text-white">Теги:</p>
        <div className="flex flex-wrap items-center gap-1">
          {tags.map((item) => (
            <a
              key={item}
              href="#"
              className="bg-white dark:bg-violet-950 border border-gray-300 dark:border-violet-700 dark:text-white rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:py-8 py-4">
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              desc={post.desc}
              tags={post.tags}
            />
          ))}
      </div>

      <UIPagination />
    </>
  );
}

function Post({ title, desc, tags }: IPost) {
  return (
    <div className="bg-white dark:bg-violet-950 rounded-md">
      <a href="#" className="group">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-md mb-5 shadow-md group-hover:shadow-xl"
        />
      </a>
      <div className="p-2">
        <span className="bg-green-500/10 dark:bg-green-500/30 text-green-500 font-medium rounded-md text-xs py-1 px-2">
          {tags}
        </span>
        <h1 className="text-lg my-3 transition-all hover:text-violet-500 dark:text-white dark:hover:text-violet-500">
          <a href="#">{title}</a>
        </h1>
        <p className="text-sm/relaxed tracking-wider text-gray-500 dark:text-violet-300">{desc}</p>
      </div>
    </div>
  );
}
