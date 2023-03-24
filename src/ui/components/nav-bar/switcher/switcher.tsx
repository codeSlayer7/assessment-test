import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../../../hook/useDarkSide";

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "Light" ? true : false
  );

  const toggleDarkMode = (checked: boolean): void => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  
  return (
    <>
      <div className="w-32 flex flex-col  items-center">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={56}
        />
        <h3 className="hidden lg:flex "> {colorTheme === "Light" ? "Dark mode" : "Light mode"}</h3>
      </div>
    </>
  );
}

export default Switcher;
