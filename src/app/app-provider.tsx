import { queryClient } from "@/shared/api/query-client";
import { AppWrapper } from "@/shared/context";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function AppProvider({ children }: { children?: ReactNode }) {
  return (
    <AppWrapper>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppWrapper>
  );
}
