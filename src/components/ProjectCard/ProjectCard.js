import { LanguageTag } from "../LanguageTag/LanguageTag";
import { RegLink } from "../RegLink/RegLink";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  let languages = [];
  let links = [];

  props.languages.forEach((element, id) => {
    languages.push(<LanguageTag 
      key={id} 
      color={element.color}
      language={element.language}/>);
  })

  props.links.forEach((element, id) => {
    links.push(<RegLink 
      key={id} 
      url={element.url} 
      text={element.text}/>);
  })

  return (
    <div className="projectCard">
      <h3 className="projectTitle">{props.title}</h3>
      <p className="projectSummary">{props.summary}</p>
      <div className="projectLanguages">{languages}</div>
      <div className="projectLinks">{links}</div>
    </div>
  );
}

export { ProjectCard }