import { useEffect, useState } from "react";

function useDarkSide(): [string, any] {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "Light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);

  }, [theme, colorTheme]);


  return [colorTheme, setTheme];
}

export default useDarkSide;
