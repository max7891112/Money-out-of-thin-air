import style from "./aboutUs.module.scss";
export const AboutUs = () => {
  return (
    <>
      <section className={style.aboutUs}>
        <div className="_content-frame">
          <h2 className={style.title}>
            <span className="_green">Money</span>Out - финансовый маркетплейс,
            помогающий пользователям заработать на использовании банковских
            продуктов
          </h2>
          <div className={style.container}>
            <div className={style.figures}>
              <div className={style.figure}>
                <p className={style.number}>62</p>
                <p className={style.description}>
                  Банка <br />в базе
                </p>
              </div>
              <div className={style.figure}>
                <p className={style.number}>1142</p>
                <p className={style.description}>Банковских продукта</p>
              </div>
              <div className={style.figure}>
                <p className={style.number}>20+</p>
                <p className={style.description}>Стратегий получения прибыли</p>
              </div>
            </div>
            <div className={style.text}>
              <p>
                Мы анализируем предложения банков по ряду направлений (от
                кредитных карт до брокерских услуг). Вы получаете базу данных со
                всеми условиями и точными процентами, выгодные стратегии
                получения прибыли от пользования банковскими продуктами
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
