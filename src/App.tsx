// import { useAppDispatch, useAppSelector } from "./providers/store/hooks";
import { Header } from "./components/header/Header";
import { Wrapper } from "./Wrapper";
import "./style/null.scss";
import "./style/techClasses.scss";
import { SloganBlock } from "./components/sloganBlock/SloganBlock";
import { ChooseProduct } from "./components/chooseProduct/ChooseProduct";
import { TestBlock } from "./components/testBlock/testBlock";
import { ChoosePage } from "./pages/choosePage/components/ChoosePage";

// import { increment, decrement } from "./providers/store/slices/exampleSlice";
// import "./style/App.scss";

export const App = () => {
  // const dispatch = useAppDispatch();
  // const counter = useAppSelector((state) => state.easyMoney.count);
  return (
    <>
      <Wrapper>
        {/* <Header />
        <SloganBlock />
        <ChooseProduct />
        <TestBlock /> */}
        <ChoosePage />
      </Wrapper>
    </>
  );
};
