import classes from './article.module.scss'
import { Background } from '../../index'


type PropsType = {
  children: React.ReactNode;
  imageUrl: string
}

export default function Article(props: PropsType) {
  return (
    <article>
      <Background imageUrl={props.imageUrl}></Background>
      <div className={classes.contents}>
        {props.children}
      </div>
    </article>
  )
}