// import { Slider } from "./Slider";
import { Slider } from "./Slider";
import style from "./questions.module.scss";

// const data = [
//   "Кредитные карты для путешествий",
//   "Кредитные карты для путешествий",
//   "Кредитные карты для путешествий",
//   "Кредитные карты для путешествий",
//   "Кредитные карты для путешествий",
//   "Кредитные карты для путешествий",
// ];
export const Questions = () => {
  return (
    <>
      <section className={style.questions}>
        <div className={style.wrapper}>
          <h2 className={style.title}>Популярные запросы</h2>
          <Slider></Slider>
        </div>
      </section>
    </>
  );
};
