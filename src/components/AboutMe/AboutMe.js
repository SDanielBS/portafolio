import { RegularButton } from "../RegularButton/RegularButton";
import curriculumIcon from "../../imgs/curriculum-icon.svg"
import githubIcon from "../../imgs/github-icon.svg"
import linkedinIcon from "../../imgs/linkedin-icon.svg"
import "./AboutMe.scss";

const AboutMe = (props) => {
  let defProfileImg = "https://staticg.sportskeeda.com/editor/2021/10/ce7da-16342796191206-1920.jpg"
  let title = props.data.hi
  let introduction = props.data.introduction
  let profileImage = props.data.profile_image ? props.data.profile_image : defProfileImg
  let actions = []
  let actionsData = props.data.actions
  let iconPaths = [curriculumIcon, githubIcon, linkedinIcon]

  actionsData.forEach((action, id) => {
    actions.push(
      <RegularButton
        key = {id}
        title = {action.name}
        url = {action.icon ? action.icon : iconPaths[id]}
        link = {action.link}
      />
    )
  });

  return(
    <div className="aboutme">
      <div className="aboutme-hi">
        <div className="introduction">
          <h3>{title}</h3>
          <p>{introduction}</p>
        </div>
        <img className="photo" src={profileImage} alt="developer"/>
      </div>
      <div className="aboutme-more">{actions}</div>
    </div>
  )
}
export { AboutMe }