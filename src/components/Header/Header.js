// import { BrowserRouter } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo/>
        <MainNavigation/>
      </div>
    </header>
  );
}

export { Header }