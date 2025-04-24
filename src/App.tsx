import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, useLocation } from 'react-router-dom';
import router from "./pages/router";
import Logo from "@/components/Logo";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

import ErrorBoundary from "@/components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <React.Suspense fallback={<div className="flex flex-col items-center justify-center min-h-[40vh] w-full"><Logo /></div>}>
            <RouterProvider router={router} />
          </React.Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
