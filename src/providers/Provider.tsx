import { Routes, Route } from "react-router-dom";
import { App } from "../App";
import { ChoosePage } from "../pages/choosePage/components/ChoosePage";
import { ClassicSt } from "../pages/ClassicSt/ClassicSt";
export const ProviderRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creditCard" element={<ChoosePage />} />
        <Route path="/classicSt" element={<ClassicSt />} />
      </Routes>
    </>
  );
};
