import { Header } from "../../../components/header/Header";
import { ShowCaseComponent } from "./showCaseComponent/ShowCaseComponent";
import { SloganChoosePage } from "./sloganChoosePage/SloganChoosePage";
import { useState } from "react";
import { PopUp } from "./PopUp/PopUp";
import { clsx } from "clsx";
import style from "../../../style/App.module.scss";

export const ChoosePage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterChange = () => {
    setIsFilterOpen(!isFilterOpen)
  }
  return (
    <div className={style.content}>
      {isFilterOpen ? <PopUp filterChange={filterChange} isFilterOpen={isFilterOpen}/> : ""}
      <div className={clsx("_usual", isFilterOpen ? "_blur" : "")}>
      <Header />
      <SloganChoosePage filterChange={filterChange}/>
      <ShowCaseComponent />
      </div>
    </div>
  );
};
