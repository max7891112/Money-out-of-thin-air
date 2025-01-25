type FilterPropsType = {
    color: string;
}

export const FilterSvg = (props: FilterPropsType) => {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2849 14.9287H6.42773"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.42718 14.9287C6.42718 13.6269 5.37185 12.5716 4.07003 12.5716C2.76821 12.5716 1.71289 13.6269 1.71289 14.9287C1.71289 16.2306 2.76821 17.2859 4.07003 17.2859C5.37185 17.2859 6.42718 16.2306 6.42718 14.9287Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.71289 7.07153H6.42718"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1426 7.07153H14.2854"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.142 7.07157C11.142 5.7698 10.0867 4.71442 8.78488 4.71442C7.48306 4.71442 6.42773 5.7698 6.42773 7.07157C6.42773 8.37339 7.48306 9.42871 8.78488 9.42871C10.0867 9.42871 11.142 8.37339 11.142 7.07157Z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
