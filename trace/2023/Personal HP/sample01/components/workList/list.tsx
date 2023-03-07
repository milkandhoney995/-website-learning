import Works from "../works/works";
import classes from "./list.module.scss";

type Contents = {
  text: string
  href?: string
}

type PropsType = {
  lists: Contents[]
  useComponents?: boolean
}



export default function WorkList(props: PropsType) {
  const lists = props.lists
  if (props.useComponents) {
    return (
      <>
        {lists.map((item, i: number) => (
          <Works
            key={i}
            text={item.text}
            href={item.href}
          ></Works>
        ))}
      </>
    )
  } else {
    return (
      <ul className={classes.work__list}>
        {lists.map((item, i: number) => (
          <li
            key={i}
          >
            <span className={classes.work__span}>●</span>
            {item.text}
          </li>
        ))}
      </ul>
    )
  }
}