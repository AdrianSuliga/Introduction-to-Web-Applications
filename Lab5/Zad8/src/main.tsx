import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
