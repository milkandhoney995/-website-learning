import classes from "./title.module.scss";

type PropsType = {
  title: string
}
export default function Title(props: PropsType)  {
  return <h1 className={classes.title}>{props.title}</h1>
}