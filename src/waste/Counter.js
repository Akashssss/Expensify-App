import React from "react";
import { increment } from "../features/counterSlice";
import { useDispatch } from "react-redux";
export default function Counter() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
}
