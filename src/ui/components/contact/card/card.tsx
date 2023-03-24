import React, { useState } from "react";
import useLocalStorage from "../../../../hook/useLocalStorage";
import { Contact } from "../../../../interface";
import EditCard from "./editcard";

interface Props {
  storage: Contact[];
  card: Contact;
  setStorage: React.Dispatch<React.SetStateAction<Contact[]>>;
}

function Card({ card, storage, setStorage }: Props) {
  const [edit, setEdit] = useState(true);

  const handleSubmit = () => {
    setEdit(!edit);
  };


  return (
    <>
      {edit ? (
        <div className="w-[100%] h-52 bg-neutral-200 dark:bg-gray-500 shadow-xl mx-auto dark:shadow-md dark:shadow-[#fafafa31] ">
          <div className="flex justify-end dark:text-neutral-50 text-gray-900">
            <button
              type="submit"
              className="bg-neutral-500 dark:bg-neutral-400 px-3 py-0.5 rounded-lg mt-3 mr-4"
              onClick={() => handleSubmit()}
            >
              {" "}
              edit
            </button>
          </div>
          <div className="flex justify-around">
            <div className="w-20 h-20">
              <img
                className="rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8UcJiZxXc_q-Zr-1dohkW5sd8lTxvpPj-g&usqp=CAU"
              />
            </div>
            <ul className=" flex flex-col text-base font-medium text-gray-800  dark:text-neutral-50 ">
              <h3 className="font-bold text-lg">{card.name}</h3>

              <li> {card.username}</li>
              <li>{card.email}</li>
              <li>{card.phone}</li>
              <li>{card.website}</li>
            </ul>
          </div>
        </div>
      ) : (
        <EditCard
          card={card}
          editCard={storage}
          setEditCard={setStorage}
          setEdit={handleSubmit}
        />
      )}
    </>
  );
}

export default Card;
