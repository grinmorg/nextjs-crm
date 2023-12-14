import { CreateBlogPost } from "@/features/blog/ui/create-blog-post";
import UIBasePage from "@/shared/ui/layout/ui-base-page";

export default function Page() {
  return (
    <UIBasePage title="Блог - Создание">
      <h2 className="text-2xl font-medium mr-auto">Создание поста</h2>

      <CreateBlogPost />
    </UIBasePage>
  );
}
