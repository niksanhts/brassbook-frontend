import styles from './AlbumItem.module.css'

function AlbumItem({ name, imagePath }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imagePath} /> 
      </div>
      <span className={styles.name}>
        {name}
      </span>
      <span className={styles.count}>0 композиций</span>
    </div>
  )
}

export default AlbumItem