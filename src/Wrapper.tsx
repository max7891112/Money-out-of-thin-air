import style from "./style/App.module.scss";
type WrapperProps = {
  children: JSX.Element[];
};

export function Wrapper({ children }: WrapperProps) {
  return <div className={style.content}>{children}</div>;
}
