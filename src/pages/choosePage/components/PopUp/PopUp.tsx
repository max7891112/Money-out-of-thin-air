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
import { CrossSvg } from "./UI/crossSvg/CrossSvg";
import { Button } from "../../../../UI/Button/Button";
import {v4 as uuid} from 'uuid';

type ParametrType = "Кредитный лимит" | "Сумма на снятие" | "Процентная ставка";
type ParametrsType = { title: ParametrType; symbol: "$" | "₽" | "€" | "%" };

export const PopUp = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const parametrs: ParametrsType[] = [
    { title: "Кредитный лимит", symbol: "₽" },
    { title: "Сумма на снятие", symbol: "₽" },
    { title: "Процентная ставка", symbol: "%" },
  ];

  return (
    <div className={style.container}>
      <div className="_content-frame">
        <div className={style.parentBox}>
          <div className={style.box}>
            <div className={style.boxForParts}>
              <div className={style.upPart}>
                <p className={style.title}>Все параметры</p>
                <CrossSvg />
              </div>
              <div className={style.downPart}>
                <div className={style.leftPart}>
                  {parametrs.map((item) => {
                    return (
                      <div key={uuid()} className={style.itemBorders}>
                        <p className={style.itemNames}>{item.title}</p>
                        <div className={style.valuesBorder}>
                          <InputValue text="от" currency={item.symbol} />
                          <InputValue text="до" currency={item.symbol} />
                        </div>
                      </div>
                    );
                  })}
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
              <div className={style.footer}>
                <Button text="Очистить фильтры" padding="10px 30px" variant="transparent"/>
                <Button text="Подобрать" padding="10px 30px" variant="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
