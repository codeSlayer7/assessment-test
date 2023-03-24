import { SetStateAction, useState } from "react";
import useLocalStorage from "../../../../hook/useLocalStorage";
import { Contact } from "../../../../interface";
import Input from "../input";
interface Props {
  card: Contact;
  setEditCard: React.Dispatch<SetStateAction<Contact[]>>;
  editCard: Contact[];
  setEdit: () => void;
}
function EditCard({ card, editCard, setEditCard, setEdit }: Props) {
  const [editText, setEditText] = useState(card);
  const [storage, setStorage] = useLocalStorage<any>("Users");
  const editUsers = (id :number) => {
    const index = editCard.findIndex((x) => x.id === id);
    if (index > -1) {
      const newState = [...editCard];
      newState[index] = {
        ...editText,
      };
      setEditCard(newState);
      setStorage(newState);
      setEdit();
    }
  };
  console.log(editText);
  return (
    <div className="w-[100%] h-52 bg-neutral-200 dark:bg-gray-500 shadow-xl mx-auto dark:shadow-md dark:shadow-[#fafafa31] ">
      <div className="flex  justify-around mt-2 dark:text-neutral-50 text-gray-900">
        <div className="w-10 h-10">
          <img
            className="rounded-full"
            src="https://marinho-barcellos.github.io/authors/lucas-freire/avatar_hu75a1c5f6092c9fa9e71011502896aed8_22149_270x270_fill_lanczos_center_2.png"
          />
        </div>
        <button
          type="submit"
          className="bg-neutral-500 dark:bg-neutral-400 px-4  text-xs font-medium uppercase  rounded-lg hover:opacity-75 "
          onClick={() => editUsers(card.id)}
        >
          {" "}
          Submit
        </button>
      </div>
      <div className="flex ">
        <form className="flex ">
          <div>
            <Input name="name" setValue={setEditText} valueInput={editText} />
            <Input name="username" setValue={setEditText} valueInput={editText} />
          </div>
          <div>
            <Input name="email" setValue={setEditText} valueInput={editText} />
            <Input name="phone" setValue={setEditText} valueInput={editText} />
            <Input name="website" setValue={setEditText} valueInput={editText} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCard;
