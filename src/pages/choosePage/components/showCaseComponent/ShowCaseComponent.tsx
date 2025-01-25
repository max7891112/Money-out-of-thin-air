import { SortImg } from "./img/SortImg";
import style from "./showCaseComponent.module.scss";
import { ItemOffersBank } from "./itemOffersBank/ItemOffersBank";
import {v4 as uuid} from 'uuid';

type FiltersType = string[];

export const ShowCaseComponent = () => {

  const filters: FiltersType = [
    "По льготному периоду",
    "По кредитному лимиту",
    "По процентной ставке",
    "По беспроцентному периоду",
    "По сумме снятия",
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
                  <button key={uuid()} className={style.filterPartChooseName}>{i}</button>
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
