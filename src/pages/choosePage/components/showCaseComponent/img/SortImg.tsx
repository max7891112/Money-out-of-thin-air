import { useAppDispatch } from "../../../../../providers/store/hooks";
import { sortList } from "../../../../../providers/store/slices/exampleSlice";

export const SortImg = () => {
  const dispatch = useAppDispatch();

  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        onClick={() => dispatch(sortList({sort:"Reverse"}))}
      >
        <g clipPath="url(#clip0_244_315)">
          <path
            d="M7.07104 14.8493V3.53554"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.54594 6.01042L7.07107 3.53554L4.59619 6.01042"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7279 4.94976V16.2635"
            stroke="#848484"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2531 13.7886L12.7279 16.2635L15.2028 13.7886"
            stroke="#848484"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_244_315">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(0 9.89951) rotate(-45)"
            />
          </clipPath>
        </defs>
      </svg>
  );
};
