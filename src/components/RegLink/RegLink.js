import "./RegLink.scss";

const RegLink = (props) => {
  return(
    <a href={props.url} rel="noreferrer" target="_blank">{props.text}</a>
  )
}

export { RegLink }