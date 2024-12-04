import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
const data = [
  "Кредитные карты для путешествий",
  "Кредитные карты для путешествий",
  "Кредитные карты для путешествий",
  "Кредитные карты для путешествий",
  "Кредитные карты для путешествий",
  "Кредитные карты для путешествий",
];
import style from "./questions.module.scss";
export const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1.5}
      loop={true}
      className="_content-frame"
      // className={style.wrapper}
    >
      <SwiperSlide>
        <div className={style.slide}>
          <h3 className={style.slideTitle}>Кредитные карты</h3>
          <div className={style.container}>
            {data.map((item: string) => (
              <div className={style.question}>
                <p className={style.slideText}>{item}</p>
                <a className={style.slideLink} href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slide}>
          <h3 className={style.slideTitle}>Кредитные карты</h3>
          <div className={style.container}>
            {data.map((item: string) => (
              <div className={style.question}>
                <p className={style.slideText}>{item}</p>
                <a className={style.slideLink} href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slide}>
          <h3 className={style.slideTitle}>Кредитные карты</h3>
          <div className={style.container}>
            {data.map((item: string) => (
              <div className={style.question}>
                <p className={style.slideText}>{item}</p>
                <a className={style.slideLink} href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.slide}>
          <h3 className={style.slideTitle}>Кредитные карты</h3>
          <div className={style.container}>
            {data.map((item: string) => (
              <div className={style.question}>
                <p className={style.slideText}>{item}</p>
                <a className={style.slideLink} href="#">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
