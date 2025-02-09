type ArrowPropsType = {
    borderSize: string
}

export const Arrow = (props: ArrowPropsType) => {
  return (
    <div>
      <svg
        width={props.borderSize}
        height={props.borderSize}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 25L25 1M25 1V22.913M25 1H3.08696"/>
      </svg>
    </div>
  );
};
