import { useState } from "react";
import { Button } from "../../../../../UI/Button/Button";
import { LogoAndInfoBank } from "../../../../../UI/logoAndInfoBank/LogoandInfoBank";
import style from "./itemOffersBank.module.scss";
import { v1 } from "uuid";

type ParametrType = {
  title: string;
  value: string;
};

type TagsType =
  | "Бесплатное обслуживание"
  | "Льготный период больше 90 дней"
  | "Кэшбэк рублями"
  | "Кэшбэк хуями";

type BankItemType = {
  id: string;
  nameBank: string;
  nameCard: string;
  parametrs: ParametrType[];
  tags?: TagsType[];
};

type ListOfBanksType = BankItemType[];

const ListOfBanks: ListOfBanksType = [
  {
    id: v1(),
    nameBank: "Т-банк",
    nameCard: "Platinum Premium",
    parametrs: [
      { title: "Кредитный лимит", value: "1 500 000 Р" },
      { title: "Процентная ставка", value: "20%" },
      { title: "Льготный период", value: "120 дней" },
      { title: "Беспроцентный период", value: "60 дней" },
      { title: "Сумма на снятие", value: "500 000 Р" },
    ],
    tags: [
      "Бесплатное обслуживание",
      "Льготный период больше 90 дней",
      "Кэшбэк рублями",
      "Кэшбэк хуями",
    ],
  },
];

export const ItemOffersBank = () => {
  const [parametrs, setParametrs] = useState<ParametrType[]>([
    { title: "Кредитный лимит", value: "1 500 000 Р" },
    { title: "Процентная ставка", value: "20%" },
    { title: "Льготный период", value: "120 дней" },
    { title: "Беспроцентный период", value: "60 дней" },
    { title: "Сумма на снятие", value: "500 000 Р" },
  ]);

  const [tags, setTags] = useState<TagsType[]>([
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
              <div
                key={item.id}
                className={style.mainInfoBankItem}
                onClick={() => {
                  setParametrs(parametrs.filter((el) => el.id !== item.id));
                }}
              >
                <p className={style.nameInfoService}>{item.title}</p>
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
            return (
              <p className={style.tagValue} onClick={() => {}}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
