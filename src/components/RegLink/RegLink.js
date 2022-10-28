import "./RegLink.scss";

const RegLink = (props) => {
  return(
    <a href={props.url}>{props.text}</a>
  )
}

export { RegLink }