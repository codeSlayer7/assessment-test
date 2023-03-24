import React, { useState } from "react";
import SortIcon from "../../../assets/sort";
import { Contact } from "../../../interface";

interface Props {
  term: string;
  sorting: (arg0: boolean) => void;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchInput({ term, setTerm, sorting }: Props) {
  const [sorted, setSorted] = useState(false);
  return (
    <>
      <div className="flex ml-5">
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border outline-none text-gray-900 border-solid border-neutral-400 bg-transparent bg-clip-padding px-3 py-1.5 text-base dark:text-neutral-200 dark:placeholder:text-neutral-200"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button
              className="relative z-[2] flex items-center rounded-r px-6 py-2.5 text-xs font-medium uppercase leading-tight hover:opacity-75 shadow-md dark:hover:bg-slate-500 "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          className="w-10 h-10 ml-10 hover:bg-slate-200 cursor-pointer dark:hover:bg-gray-400"
          onClick={() => {
            sorting(sorted), setSorted(!sorted);
          }}
        >
          <SortIcon />
        </button>
      </div>
    </>
  );
}

export default SearchInput;
