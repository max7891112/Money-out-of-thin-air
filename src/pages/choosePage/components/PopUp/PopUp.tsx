import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import style from "./popUp.module.scss";
import { InputValue } from "./UI/InputValue/InputValue";
import { SliderRange } from "./UI/SliderRange/SliderRange";
import { useState } from "react";
import { CustomSvgIcon } from "./UI/checkArrow/CheckArrow";

export const PopUp = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
                    <Box
                      sx={{
                        ".MuiInputLabel-root.Mui-focused": { display: "none" },
                        ".MuiInputLabel-root": { display: "none" },
                        ".MuiSelect-root.Mui-focused": { borderColor: "#fff" },
                      }}
                    >
                      <FormControl
                        fullWidth
                        sx={{ width: "279px", height: "41px" }}
                      >
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{
                            ".MuiInputLabel-root.Mui-focused": {
                              color: "#fff",
                            },
                          }}
                        >
                          Age
                        </InputLabel>

                        <Select
                          sx={{ bgcolor: "#000", color: "#808080" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label=""
                          onChange={handleChange}
                          IconComponent={CustomSvgIcon}
                          size="small"
                        >
                          <MenuItem value={10}>Мили</MenuItem>
                          <MenuItem value={20}>Внутренняя валюта</MenuItem>
                          <MenuItem value={30}>Рубли</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
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
