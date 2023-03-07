import classes from './background.module.scss'

type PropsType = {
  imageUrl: string
}

export default function Background(props: PropsType) {
  return (
    <div
      className={classes.backImage}
      style={{
        background: `url(${props.imageUrl}) no-repeat center right`,
        backgroundSize: "cover"
      }}
    >
      <span className={classes.backImage__span}></span>
    </div>
  )
}