import { SortImg } from "./img/SortImg";
import style from "./showCaseComponent.module.scss";
import { ItemOffersBank } from "./itemOffersBank/ItemOffersBank";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "../../../../providers/store/hooks";
import { sortList } from "../../../../providers/store/slices/exampleSlice";

type FiltersType = {
  title: string;
  sortName: string;
};

export const ShowCaseComponent = () => {
  const dispatch = useAppDispatch();

  const filters: FiltersType[] = [
    { title: "По льготному периоду", sortName: "LgotPer" },
    { title: "По кредитному лимиту", sortName: "CredLim" },
    { title: "По процентной ставке", sortName: "ProcSt" },
    { title: "По беспроцентному периоду", sortName: "BesprPer" },
    { title: "По сумме снятия", sortName: "SumSnat" },
  ];

  return (
    <div className={style.showCaseComponent}>
      <div className="_content-frame">
        <div className={style.container}>
          <div className={style.filterPart}>
            <SortImg />
            <div className={style.filterPartChoose}>
              {filters.map((i) => {
                return (
                  <button
                    onClick={() => dispatch(sortList({ sort: i.sortName }))}
                    key={uuid()}
                    className={style.filterPartChooseName}
                  >
                    {i.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className={style.offersBankPart}>
            <ItemOffersBank />
          </div>
        </div>
      </div>
    </div>
  );
};
