import { Button } from "../../UI/Button/Button";
import style from "./header.module.scss";
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
              <div>Вклады</div>
              <div>Кредитные карты</div>
              <div>Дебетовые карты</div>
              <div>Инвестиции</div>
              <div>Программы лояльности</div>
              <div>Акции</div>
              <div>Банки</div>
            </div>

            <div className={style.buttons}>
              <div className={style.buttonnNightMode}>night mode</div>

              <Button text="Вход" padding="10px 30px"/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
