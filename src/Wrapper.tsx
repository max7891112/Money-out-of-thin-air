import style from "./style/App.module.scss";
type WrapperPropsType = {
  children: JSX.Element[];
};

export function Wrapper({ children }: WrapperPropsType) {
  return <div className={style.content}>{children}</div>;
}
