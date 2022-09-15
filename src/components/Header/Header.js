// import { BrowserRouter } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { MainNavigation } from "../MainNavigation/MainNavigation";

const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <MainNavigation/>
    </header>
  );
}

export { Header }