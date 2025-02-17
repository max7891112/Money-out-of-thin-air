import style from "./style/App.module.scss";
import { useAppDispatch } from "./providers/store/hooks";
import { changeMenu } from "./providers/store/slices/headerSlice";
type WrapperPropsType = {
  children: JSX.Element[];
};

export function Wrapper({ children }: WrapperPropsType) {
  const dispatch = useAppDispatch();
  return <div className={style.content} onMouseOver={() => {dispatch(changeMenu({type: false}))}}>{children}</div>;
}
