import React from "react";
import { useGetBlogPosts } from "../model/use-get-blog-posts";
import { IPost } from "@/shared/interfaces";
import { UIPagination } from "@/shared/ui/ui-pagination";
import { UISpinner } from "@/shared/ui/ui-spinner";

const tags = [
  "Бизнес",
  "Сообщество",
  "Анонсы",
  "Туториалы",
  "Ресурсы",
  "Интервью",
];

export function AllBlogPosts() {
  const {
    posts,
    getPosts,
    isPending,
    setCurrentPage,
    setPostsPerPage,
    currentPage,
    totalPages,
  } = useGetBlogPosts();

  React.useEffect(() => {
    getPosts();
  }, [currentPage]);

  return (
    <>
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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:py-8 py-4 max-w-7xl">
        {isPending && <Skeleton />}

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

      <UIPagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
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
        <p className="text-sm/relaxed tracking-wider text-gray-500 dark:text-violet-300">
          {desc}
        </p>
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <>
      <div
        role="status"
        className="max-w-sm p-4 border border-violet-200 rounded shadow animate-pulse md:p-6 dark:border-violet-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-violet-300 rounded dark:bg-violet-700">
          <svg
            className="w-10 h-10 text-violet-200 dark:text-violet-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-2.5 bg-violet-200 rounded-full dark:bg-violet-700 w-48 mb-4"></div>
        <div className="h-2 bg-violet-200 rounded-full dark:bg-violet-700 mb-2.5"></div>
        <div className="h-2 bg-violet-200 rounded-full dark:bg-violet-700 mb-2.5"></div>
        <div className="h-2 bg-violet-200 rounded-full dark:bg-violet-700"></div>
      </div>
    </>
  );
}
