import { Button } from "../../../../UI/Button/Button";
import { SortImg } from "../showCaseComponent/img/SortImg";
import style from "./sloganChoosePage.module.scss";
import clsx from "clsx";

export const SloganChoosePage = () => {
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
            <Button padding="10px 30px" variant="transparent" text="Фильтры" svg={<SortImg/>}/>
            <Button padding="10px 30px" text="Подробнее" variant="green"/>
          </div>
        </div>
      </div>
    </div>
  );
};
