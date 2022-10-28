import { RegularButton } from "../RegularButton/RegularButton";
import "./AboutMe.scss";

const AboutMe = () => {
  return(
    <div className="aboutme">
      <div className="aboutme-hi">
        <div className="introduction">
          <h3>Hola!!</h3>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impreso</p>
        </div>
        <img className="photo" src="https://staticg.sportskeeda.com/editor/2021/10/ce7da-16342796191206-1920.jpg" alt="developer"/>
      </div>
      <div className="aboutme-more">
        <RegularButton
          title = "Hola"
          url = "https://staticg.sportskeeda.com/editor/2021/10/ce7da-16342796191206-1920.jpg"
        />
        <RegularButton
          title = "Hello"
          url = "https://staticg.sportskeeda.com/editor/2021/10/ce7da-16342796191206-1920.jpg"
        />
        <RegularButton
          title = "Sams"
          url = "https://staticg.sportskeeda.com/editor/2021/10/ce7da-16342796191206-1920.jpg"
        />
      </div>
    </div>
  )
}
export { AboutMe }