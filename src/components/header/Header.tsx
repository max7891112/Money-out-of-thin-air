import style from "./header.module.scss";
export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <h1 className={style.title}>
            <span className="_green">money</span>out
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

            <button className={style.buttonEnter}>Вход</button>
          </div>
        </div>
      </header>
    </>
  );
};
