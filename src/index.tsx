import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./css/colors.css";
import "./css/fonts.css";

const queryClient = new QueryClient();

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
