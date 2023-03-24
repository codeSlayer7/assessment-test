import { SetStateAction } from "react";
import { Contact } from "../../../interface";

interface Props {
  name: string;
  valueInput: Contact;
  setValue: React.Dispatch<SetStateAction<Contact>>;
}

function Input({ name, valueInput, setValue }: Props) {
  return (
    <div className="mx-2">
      <span className="text-sm font-thin dark:text-neutral-300  text-gray-900">
        {" "}
        {name}
      </span>
      <div className="relative bg-neutral-400  ">
        <input
          type="text"
          className=" block min-h-[auto] w-full rounded border-0 bg-transparent  px-3  outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity"
          value={valueInput[name as keyof Contact] as string}
          name={name}
          onChange={(e) =>
            setValue({ ...valueInput, [e.target.name]: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default Input;
