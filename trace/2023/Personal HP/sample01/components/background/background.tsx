import classes from './background.module.scss'

export default function Background(props) {
  return (
    <div
      className={classes.backImage}
      style={{
        background: `url(${props.imageUrl}) no-repeat center right`,
      }}
    >
      <span className={classes.backImage__span}></span>
    </div>
  )
}