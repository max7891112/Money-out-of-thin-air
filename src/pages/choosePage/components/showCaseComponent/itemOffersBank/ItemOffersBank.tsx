import { Button } from "../../../../../UI/Button/Button";
import { LogoAndInfoBank } from "../../../../../UI/logoAndInfoBank/LogoandInfoBank";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../providers/store/hooks";
import style from "./itemOffersBank.module.scss";

export const ItemOffersBank = () => {
  const dispatch = useAppDispatch();
  const ListOfBanks = useAppSelector((state) => state.easyMoney);

  return (
    <div className={style.itemBank}>
      {ListOfBanks.map((item) => {
        return (
          <>
            <div className={style.itemBankUpPart}>
              <LogoAndInfoBank
                cardBank={item.nameCard}
                nameBank={item.nameBank}
              />
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
