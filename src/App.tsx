// import { useAppDispatch, useAppSelector } from "./providers/store/hooks";
import { Header } from "./components/header/Header";
import { Wrapper } from "./Wrapper";
import "./style/null.scss";
import "./style/techClasses.scss";
// import { increment, decrement } from "./providers/store/slices/exampleSlice";
// import "./style/App.scss";

export const App = () => {
  // const dispatch = useAppDispatch();
  // const counter = useAppSelector((state) => state.easyMoney.count);
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
};
