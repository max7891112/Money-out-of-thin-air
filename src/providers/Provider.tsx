import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { PopUp } from "../pages/choosePage/components/PopUp/PopUp";
export const ProviderRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};
