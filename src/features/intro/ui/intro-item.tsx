import { ReactNode } from "react";

export function IntroItem({
  img,
  children,
}: {
  img?: string;
  children: ReactNode;
}) {
  return (
    <div className="">
      <div className="border-2 rounded p-2 relative mb-2">
        <span className=" absolute -bottom-2 left-2 w-4 h-4 border-r-2 border-b-2 rotate-45 bg-white"></span>
        {children}
      </div>
      {img && <img alt="Crab" src={img} className="w-[120px]" />}
    </div>
  );
}
