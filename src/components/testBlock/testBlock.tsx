import { Button } from "../../UI/Button/Button";
import style from "./BlockBlock.module.scss";
import clsx from "clsx";

export const TestBlock = () => {
  return (
    <div className={clsx(style.testBlock, "_black-background")}>
      <div className="_content-frame">
        <div className={style.container}>
          <div className={clsx(style.partOne, "_green-background")}>
            <p className={clsx(style.text, "_white-color")}>
              Или пройдите
              <br />
              короткий тест
              <br />и получите
              <br />
              индивидуальную
              <br />
              стратегию
            </p>
          </div>
          <div className={style.partTwo}></div>
          <div className={style.partThree}></div>
          <div className={style.partFour}>
            <Button
              padding="10px 30px"
              text="Пройти тест"
              width="156px"
              margin="0 0 20px 0"
              variant="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
