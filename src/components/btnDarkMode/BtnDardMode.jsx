import {useEffect, useRef } from "react";

import { useLocalStorage } from "../../helpers/UseLocalStorage";

import "./style.css";

import sun from "./sun.svg";
import moon from "./moon.svg";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark", "light");

  const refBtn = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      refBtn.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      refBtn.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const turnDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <button ref={refBtn} className="dark-mode-btn" onClick={turnDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
