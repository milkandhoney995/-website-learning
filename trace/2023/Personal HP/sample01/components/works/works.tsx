import classes from './works.module.scss'
import Link from "next/link";

export default function Works(props) {
  return (
    <div className={classes.works}>
      <section className={classes.works__section}>
        <p className={classes.works__text}>
          {props.text}
          <br />
          <Link
            className={classes.works__link}
            href={props.href}
            target="_blank">
            {props.href}
          </Link>
        </p>
      </section>
    </div>
  )
}