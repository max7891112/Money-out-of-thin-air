import { SvgIcon } from "@mui/material";
import style from './style.module.scss';

export function CrossSvg() {
  return (
    <SvgIcon>
      <svg
        className={style.crossSvg}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.2863 0.714233L0.714844 19.2857"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.714844 0.714233L19.2863 19.2857"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}
