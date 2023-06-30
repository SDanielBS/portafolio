import { useEffect, useRef } from "react";
import "./RegularButton.scss";

const RegularButton = (props) => {
  let refImg = useRef();
  let refAboutmeBtn = useRef(); 

  const shouldShowView = (value, viewRef) => {
    if (value == null || value === "") {
      viewRef.current.classList.add("setHide");
    } else {
      if (viewRef.current.classList.contains("setHide")) {
        viewRef.current.classList.remove("setHide");
      }
    }
  }

  useEffect(() => {
    shouldShowView(props.link, refAboutmeBtn)
  },[props.link]);

  return(
    <a className="button" rel="noreferrer" target="_blank" href={props.link} ref={refAboutmeBtn}>
      <span>{props.title}</span>
      <img src={props.url} alt={props.title} ref={refImg}/>
    </a>
  )
}

export { RegularButton } 