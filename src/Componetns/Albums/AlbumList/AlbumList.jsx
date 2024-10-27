import AlbumItem from '../AlbumItem/AlbumItem';
import EmptyAlbumItem from '../AlbumItem/EmptyAlbumItem';
import styles from './AlbumList.module.css';

function AlbumList({ onNewAlbumClick }) {
  return (
    <div className={styles.wrapper}>
      {new Array(5).fill(0).map((_, index) => (
        <AlbumItem key={index} name="test" compositionCount={3} />
      ))}
      <EmptyAlbumItem onClick={onNewAlbumClick} />
    </div>
  )
}

export default AlbumList;