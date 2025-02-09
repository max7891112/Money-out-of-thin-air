import style from './Button.module.scss'

type ButtonPropsType = {
  padding: string;
  text: string;
  margin?: string;
};

export const Button = (props: ButtonPropsType) => {
  const btnStyle = {
    padding: props.padding,
    margin: props.margin,
  };

  return <button className={style.btn} style={btnStyle}>{props.text}</button>;
};
