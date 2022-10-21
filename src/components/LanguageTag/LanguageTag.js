import "./LanguageTag.scss";

const LanguageTag = (props) => {
  return(
    <div style={{backgroundColor: props.color}} className="languageTag">
      <span>{props.language}</span>
    </div>
  );
}

export { LanguageTag }