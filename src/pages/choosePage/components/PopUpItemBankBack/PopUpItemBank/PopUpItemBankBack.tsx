import clsx from "clsx";
import { Button } from "../../../../../UI/Button/Button";
import { LogoAndInfoBank } from "../../../../../UI/logoAndInfoBank/LogoandInfoBank";
import style from "./popUpItemBankBack.module.scss";
import { useAppSelector } from "../../../../../providers/store/hooks";
import { useEffect, useState } from "react";
import { Arrow } from "../../../../../UI/arrow/Arrow";

export const PopUpItemBankBack = () => {
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
          <Arrow borderSize="20" transform="rotate(225)" />
          {/* <CrossSvg/> */}
        </div>
      </div>
      <div className={clsx(style.mainBlock, "_white-color")}>
        {flag ? (
          <div>PopUp is hidden</div>
        ) : (
          <table>
            <tbody>
              <tr>
                <th>Показатель lalala карты</th>
                <th>Значение</th>
              </tr>
              {listSettingsBank[0]?.description?.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.value}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
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
