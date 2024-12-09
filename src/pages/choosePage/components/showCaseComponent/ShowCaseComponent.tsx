import clsx from "clsx";
import { SortImg } from "./img/SortImg";
import style from "./showCaseComponent.module.scss";
import { ItemOffersBank } from "./itemOffersBank/ItemOffersBank";
import { useState } from "react";

type FiltersType = {
  id: number;
  bank: string;
  tags: string[];
};

export const ShowCaseComponent = () => {
  const [filters, setFilters] = useState<FiltersType>({
    id: 1,
    bank: 'alfa',
    tags: [
      "По льготному периоду",
      "По кредитному лимиту",
      "По процентной ставке",
      "По беспроцентному периоду",
      "По сумме снятия",
    ],
  });

  return (
    <div className={style.showCaseComponent}>
      <div className="_content-frame">
        <div className={style.container}>
          <div className={style.filterPart}>
            <SortImg />
            <div className={style.filterPartChoose}>
              {filters.tags.map((i) => {
                return (
                  <button className={style.filterPartChooseName}>
                    {i}
                  </button>
                );
              })}
            </div>
            <p className={clsx(style.counterOffer, "_white-color")}>
              317 предложений
            </p>
          </div>
          <div className={style.offersBankPart}>
            <ItemOffersBank />
          </div>
        </div>
      </div>
    </div>
  );
};
