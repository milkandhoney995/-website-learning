import classes from "./subtitle.module.scss";
export default function SubTitle(props)  {
  return <h1 className={classes.subtitle}>{props.title}</h1>
}