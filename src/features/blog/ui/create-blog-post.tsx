import UIContentEditor from "@/shared/ui/ui-content-editor";
import { UITextField } from "@/shared/ui/ui-text-field";
import { useCreateBlogPost } from "../model/use-create-blog-post";
import { useAppContext } from "@/shared/context";
import { UIButton } from "@/shared/ui/ui-button";
import { toast } from "react-toastify";

export function CreateBlogPost() {
  const { newPost, setNewPost, isPending, savePost } = useCreateBlogPost();
  const { user } = useAppContext();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewPost((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveDraft = async () => {
    if (!newPost.title || newPost.title.length <= 5) {
      toast.error(
        "Заголовок не может быть таким маленьким (минимум 6 символов)",
      );
      return;
    }

    if (!newPost.desc) {
      toast.error("Краткое описание не может быть пустым");
      return;
    }

    try {
      savePost({ ...newPost, user_id: user.id });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className="bg-white dark:bg-violet-950 p-4 my-4 rounded-xl">
      <UITextField
        className="mb-4"
        label="Заголовок"
        inputProps={{
          type: "text",
          name: "title",
          placeholder: "Новый пост",
          value: newPost?.title as string,
          onChange: handleChange,
        }}
        required
      />

      <UITextField
        className="mb-4"
        label="Краткое описание"
        inputProps={{
          type: "text",
          name: "desc",
          placeholder: "Опишите в двух словах о чём пост",
          value: newPost?.desc as string,
          onChange: handleChange,
        }}
        required
      />

      <p className="text-base font-medium">Контент:</p>
      <UIContentEditor
        content={newPost.content as string}
        onContent={(content: any) => {
          setNewPost((prev: any) => ({
            ...prev,
            content: JSON.stringify(content.getJSON()),
          }));
        }}
      />

      <UIButton
        onClick={saveDraft}
        disabled={isPending}
        className="mt-2"
        variant="primary"
      >
        Создать
      </UIButton>
    </div>
  );
}
