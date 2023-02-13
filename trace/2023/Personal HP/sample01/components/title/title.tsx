import classes from "./title.module.scss";
export default function Title(props)  {
  return <h1 className={classes.title}>{props.title}</h1>
}