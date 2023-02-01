import React from 'react'
import {useNavigate} from "react-router-dom";
export default function ExpenseStyle({Description , Note ,Amount ,id ,remove}) {
  let navigate = useNavigate() ;
 const editExpenseRoute =(id)=>{
  console.log("helo")
    navigate(`/editExpense/${id}`);
 }
   
  return (
    <div className="text-gray-600 body-font border border-slate-200 m-[4%] rounded-lg shadow-md z-0">
      <div className="container mx-auto">
        <div className="h-50 w-full rounded-lg bg-white ">
          <div className="flex items-center justify-between border-b">
            <div className="p-3 text-gray-700 text-lg font-bold truncate w-5/6">
              {Description}
            </div>
            <div className="p-3 flex">
              <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
               onClick = {()=>{editExpenseRoute(id)}}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </span>
                <span>Edit</span>
              </button>
              <button
                onClick={() => {
                  remove(id);
                }}
                className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <span>Remove</span>
              </button>
            </div>
          </div>
          {!!Note && (
            <div className="p-3 text-lg text-gray-600 h-auto">
              <span>{Note}</span>
            </div>
          )}
          <div className="flex flex-row-reverse p-3 border-t text-lg text-gray-600">
            <span
              className="mr-10 font-bold text-2xl"
              style={{ fontStyle: "italic" }}
            >
              $ {Amount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
