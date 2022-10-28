import "./MainNavigation.scss"

const MainNavigation = () => {
  return(
    <nav className="mainNavigation">
      <ul className="mainNavigation-list">
        <li className="mainNavigation-list-item"><a href="#">Proyectos</a></li>
        <li className="mainNavigation-list-item"><a href="#">Skills</a></li>
        <li className="mainNavigation-list-item"><a href="#">Contacto</a></li>
      </ul>
    </nav>
  )
}

export { MainNavigation }