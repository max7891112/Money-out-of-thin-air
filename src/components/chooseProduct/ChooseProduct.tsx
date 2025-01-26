import { CardItemProduct } from "../../UI/cardItemProduct/CardItemProduct";
import style from "./chooseProduct.module.scss";
import clsx from "clsx";

type productType = {
  name: string;
  count: string;
};

const products: productType[] = [
  { name: "Кредитные карты", count: "" },
  { name: "Кредитные карты", count: "123 предложения" },
  { name: "Дебетовые карты", count: "123 предложения" },
  { name: "Программы лояльности", count: "123 предложения" },
  { name: "Вклады", count: "123 предложения" },
  { name: "Инветсици", count: "123 предложения" },
];

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
            {products.map((item) => {
              return (
                <CardItemProduct
                  nameProduct={item.name}
                  countOffer={item.count}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
