type ArrowPropsType = {
  borderSize: string;
  transform?: string;
};

export const Arrow = (props: ArrowPropsType) => {
  return (
    <div>
      <svg
        width={props.borderSize}
        height={props.borderSize}
        transform={props.transform}
        cursor="pointer"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 25L25 1M25 1V22.913M25 1H3.08696" stroke="white" />
      </svg>
    </div>
  );
};
