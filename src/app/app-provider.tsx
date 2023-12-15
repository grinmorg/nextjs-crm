import { AppWrapper } from "@/shared/context";
import { ReactNode } from "react";

export function AppProvider({ children }: { children?: ReactNode }) {
  return <AppWrapper>{children}</AppWrapper>;
}
