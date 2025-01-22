import style from './logoAndInfoBank.module.scss';
type PropsLogoAndInfoBankType = {
  cardBank: string;
  nameBank: string;
}

export const LogoAndInfoBank = (props: PropsLogoAndInfoBankType) => {
  return (
    <div className={style.nameBankPart}>
      <div className={style.logoBank}></div>
      <div className={style.cardAndNameBank}>
        <p className={style.cardBank}>{props.cardBank}</p>
        <p className={style.nameBank}>{props.nameBank}</p>
      </div>
    </div>
  );
};
