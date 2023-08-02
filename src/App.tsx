import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routers";
import { GetGenProvider } from "./contexts/GetGenerationsContext";
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GetGenProvider>
        <RouterProvider router={router} />
      </GetGenProvider>
    </QueryClientProvider>
  );
};
