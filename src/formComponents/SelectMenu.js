import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../features/filterSlice";
import SortTwoToneIcon from "@mui/icons-material/SortTwoTone";
export default function SelectMenu({ options }) {
  let [open, setOpen] = useState(false);
  let [selected, setSelected] = useState("Date");
  const dispatch = useDispatch();
  return (
    <div className="sm:flex  rounded-xl w-1/4 ">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="w-16  h-12 flex justify-center items-center p-2.5 text-lg text-white bg-orange-500 font-thin sm:rounded-l-lg rounded-lg"
      >
        <SortTwoToneIcon />
      </div>

      <div className="w-40 ">
        <div
          className={` hidden bg-slate-50 text-center  sm:flex item-centre justify-center  cursor-pointer h-12 pt-2.5 text-xl font-extralight  rounded-lg`}
        >
          {selected}
        </div>
        <ul
          className={`bg-white mt-2 z-[999] absolute w-40 ${
            open ? "" : "hidden"
          } `}
        >
          {options.map((opt) => {
            return (
              <li
                onClick={() => {
                  setSelected(opt);
                  if (opt === "Date") dispatch(filter.sortByDate());
                  else if (opt === "Amount") dispatch(filter.sortByAmount());
                  setOpen(!open);
                }}
                className={`p-2 text-sm hover:bg-yellow-100  bg-yellow-50 text-yellow-900`}
                key={opt}
              >
                {opt}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
