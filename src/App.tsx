// import { useAppDispatch, useAppSelector } from "./providers/store/hooks";
import { Header } from "./components/header/Header";
import { Wrapper } from "./Wrapper";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Strategy } from "./components/Strategy/Strategy";

import { Questions } from "./components/Questions/Questions";
import { SloganBlock } from "./components/sloganBlock/SloganBlock";
import { ChooseProduct } from "./components/chooseProduct/ChooseProduct";
import { TestBlock } from "./components/testBlock/testBlock";

// import { increment, decrement } from "./providers/store/slices/exampleSlice";
// import "./style/App.scss";

export const App = () => {
  // const dispatch = useAppDispatch();
  // const counter = useAppSelector((state) => state.easyMoney.count);
  return (
    <>
      <Wrapper>
        <Header />
        <SloganBlock />
        <AboutUs />
        <ChooseProduct />
        <Strategy />
        <TestBlock />
        <Questions />
      </Wrapper>
    </>
  );
};
