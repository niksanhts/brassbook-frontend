import styles from './AlbumItem.module.css'

function AlbumItem({ name, compositionCount }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={'https://steamuserimages-a.akamaihd.net/ugc/830261496274876529/68A4192BF9DEAD103D7E4EA481074745932989F4/?imw=512&amp;imh=249&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'} /> 
      </div>
      <span className={styles.name}>
        Длинное название для теста. Нужно проверить как помещаются 50 символов.
      </span>
      <span className={styles.count}>17 композиций</span>
    </div>
  )
}

export default AlbumItem