import { Button } from "../../UI/Button/Button";
import style from "./header.module.scss";
import {v4 as uuid} from 'uuid';

type baseTitleType =
  | "Вклады"
  | "Кредитные карты"
  | "Дебетовые карты"
  | "Инвестиции"
  | "Программы лояльности"
  | "Акции"
  | "Банки";

const baseTitle: baseTitleType[] = [
  "Вклады",
  "Кредитные карты",
  "Дебетовые карты",
  "Инвестиции",
  "Программы лояльности",
  "Акции",
  "Банки",
];

export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className="_content-frame">
          <div className={style.container}>
            <h1 className={style.title}>
              <span className="_green-color">money</span>out
            </h1>

            <div className={style.base}>
              {baseTitle.map((item) => (
                <div key={uuid()}>{item}</div>
              ))}
            </div>

            <div className={style.buttons}>
              <div className={style.buttonnNightMode}>night mode</div>

              <Button text="Вход" padding="10px 30px" variant="green"/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
