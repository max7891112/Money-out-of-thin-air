import { Link } from "react-router-dom";
import { Button } from "../../UI/Button/Button";
import style from "./header.module.scss";
const data: string[][] = [['Вклады', '/deposit'], ["Кредитные карты","/creditCard" ], ["Дебетовые карты", "card"], ["Инвестиции", "/investment"], ["Программы лояльности", "/loyalty"], ["Акции", "/promotion"], ["Банки", "/banks"]]
export const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className="_content-frame">
          <div className={style.container}>
            <Link className={style.title} to={"/"}>
              <span className="_green-color">money</span>out
            </Link>

            <div className={style.base}>
              {data.map((item: string[])=> {
                return <Link to={item[1]} className={style.item}>{item[0]}</Link>
              })}
            </div>

            <div className={style.buttons}>
              <div className={style.buttonNightMode}>night mode</div>

              <Button text="Вход" padding="10px 30px" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
