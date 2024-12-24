import clsx from "clsx";
import style from "./aboutUs.module.scss";

export const AboutUs = () => {
  return (
    <>
      <section className={style.aboutUs}>
        <div className="_content-frame">
          <div className={style.containerForTitle}>
            <h2 className={clsx(style.title, "_white-color")}>
              <span className={clsx("_green-color")}>Money</span>Out -
              финансовый маркетплейс, помогающий пользователям заработать на
              использовании банковских продуктов
            </h2>
          </div>
          <div className={style.container}>
            <div className={style.figures}>
              <div className={style.figure}>
                <p className={style.number}>62</p>
                <p className={clsx(style.description, "_white-color")}>
                  Банка <br />в базе
                </p>
              </div>
              <div className={style.figure}>
                <p className={style.number}>1142</p>
                <p className={clsx(style.description, "_white-color")}>
                  Банковских
                  <br />
                  продукта
                </p>
              </div>
              <div className={style.figure}>
                <p className={style.number}>20+</p>
                <p className={clsx(style.description, "_white-color")}>
                  Стратегий
                  <br />
                  получения
                  <br />
                  прибыли
                </p>
              </div>
            </div>
            <div className={clsx(style.text, '_white-color')}>
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
