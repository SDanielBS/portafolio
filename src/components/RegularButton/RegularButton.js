import { useEffect, useRef } from "react";
import "./RegularButton.scss";

const RegularButton = (props) => {
  let refImg = useRef();

  const shouldShowImg = (url) => {
    if (url == null || url === "") {
      refImg.current.classList.add("setHide");
    } else {
      if (refImg.current.classList.contains("setHide")) {
        refImg.current.classList.remove("setHide");
      }
    }
  }

  useEffect(() => {
    shouldShowImg(props.url);
    console.log(refImg);
  },[props.url]);

  return(
    <button className="button">
      <span>{props.title}</span>
      <img src={props.url} alt={props.title} ref={refImg}/>
    </button>
  )
}

export { RegularButton } 