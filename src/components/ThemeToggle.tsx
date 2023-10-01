import { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
export const ThemeToggle = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const toggle = () => {
    setChecked((prev) => !prev);
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  };
  return (
    <label
      htmlFor="theme"
      className={`text-2xl flex items-center ml-4 border p-[6px] border-text rounded-full  cursor-pointer `}
    >
      {checked ? <BsMoonFill className="moon" /> : <BsSunFill />}
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
        className="hidden "
        id="theme"
      />
    </label>
  );
};
