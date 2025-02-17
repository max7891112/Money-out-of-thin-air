import clsx from "clsx";
import { Button } from "../../../../UI/Button/Button";
import { LogoAndInfoBank } from "../../../../UI/logoAndInfoBank/LogoandInfoBank";
import { CrossSvg } from "../PopUp/UI/crossSvg/CrossSvg";
import style from "./popUpItemBank.module.scss";
import { useAppSelector } from "../../../../providers/store/hooks";
import { useEffect, useState } from "react";

export const PopUpItemBank = () => {
  const listSettingsBank = useAppSelector((state) => state.comparsionProduct);
  console.log(listSettingsBank);
  const [flag, flagSet] = useState(false);

  useEffect(() => {
    flagSet(!flag);
  }, [listSettingsBank]);

  return (
    <div className={clsx(style.wrapper, "_gray-background")}>
      <div className={style.upPart}>
        <div className={style.leftUpPart}>
          <LogoAndInfoBank
            cardBank="Platinum Premium"
            nameBank="Т-банк"
            fontSize="26px"
          />
        </div>
        <div className={style.rightUpPart}>
          <CrossSvg />
        </div>
      </div>
      <div className={clsx(style.mainBlock, "_white-color")}>
        {flag ? (
          <div>PopUp is hidden</div>
        ) : (
          listSettingsBank[0]?.schemes?.map((item, index) => {
            return (
              <>
                <p className={style.nameScheme}>
                  {++index}. {item.name}
                </p>
                <p className={style.scheme}>{item.scheme}</p>
              </>
            );
          })
        )}
      </div>
      <div className={style.downPart}>
        <Button
          padding="10px 30px"
          text="Подробнее"
          variant="transparent"
          width="184px"
          margin="0 15px 0 0"
        />
        <Button padding="10px 30px" text="Перейти на сайт" variant="green" />
      </div>
    </div>
  );
};
