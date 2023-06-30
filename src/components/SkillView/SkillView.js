import "./SkillView.scss";
import {useEffect, useRef} from "react";

const SkillView = (props) => {
  let skillLeverPB = useRef();

  useEffect(()=>{
    skillLeverPB.current.style.opacity = 1
    skillLeverPB.current.style.width = skillLeverPB.current.getAttribute("data-done")+"%";
  },[]);

  let knowledgeLevel = ""
  let percentage = parseInt(props.percentage)

  if (percentage > 80) {
    knowledgeLevel = "alto"
  } else if (percentage > 60) {
    knowledgeLevel = "medio - alto"
  } else if (percentage > 45) {
    knowledgeLevel = "medio"
  } else if (percentage > 30) {
    knowledgeLevel = "medio - bajo"
  } else {
    knowledgeLevel = `${percentage}/100`
  }

  return(
    <div className="skillView">
      <h3>{props.language}</h3>
      <div className="progressBar">
        <span ref={skillLeverPB} className="progressBar-done" data-done={props.percentage}>
          {knowledgeLevel}
        </span>
      </div>
    </div>
  )
}

export { SkillView }