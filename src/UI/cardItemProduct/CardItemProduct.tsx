import { Arrow } from "../arrow/Arrow";
import style from "./cardItemProuct.module.scss";
import clsx from "clsx";

type CardItemProductPropsType = {
  nameProduct: string;
  countOffer: string;
};

export const CardItemProduct = (props: CardItemProductPropsType) => {
  return (
    <div className={clsx(style.itemLink, "_gray-background")}>
      <p className={style.productName}>{props.nameProduct}</p>
      <div className={style.linkDownPart}>
        <div>
          <Arrow borderSize="26"/>
        </div>
        <p className={style.countOffer}>{props.countOffer}</p>
      </div>
    </div>
  );
};
