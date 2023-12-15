import { cn } from "../lib/utils";

export function UIAvatar({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={cn(className, "mask is-hexagon-2 bg-violet-300 outline-none")}
    >
      <img className="w-full h-full object-cover" src={src} alt="avatar" />
    </div>
  );
}
