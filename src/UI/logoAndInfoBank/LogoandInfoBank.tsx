import style from './logoAndInfoBank.module.scss';

export const LogoAndInfoBank = () => {
  return (
    <div className={style.nameBankPart}>
      <div className={style.logoBank}></div>
      <div className={style.cardAndNameBank}>
        <p className={style.cardBank}>Platinum Premium</p>
        <p className={style.nameBank}>Т-банк</p>
      </div>
    </div>
  );
};
