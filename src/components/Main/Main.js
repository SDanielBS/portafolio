import { AboutMe } from "../AboutMe/AboutMe";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SkillView } from "../SkillView/SkillView";
import projectJson from '../../dataSource/projectData.json';
import contactJson from '../../dataSource/contactData.json';
import skillsJson from '../../dataSource/skillsData.json';
import aboutmeJson from '../../dataSource/aboutmeData.json';
import "./Main.scss";

const Main = () => {
  let projectsCards = [];
  let skillViews = [];

  projectJson.projects.forEach((project, id) => {
    projectsCards.push(
      <ProjectCard 
        key={id}
        title={project.title} 
        summary={project.summary}
        languages={project.languages}
        links={project.links}
      />
    );
  })

  skillsJson.languages.forEach((skill, id) => {
    skillViews.push(
      <SkillView
        key={id}
        language={skill.language}
        percentage={skill.level}
      />
    );
  });

  return (
    <main>
      <div className="bannerContainer">
        <AboutMe data={aboutmeJson.result}/>
      </div>
      <div className="projectsContainer">
        <h2>Proyectos</h2>
        <div className="projecsCard">{projectsCards}</div>
      </div>
      <div className="skillsContainer">
        <h2>Skills</h2>
        <div className="skillViews">{skillViews}</div>
      </div>
      <div className="contactsContainer">
        <h2>Contacto</h2>
        <p>{contactJson.result.text ? contactJson.result.text : "De momento no estoy buscando nada unu" }</p>
      </div>
    </main>
  );
}

export { Main }