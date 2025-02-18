import clsx from "clsx";
import style from "./Button.module.scss";
import { MouseEventHandler } from "react";

type ButtonPropsType = {
  padding: string;
  text: string;
  width?: string;
  margin?: string;
  svg?: JSX.Element;
  addClass?:
    | "_green-color"
    | "_green-background"
    | "_white-color"
    | "_black-background"
    | "_gray-background";
  variant: "green" | "transparent";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonPropsType) => {
  const btnStyle = {
    padding: props.padding,
    margin: props.margin,
    width: props.width,
  };
  switch (props.variant) {
    case "green":
      return (
        <button
          className={style.btn}
          style={btnStyle}
          onClick={props.handleClick}
        >
          {props.text}
        </button>
      );
    case "transparent":
      return (
        <button
          className={clsx(style.btn_transparent, "_white-color")}
          style={btnStyle}
          onClick={props.handleClick}
        >
          <div className={style.tbnContainer}>
            {props.svg}
            <p className={style.textBtn}>{props.text}</p>
          </div>
        </button>
      );
  }
};
