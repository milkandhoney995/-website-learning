import classes from "./subtitle.module.scss";

type PropsType = {
  title: string
}
export default function SubTitle(props: PropsType)  {
  return <h1 className={classes.subtitle}>{props.title}</h1>
}