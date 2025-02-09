import { useState } from "react";
import style from "./inputValue.module.scss";

type InputValuePropsType = {
  text: "от" | "до";
  currency: "$" | "₽" | "€";
};

export const InputValue = (props: InputValuePropsType) => {
  const [value, setValue] = useState("");

  return (
    <div className={style.valuesBorder}>
      <div className={style.inputWrapper}>
        {value ? <></> : <p className={style.inputText}>{props.text}</p>}
        <p className={style.inputSign}>{props.currency}</p>
        <input
          type="text"
          className={style.firstBorder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
