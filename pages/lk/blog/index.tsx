import { AllBlogPosts } from "@/features/blog/ui/all-blog-posts";
import { ROUTES } from "@/shared/constants/routes";
import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { UILink } from "@/shared/ui/ui-link";

export default function Page() {
  return (
    <UIBasePage title="Блог">
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium mr-auto mb-4 dark:text-white">
          Все посты
        </h2>
        <UILink href={ROUTES.LK_BLOG_CREATE}>+ Новый пост</UILink>
      </div>

      <AllBlogPosts />
    </UIBasePage>
  );
}
