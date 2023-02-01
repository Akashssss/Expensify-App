import React, { Component } from "react";
import { useState } from "react";

export function Input({ type, title, getData, modify = undefined }) {
  const [value, setValue] = useState("");

  const dataSetter = (e) => {
    const v = e.target.value;

    switch (modify) {
      case "cash":
        if (v.match(/^\d*(\.\d{0,2})?$/)) {
          setValue(v);
          getData(v);
        }
        break;
      default: {
        setValue(v);
        getData(v);
      }
    }
  };

  return (
    <div className="relative">
      <input
        value={value}
        onChange={dataSetter}
        type={type}
        id={title}
        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
        {title}
      </label>
    </div>
  );
}

export function Textarea({ title, getData }) {
  return (
    <div className="relative">
      <textarea
        onChange={(e) => {
          getData(e.target.value);
        }}
        id={title}
        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
        {title}
      </label>
    </div>
  );
}

export function Button({ type, title }) {
  return (
    <div>
      <button
        type={type}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {title}
      </button>
    </div>
  );
}
