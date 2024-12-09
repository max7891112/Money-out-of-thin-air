import { Header } from "../../../components/header/Header";
import { ShowCaseComponent } from "./showCaseComponent/ShowCaseComponent";
import { SloganChoosePage } from "./sloganChoosePage/SloganChoosePage";

export const ChoosePage = () => {
  return (
    <>
      <Header />
      <SloganChoosePage />
      <ShowCaseComponent />
    </>
  );
};
