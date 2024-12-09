import { useState } from "react";
import { Button } from "../../../../../UI/Button/Button";
import { LogoAndInfoBank } from "../../../../../UI/logoAndInfoBank/LogoandInfoBank";
import style from "./itemOffersBank.module.scss";

type ParametrType = {
  id: string;
  name: string;
  value: string;
};

type TagsType = string[];

export const ItemOffersBank = () => {
  const [parametrs, setParametrs] = useState<ParametrType[]>([
    { id: "crLim", name: "Кредитный лимит", value: "1 500 000 Р" },
    { id: "porcSt", name: "Процентная ставка", value: "20%" },
    { id: "lgPer", name: "Льготный период", value: "120 дней" },
    { id: "besPer", name: "Беспроцентный период", value: "60 дней" },
    { id: "sumSn", name: "Сумма на снятие", value: "500 000 Р" },
  ]);

  const [tags, setTags] = useState<TagsType>([
    "Бесплатное обслуживание",
    "Льготный период больше 90 дней",
    "Кэшбэк рублями",
    "Кэшбэк хуями",
  ]);

  return (
    <div className={style.itemBank}>
      <div className={style.itemBankUpPart}>
        <LogoAndInfoBank />
        <div className={style.mainInfoBankPart}>
          {parametrs.map((item) => {
            return (
              <div key={item.id} className={style.mainInfoBankItem}>
                <p className={style.nameInfoService}>{item.name}</p>
                <p className={style.serviceValue}>{item.value}</p>
              </div>
            );
          })}
        </div>
        <div className={style.btnWrapper}>
          <Button padding="10px 30px" text="Подробнее" />
        </div>
      </div>
      <div className={style.itemDownPart}>
        <div className={style.tags}>
          {tags.map((item) => {
            return <p className={style.tagValue} onClick={() => setTags([])}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
