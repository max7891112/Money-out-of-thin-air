import style from "./strategy.module.scss";
import clsx from "clsx";
export const Strategy = () => {
  return (
    <>
      <section className={style.strategy}>
        <div className={clsx("_content-frame", style.wrapper)}>
          <h2 className={style.title}>
            Воспользуйтесь
            <br /> готовыми
            <br /> стратегиями
            <br /> получения прибыли
          </h2>
          <div className={style.container}>
            <div className={style.type}>
              <p>Долгосрочные</p>
              <p>Среднесрочные</p>
              <p>Краткосрочные</p>
            </div>
            <div className={style.cards}>
              <div className={style.card}>
                <h3 className={style.cardTitle}>Название стратегии</h3>
                <div className={style.cardDescription}>
                  <p>Такая-то карта</p>
                  <p>Такой-то брокер</p>
                  <p>Такой-то брокер</p>
                </div>
                <a className={style.link}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    // fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 35L35 1M35 1H1M35 1V35" />
                  </svg>
                </a>
              </div>
              <div className={style.card}>
                <h3 className={style.cardTitle}>Название стратегии</h3>
                <div className={style.cardDescription}>
                  <p>Такая-то карта</p>
                  <p>Такой-то брокер</p>
                  <p>Такой-то брокер</p>
                </div>
                <a className={style.link}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 35L35 1M35 1H1M35 1V35" />
                  </svg>
                </a>
              </div>
              <div className={style.card}>
                <h3 className={style.cardTitle}>Название стратегии</h3>
                <div className={style.cardDescription}>
                  <p>Такая-то карта</p>
                  <p>Такой-то брокер</p>
                  <p>Такой-то брокер</p>
                </div>
                <a className={style.link}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 35L35 1M35 1H1M35 1V35" />
                  </svg>
                </a>
              </div>
            </div>
            <button className={style.button}>Все стратегии</button>
          </div>
        </div>
      </section>
    </>
  );
};
