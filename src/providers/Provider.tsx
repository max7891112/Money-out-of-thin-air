import { Routes, Route } from "react-router-dom";
import { App } from "../App";
export const ProviderRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
};
