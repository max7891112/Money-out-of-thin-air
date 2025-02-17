import { Link } from "react-router-dom";
import style from "./menuBurger.module.scss";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../providers/store/hooks";
import { changeMenu } from "../../providers/store/slices/headerSlice";
import {data} from '../header/Header'
import { Button } from "../../UI/Button/Button";

export const MenuBurger = () => {
    const dispatch = useAppDispatch();
    const isVisible = useAppSelector((state) => state.headerStatus)
  return (
    <header className={style.headerStyle}>
        
        <div className={style.menuBurgerVisibleElem} onClick={() => {dispatch(changeMenu({type: true}))}}>
            <div className={style.menuBurgerIcon}>
                <span></span>
            </div>
        </div>
        <div className={ isVisible ? clsx(style.menuBurgerMainContainer, style.visible)  : style.menuBurgerMainContainer}>
            <Link className={style.title} to={"/"}>
                <span className="_green-color">money</span>out
            </Link>
            <nav className={style.menuBurgerNavigation}>
            
                <ul className={style.menuBurgerContainer}>
                    {data.map((item: string[])=> {
                        return <li className={style.menuBurgerItem}><Link to={item[1]} ><span>{item[0]}</span></Link></li>
                    })}
                </ul>
            </nav>
            <div className={style.buttons}>
                <Button text="night" padding="10px 30px" variant="transparent"/>
                <Button text="Вход" padding="10px 30px" variant="green"/>
            </div>
        </div>
    </header>
  );
};
