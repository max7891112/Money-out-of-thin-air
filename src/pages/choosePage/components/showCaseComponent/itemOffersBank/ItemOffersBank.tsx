import { Button } from "../../../../../UI/Button/Button";
import { LogoAndInfoBank } from "../../../../../UI/logoAndInfoBank/LogoandInfoBank";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../providers/store/hooks";
import { addItemForComparsion } from '../../../../../providers/store/slices/comparsionSlice';
import { sortList } from "../../../../../providers/store/slices/exampleSlice";
import style from "./itemOffersBank.module.scss";
import {v4 as uuid} from 'uuid'

export const ItemOffersBank = () => {
  const dispatch = useAppDispatch();
  const ListOfBanks = useAppSelector((state) => state.easyMoney);

  return (
    <>
      {ListOfBanks.map((item) => {
        return (
          <div key={item.id} className={style.itemBank}>
            <div className={style.itemBankUpPart}>
              <LogoAndInfoBank
                cardBank={item.nameCard}
                nameBank={item.nameBank}
              />
              <div className={style.mainInfoBankPart}>
                {item.parametrs.map((params) => {
                  return (
                    <div key={uuid()} className={style.mainInfoBankItem}>
                      <p className={style.nameInfoService}>{params.title}</p>
                      <p className={style.serviceValue}>{params.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className={style.btnWrapper} onClick={() => {dispatch(addItemForComparsion({bank: item}))}}>
                <Button padding="10px 30px" text="Подробнее" />
              </div>
            </div>
            <div className={style.itemDownPart}>
              <div className={style.tags}>
                {item.tags?.map((tag) => {
                  return (
                    <p key={uuid()} className={style.tagValue}>
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
