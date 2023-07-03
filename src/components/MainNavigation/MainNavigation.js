import { useEffect, useRef } from "react"
import "./MainNavigation.scss"

const MainNavigation = (props) => {
  let mainNavigationRef = useRef()
  const shouldShowMenu = () => {
    if (props.shouldShow) {
      mainNavigationRef.current.classList.add("showMenu");
      mainNavigationRef.current.classList.remove("hideMenu");
    } else if (mainNavigationRef.current.classList.contains("showMenu")) {
      mainNavigationRef.current.classList.add("hideMenu");
      mainNavigationRef.current.classList.remove("showMenu");
    }
  }

  useEffect(() => {
    shouldShowMenu()
  },[props.shouldShow]);

  return(
    <nav className="mainNavigation" ref={mainNavigationRef}>
      <ul className="mainNavigation-list">
        <li className="mainNavigation-list-item"><a href="#">Proyectos</a></li>
        <li className="mainNavigation-list-item"><a href="#">Skills</a></li>
        <li className="mainNavigation-list-item"><a href="#">Contacto</a></li>
      </ul>
    </nav>
  )
}

export { MainNavigation }