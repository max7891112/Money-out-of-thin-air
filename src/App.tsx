// import { useAppDispatch, useAppSelector } from "./providers/store/hooks";
import { Header } from "./components/header/Header";
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
import { ChoosePage } from "./pages/choosePage/components/ChoosePage";
import { PopUp } from "./pages/choosePage/components/PopUp/PopUp";

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
        <AboutUs />
        <ChooseProduct />
        <Strategy />
        <TestBlock />
        <Questions /> */}
        <ChoosePage />
        <PopUp/>
      </Wrapper>
    </>
  );
};


const ListOfBanks: ListOfBanksType = [
  {
    // id: v1(),
    nameBank: "Т-банк",
    nameCard: "Platinum Premium",
    parametrs: [
      { title: "Кредитный лимит", value: "1 500 000 Р" },
      { title: "Процентная ставка", value: "20%" },
      { title: "Льготный период", value: "120 дней" },
      { title: "Беспроцентный период", value: "60 дней" },
      { title: "Сумма на снятие", value: "500 000 Р" },
    ],
    tags: [
      "Бесплатное обслуживание",
      "Льготный период больше 90 дней",
      "Кэшбэк рублями",
      "Кэшбэк хуями",
    ],
  },
];