import { useEffect, useRef } from "react";
import "./RegularButton.scss";

const RegularButton = (props) => {
  let refImg = useRef();

  useEffect(() => {
    console.log(refImg);
  },[]);
  // if (props.url == null || props.url === "") {
  //   refImg.current.classList.add("hide");
  // }
  return(
    <button className="button">
      <span>{props.title}</span>
      <img id="asd" src={props.url} alt={props.title} ref={refImg}/>
    </button>
  )
}

export { RegularButton } 