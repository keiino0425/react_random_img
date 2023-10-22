import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { TopPage } from "../pages/TopPage";


export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
});