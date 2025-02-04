import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <RecoilRoot>
        <App />
      <Toaster position="top-center" richColors />
      </RecoilRoot>
    </Router>
  </StrictMode>
);
