import { CardItemProduct } from "../../UI/cardItemProduct/CardItemProduct";
import style from "./chooseProduct.module.scss";
import clsx from "clsx";

export const ChooseProduct = () => {
  return (
    <div
      className={clsx(style.chooseProduct, "_black-background", "_white-color")}
    >
      <div className="_content-frame">
        <div className={style.container}>
          <p className={style.upText}>
            Выбери наиболее выгодный
            <br />
            банковский продукт
          </p>
          <div className={style.containerLink}>
            <CardItemProduct nameProduct="Кредитные карты" countOffer="123 предложения"/>
            <CardItemProduct nameProduct="Дебетовые карты" countOffer="123 предложения"/>
            <CardItemProduct nameProduct="Программы лояльности" countOffer="123 предложения"/>
            <CardItemProduct nameProduct="Вклады" countOffer="123 предложения"/>
            <CardItemProduct nameProduct="Инвестиции" countOffer="123 предложения"/>
            <CardItemProduct nameProduct="Инвестиции" countOffer="123 предложения"/>
            {/* <div className={clsx(style.itemLink, "_gray-background")}>
              <p className={style.productName}>Кредитные карты</p>
              <div className={style.linkDownPart}>
                <img
                  src="src\components\chooseProduct\img\arrow.svg"
                  alt=""
                  className={style.imgArrow}
                />
                <p className={style.countOffer}>123 предложения</p>
              </div>
            </div>
            <div className={clsx(style.itemLink, "_gray-background")}>
              <p className={style.productName}>Кредитные карты</p>
              <div className={style.linkDownPart}>
                <img
                  src="src\components\chooseProduct\img\arrow.svg"
                  alt=""
                  className={style.imgArrow}
                />
                <p className={style.countOffer}>123 предложения</p>
              </div>
            </div>
            <div className={clsx(style.itemLink, "_gray-background")}>
              <p className={style.productName}>Кредитные карты</p>
              <div className={style.linkDownPart}>
                <img
                  src="src\components\chooseProduct\img\arrow.svg"
                  alt=""
                  className={style.imgArrow}
                />
                <p className={style.countOffer}>123 предложения</p>
              </div>
            </div>
            <div className={clsx(style.itemLink, "_gray-background")}>
              <p className={style.productName}>Кредитные карты</p>
              <div className={style.linkDownPart}>
                <img
                  src="src\components\chooseProduct\img\arrow.svg"
                  alt=""
                  className={style.imgArrow}
                />
                <p className={style.countOffer}>123 предложения</p>
              </div>
            </div>
            <div className={clsx(style.itemLink, "_gray-background")}>
              <p className={style.productName}>Кредитные карты</p>
              <div className={style.linkDownPart}>
                <img
                  src="src\components\chooseProduct\img\arrow.svg"
                  alt=""
                  className={style.imgArrow}
                />
                <p className={style.countOffer}>123 предложения</p>
              </div>
            </div>
            <div className={clsx(style.itemLink, "_gray-background")}>
              <p className={style.productName}>Кредитные карты</p>
              <div className={style.linkDownPart}>
                <img
                  src="src\components\chooseProduct\img\arrow.svg"
                  alt=""
                  className={style.imgArrow}
                />
                <p className={style.countOffer}>123 предложения</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
