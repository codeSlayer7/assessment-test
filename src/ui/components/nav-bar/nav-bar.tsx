import { useEffect, useMemo, useState } from "react";
import useLocalStorage from "../../../hook/useLocalStorage";
import { Contact } from "../../../interface";
import Card from "../contact/card/card";
import SearchInput from "../search-panel/search";
import Switcher from "./switcher/switcher";

function Navbar() {
  const [storage, setStorage] = useLocalStorage<any>("Users", "");
  const [users, setUsers] = useState<Contact[] | []>([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (!storage) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setStorage(data));
    }
  }, []);

  useEffect(() => {
    setUsers(storage);
  }, [storage]);

  const sorting = (sorted: boolean): void => {
    if (sorted) {
      let user1 = [...users];
      let sortedUsers = user1.sort(function (a: any, b: any) {
        if (a.name.trim().toLowerCase() > b.name.trim().toLowerCase())
          return -1;
        if (a.name.trim().toLowerCase() < b.name.trim().toLowerCase()) return 1;
        return 0;
      });
      setUsers(sortedUsers);
    } else {
      let user1 = [...users];
      let sortedUsers = user1.sort(function (a: any, b: any) {
        if (a.name.trim().toLowerCase() < b.name.trim().toLowerCase())
          return -1;
        if (a.name.trim().toLowerCase() > b.name.trim().toLowerCase()) return 1;
        return 0;
      });
      setUsers(sortedUsers);
    }
  };

  return (
    <>
      <div className="dark:bg-gray-800 bg-slate-300">
        <div className="relative flex w-full justify-between bg-neutral-100 py-2 px-1 text-neutral-500 shadow-lg dark:bg-gray-900">
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <h2 className="text-xl lg:text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
              {" "}
              Oracle Digital
            </h2>
          </div>
          <Switcher />
        </div>
        <div className="w-[90%] mx-auto mt-10 pb-20">
          <SearchInput term={term} setTerm={setTerm} sorting={sorting} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 min-h-[100vh]  max-h-[100%] dark:bg-gray-800 mb-5">
            {users
              .filter((user) => {
                return user.name.toLowerCase().includes(term.toLowerCase());
              })
              .map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  storage={users}
                  setStorage={setUsers}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
