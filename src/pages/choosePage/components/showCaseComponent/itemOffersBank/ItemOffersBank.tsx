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
  return (
    <div className={style.itemBank}>
      {ListOfBanks.map((item) => {
        return (
          <>
            <div className={style.itemBankUpPart}>
              <LogoAndInfoBank />
              <div className={style.mainInfoBankPart}>
                {item.parametrs.map((params) => {
                  return (
                    <div key={item.id} className={style.mainInfoBankItem}>
                      <p className={style.nameInfoService}>{params.title}</p>
                      <p className={style.serviceValue}>{params.value}</p>
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
                {item.tags?.map((tag) => {
                  return (
                    <p className={style.tagValue} onClick={() => {}}>
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
