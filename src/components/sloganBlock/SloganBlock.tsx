import style from "./slogan.module.scss";
import clsx from "clsx";

export const SloganBlock = () => {
  return (
    <div className={clsx(style.slogan, '_green-background')}>
      <div className="_content-frame">
        <div className={style.sloganBox}>
            <div className={clsx(style.leftPart, '_green-background')}>
                <p className={clsx(style.textSlogan, '_white-color')}>Пусть<br/>привычные<br/>вещи начнут<br/>приносить<br/>прибыль</p>
            </div>
            <div className={style.rightPart}>
                <img src="src\components\sloganBlock\img\270456551cc3738736297ce06e665358.png" alt="" className={style.img}/>
                <div className={style.lightGreenLine}></div>
                <div className={style.middleGreenLine}></div>
            </div>
        </div>
      </div>
    </div>
  );
};
