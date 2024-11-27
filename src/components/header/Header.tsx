export const Header = () => {
  return (
    <>
      <header className="header ">
        <div className="header__container">
          <h1 className="header__title">
            <span className="_green">money</span>out
          </h1>

          <div className="header__base">
            <div>Вклады</div>
            <div>Кредитные карты</div>
            <div>Дебетовые карты</div>
            <div>Инвестиции</div>
            <div>Программы лояльности</div>
            <div>Акции</div>
            <div>Банки</div>
          </div>

          <div className="header__buttons">
            <div className="header__button-night-mode">night mode</div>

            <button className="header__button-enter">Вход</button>
          </div>
        </div>
      </header>
    </>
  );
};
