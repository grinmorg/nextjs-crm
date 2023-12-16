"use client";
import { Editor } from "novel";

interface Props {
  onContent: (content: string) => void;
  storageKey?: string;
  content: string;
  activateLocalStorage?: boolean;
}

export default function UIContentEditor({
  onContent,
  storageKey = "novel__content",
  activateLocalStorage = false,
  content,
}: Props) {
  return (
    <Editor
      className="w-full border rounded-xl mt-2"
      onUpdate={(e: any) => {
        onContent(e);
      }}
      defaultValue={JSON.parse(content)}
      storageKey={storageKey}
      disableLocalStorage={!activateLocalStorage}
      completionApi="/api"
    />
  );
}
