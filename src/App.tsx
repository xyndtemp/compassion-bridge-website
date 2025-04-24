import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from 'react-router-dom';
import router from "./pages/router";

const queryClient = new QueryClient();

import ErrorBoundary from "@/components/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider
          router={router}
          // fallbackElement={<Spin fullscreen />}
        />
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
