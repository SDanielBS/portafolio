import { AboutMe } from "../AboutMe/AboutMe";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { SkillView } from "../SkillView/SkillView";
import "./Main.scss";

const Main = () => {
  let projects = {
    result : {
      title : "Card 1",
      summary : "Sí!!! Edgar Vivar, nos acompaña en esta edición de CTM, Sí, el mismísimo señor Barriga, el ñoño, El Botija, es parte de este show y jugamos con él muchos de los juegos",
      languages : [
        {
          color : "#BFAC00",
          language : "JavaScript"
        },
        {
          color : "#349DEA",
          language : "HTML"
        },
        {
          color : "#C58E01",
          language : "SCSS"
        },
        {
          color : "#008E0E",
          language : "React.js"
        },
        {
          color : "#BF7E00",
          language : "Node.js"
        }
      ],
      links : [
        {
          text : "Repositorio",
          url : "https://github.com/SDanielBS/",
        },
        {
          text : "Ver en linea",
          url : "https://github.com/SDanielBS/",
        }
      ]
    }
  };

  let skills = {
    result : [
      {
        language : "GIT (github, bitbucket)",
        level : "80"
      },
      {
        language : "HTML",
        level : "70"
      },
      {
        language : "CSS - SASS",
        level : "60"
      },
      {
        language : "JavaScript",
        level : "60"
      },
      {
        language : "TS",
        level : "40"
      },
      {
        language : "React JS - TS",
        level : "50"
      },
      {
        language : "Java",
        level : "50"
      },
      {
        language : "Swift",
        level : "50"
      },
      {
        language : "PHP",
        level : "30"
      },
      {
        language : "Figma",
        level : "50"
      }
    ]
  };

  let pjTitle = projects.result.title;
  let pjSummary = projects.result.summary;
  let pjLanguages = projects.result.languages;
  let pjLinks = projects.result.links;

  let projectsCards = [];
  let skillViews = [];

  for (let i = 0; i < 2; i++) {
    projectsCards.push(
    <ProjectCard 
      key={i}
      title={pjTitle} 
      summary={pjSummary}
      languages={pjLanguages}
      links={pjLinks}
    />
    );
  }

  skills.result.forEach((skill, id) => {
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
        <AboutMe/>
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
        {/* todo */}
      </div>
    </main>
  );
}

export { Main }