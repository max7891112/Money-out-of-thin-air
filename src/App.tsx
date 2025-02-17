// import { Header } from "./components/header/Header";
import { Wrapper } from "./Wrapper";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Strategy } from "./components/Strategy/Strategy";
import "./style/null.scss";
import "./style/techClasses.scss";
import { Questions } from "./components/Questions/Questions";
import "./style/null.scss";
import "./style/techClasses.scss";
import { SloganBlock } from "./components/sloganBlock/SloganBlock";
import { ChooseProduct } from "./components/chooseProduct/ChooseProduct";
import { TestBlock } from "./components/testBlock/testBlock";
import { MenuBurger } from "./components/MenuBurger/MenuBurger";

export const App = () => {
  return (
    <>
    <MenuBurger />
      <Wrapper>
        {/* <Header/> */}
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
