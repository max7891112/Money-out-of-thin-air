import { Button } from "../../../../UI/Button/Button";
import { FilterSvg } from "./img/FilterSvg";
import style from "./sloganChoosePage.module.scss";
import clsx from "clsx";
import { filterChangeType } from "../../../../interface/interface";

export const SloganChoosePage:React.FC<filterChangeType> = ({filterChange}) => {
  
  return (
    <div className={clsx(style.sloganChoosePage, "_black-background")}>
      
      <div className="_content-frame">
        <div className={style.container}>
          <p className={clsx(style.text, "_white-color")}>
            Выберите кредитную карту и начните зарабатывать уже сегодня
          </p>
          <div className={clsx(style.filterPanel, "_gray-background")}>
            <input
              type="text"
              className={clsx(style.creditInput, "_black-background")}
              placeholder="Кредитный лимит"
            />
            <select
              name="bonus"
              id=""
              className={clsx(style.select, "_black-background")}
            >
              <option value="Бонусы" className={style.option}>
                Бонусы
              </option>
              <option value="Акции" className={style.option}>
                Акции
              </option>
              <option value="Рефералки" className={style.option}>
                Рефералки
              </option>
            </select>
            <button className={clsx(style.btn, "_white-color")} onClick={()=> filterChange()}>
              <div className={style.tbnContainer}>
                <FilterSvg color={"#fff"} />
                <p className={style.textBtn}>Фильтры</p>
              </div>
            </button>
            <Button padding="10px 30px" text="Подробнее" />
          </div>
        </div>
      </div>
    </div>
  );
};
