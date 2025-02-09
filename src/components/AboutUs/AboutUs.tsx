import clsx from "clsx";
import style from "./aboutUs.module.scss";
import {v4 as uuid} from 'uuid';

type figureType = {
  number: string;
  description: string;
};

const figuries: figureType[] = [
  { number: "62", description: "Банков в базе" },
  { number: "1142", description: "Банковских продукта" },
  { number: "20+", description: "Стратегии получения прибыли" },
];

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
              {figuries.map((item) => {
                return (
                  <div key={uuid()} className={style.figure}>
                    <p className={style.number}>{item.number}</p>
                    <p className={clsx(style.description, "_white-color")}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className={clsx(style.text, "_white-color")}>
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
