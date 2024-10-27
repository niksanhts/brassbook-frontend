import AlbumItem from '../AlbumItem/AlbumItem';
import EmptyAlbumItem from '../AlbumItem/EmptyAlbumItem';
import styles from './AlbumList.module.css';

function AlbumList({ onNewAlbumClick, albums }) {
  console.log('albums', albums)
  return (
    <div className={styles.wrapper}>
      {albums.map((album, index) => (
        <AlbumItem key={index} name={album.name} imagePath={album.image} />
      ))}
      <EmptyAlbumItem onClick={onNewAlbumClick} />
    </div>
  )
}

export default AlbumList;