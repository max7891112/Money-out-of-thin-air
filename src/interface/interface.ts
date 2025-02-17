export type ParametrType = {
  title: string;
  value: string;
};

export type TagsType =
  | "Бесплатное обслуживание"
  | "Льготный период больше 90 дней"
  | "Кэшбэк рублями"
  | "Кэшбэк хуями";

type DetailsNameType =
  | "Выпуск карты"
  | "Обслуживание"
  | "Страховка"
  | "Кэшбэк"
  | "Округление"
  | "Когда выплачивают"
  | "Вывод"
  | "Перевод кэшбэка"
  | "Лимит кэшбэка"
  | "Тип кэшбэка"
  | "Сберегательный счет"
  | "Расчетный период"
  | "HOLD"
  | "Перевод по СБП"
  | "Перевод по СБП себе"
  | "Флагомер"
  | "МСС";

export type DetailsType = {
  name: DetailsNameType,
  value: string;
};

export type SchemesType = {
  name: string;
  scheme: string;
};

export type BankItemType = {
  id: string;
  nameBank: string;
  nameCard: string;
  parametrs: ParametrType[];
  tags?: TagsType[];
  details?: string;
  typeCard?: string;
  description?: DetailsType[];
  schemes?: SchemesType[];
};

export type ListOfBanksType = BankItemType[];

export type ActionSortType = {
  payload: {
    sort: "CredLim" | "SumSnat" | "LgotPer" | "BesprPer" | "ProcSt" | "Reverse";
  };
};

export type ActionBankItemType = {
  payload: {
    bank: BankItemType;
  };
};
