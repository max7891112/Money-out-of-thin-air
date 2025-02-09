import clsx from "clsx";
import { Slider } from "./Slider";
import style from "./questions.module.scss";

export const Questions = () => {
  return (
    <>
      <section className={style.questions}>
        <div className={style.wrapper}>
          <h2 className={clsx(style.title, '_white-color')}>Популярные запросы</h2>
          <Slider></Slider>
        </div>
      </section>
    </>
  );
};
