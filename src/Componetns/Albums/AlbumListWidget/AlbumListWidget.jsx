import { useCallback, useEffect, useState } from "react";
import AlbumFilter from "../AlbumFilter/AlbumFilter";
import AlbumInput from "../AlbumInput/AlbumInput";
import AlbumList from "../AlbumList/AlbumList";
import styles from './AlbumListWidget.module.css';
import AddAlbumModal from "../../modals/AddAlbumModal/AddAlbumModal";
import { $api } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum, loadAlbums } from "../../../store/albumSlice";
import classNames from "classnames";

const ALBUM_LIMIT = 6;

function AlbumListWidget() {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums.albums);
  const albumsCount = useSelector((state) => state.albums.albumsCount);

  const [activeFilter, setActiveFilter] = useState('created_at');
  const [direction, setDirection] = useState('desc');

  const [searchFilter, setSearchFilter] = useState('');
  const [offset, setOffset] = useState('0');
  const [isNewAlbumModalOpen, setIsnewAlbumModalOpen] = useState(false);

  const createFilterHandler =  useCallback((type) => () => {
    setOffset('0');
    if (activeFilter === type) {
      setDirection(prev => prev === 'desc' ? 'asc' : 'desc');
    } else {
      setActiveFilter(type);
    }
  }, [activeFilter, setOffset, setDirection]);

  const handleNewAblumClick = useCallback(() => {
    setIsnewAlbumModalOpen(true);
  }, [setIsnewAlbumModalOpen])

  const handleAddModal = useCallback(async ({ name, image }) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    const result = await $api.post('/v1/albums', formData);
    dispatch(addAlbum(result.data.album))
    setIsnewAlbumModalOpen(false);
    dispatch(loadAlbums({ name: searchFilter, limit: ALBUM_LIMIT, offset, direction, sortBy: activeFilter }));
  }, [activeFilter, direction, dispatch, offset, searchFilter]);

  const handleSearchFilterChange = useCallback((e) => {
    setSearchFilter(e.target.value);
    setOffset('0');
  }, [setOffset, setSearchFilter]);

  useEffect(() => {
    dispatch(loadAlbums({ name: searchFilter, limit: ALBUM_LIMIT, offset, direction, sortBy: activeFilter }));
  }, [activeFilter, direction, dispatch, offset, searchFilter])

  return (
    <div className={styles.wrapper}>
      {isNewAlbumModalOpen && <AddAlbumModal onAddAlbum={handleAddModal} onClose={() => setIsnewAlbumModalOpen(false)} />}
      <h2 className={styles.title}>Альбомы</h2>
      <p className={styles.description}>
      Создавай альбомы по тематикам и сохраняй в них свою любимые композиции! {'\n'}
      Чтобы добавить композицию в альбом, нажми на +, а затем выбери нужный альбом из списка.
      </p>
      <AlbumInput value={searchFilter} onInputChange={handleSearchFilterChange} />
      <div className={styles.filterList}>
        <AlbumFilter isActive={activeFilter === 'created_at'} onClick={createFilterHandler('created_at')}>по дате добавления</AlbumFilter>
        <AlbumFilter isActive={activeFilter === 'name'} onClick={createFilterHandler('name')}>по алфавиту</AlbumFilter>
      </div>
      {albums && 
        <AlbumList onNewAlbumClick={handleNewAblumClick} albums={albums} />
      }
      <div className={styles.pagination}>
        {new Array(1 + Math.floor(albumsCount / ALBUM_LIMIT)).fill(0).map((_, index) => (
          <button
            key={index}
            className={classNames(styles.paginationButton, {
              [styles.paginationButtonActive]: offset === String(index * ALBUM_LIMIT)
            })}
            onClick={() => setOffset(String(index * ALBUM_LIMIT))}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AlbumListWidget;