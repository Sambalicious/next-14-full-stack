"use client";

import { TailwindIndicator } from "@/app/modules/commons/components";
// import { TailwindIndicator } from "@/modules/commons/components/TailwindIndicator";
// import {
//   HydrationBoundary,
//   QueryClient,
//   QueryClientProvider,
// } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  //   const [client] = useState(new QueryClient());
  return (
    <>
      <TailwindIndicator />
      <Toaster richColors position="top-right" />
      {/* <QueryClientProvider client={client}>
        <HydrationBoundary>{children}</HydrationBoundary>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      </QueryClientProvider> */}
      {children}
    </>
  );
}
