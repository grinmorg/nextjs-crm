import { AllBlogPosts } from "@/features/blog/ui/all-blog-posts";
import { ROUTES } from "@/shared/constants/routes";
import { STYLES } from "@/shared/constants/styles";
import UIBasePage from "@/shared/ui/layout/ui-base-page";
import { UILink } from "@/shared/ui/ui-link";

export default function Page() {
  return (
    <UIBasePage title="Блог">
      <div className="flex justify-between">
        <h2 className={STYLES.TITLE.H2}>Все посты</h2>
        <UILink href={ROUTES.LK_BLOG_CREATE}>+ Новый пост</UILink>
      </div>

      <AllBlogPosts />
    </UIBasePage>
  );
}
