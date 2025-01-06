import { SvgIcon } from "@mui/material";

export function CustomSvgIcon(props) {
  return (
    <SvgIcon {...props} viewBox="" sx={{width: '16px', height: '10px',
      '&': {top: 'initial'}
    }}>
      <path
        d="M14.7694 1.25L7.38477 8.75"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.23047 1.25L7.38431 8.75"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
}
