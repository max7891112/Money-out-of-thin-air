import { useAppDispatch, useAppSelector } from "./providers/store/hooks";
import { increment, decrement } from "./providers/store/slices/exampleSlice";
import "./style/App.scss";

export const App = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.easyMoney.count);
  return (
    <>
      <p>{counter}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="app-button"
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="app-button"
      >
        -
      </button>
    </>
  );
};
