// import { BrowserRouter } from "react-router-dom";
import { useRef, useState } from "react";
import { Logo } from "../Logo/Logo";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import "./Header.scss"

const Header = () => {
  let [isChecked, setCheck] = useState(false)
  const toggleMenu = () => {
    setCheck(!isChecked)
  }
  return (
    <header className="header">
      <div className="header-container">
        <Logo/>
        <MainNavigation
          shouldShow={isChecked}
        />
        <button className="hamburguer" onClick={toggleMenu}>
          <span className="hamburguer_line" />
        </button>
      </div>
    </header>
  );
}

export { Header }