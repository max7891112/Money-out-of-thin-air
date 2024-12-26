import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import style from "./popUp.module.scss";
import { InputValue } from "./UI/InputValue/InputValue";
import { SliderRange } from "./UI/SliderRange/SliderRange";

export const PopUp = () => {
  return (
    <div className={style.container}>
      <div className="_content-frame">
        <div className={style.parentBox}>
          <div className={style.box}>
            <div className={style.boxForParts}>
              <div className={style.upPart}>
                <p className={style.title}>Все параметры</p>
                <svg
                  className={style.crossSvg}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2863 0.714233L0.714844 19.2857"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.714844 0.714233L19.2863 19.2857"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className={style.downPart}>
                <div className={style.leftPart}>
                  <div className={style.itemBorders}>
                    <p className={style.itemNames}>Кредитный лимит</p>
                    <div className={style.valuesBorder}>
                      <InputValue text="от" currency="₽" />
                      <InputValue text="до" currency="₽" />
                    </div>
                  </div>
                  <div className={style.itemBorders}>
                    <p className={style.itemNames}>Сумма на снятие</p>
                    <div className={style.valuesBorder}>
                      <InputValue text="от" currency="₽" />
                      <InputValue text="до" currency="₽" />
                    </div>
                  </div>
                  <div className={style.itemBorders}>
                    <p className={style.itemNames}>Процентная ставка</p>
                    <div className={style.valuesBorder}>
                      <InputValue text="от" currency="₽" />
                      <InputValue text="до" currency="₽" />
                    </div>
                  </div>
                </div>
                <div className={style.rightPart}>
                  <SliderRange name="Льготный период" />
                  <SliderRange name="Беспроцентный период" />
                  <div className={style.typeBonusBlock}>
                    <p className={style.nameBonus}>Тип бонусов</p>
          
                    <input className={style.valueBonus} type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
