import classes from './article.module.scss'
import { Background } from '../../index'


export default function Article(props) {
  return (
    <article>
      <Background imageUrl={props.imageUrl}></Background>
      <div className={classes.contents}>
        {props.children}
      </div>
    </article>
  )
}