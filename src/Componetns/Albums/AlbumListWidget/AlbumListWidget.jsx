import { useCallback, useEffect, useState } from "react";
import AlbumFilter from "../AlbumFilter/AlbumFilter";
import AlbumInput from "../AlbumInput/AlbumInput";
import AlbumList from "../AlbumList/AlbumList";
import styles from './AlbumListWidget.module.css';
import AddAlbumModal from "../../modals/AddAlbumModal/AddAlbumModal";
import { $api } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { addAlbum, loadAlbums } from "../../../store/albumSlice";

function AlbumListWidget() {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums.albums);
  const [activeFilter, setActiveFilter] = useState('date');
  const [isNewAlbumModalOpen, setIsnewAlbumModalOpen] = useState(false);

  const createFilterHandler =  useCallback((type) => () => {
    if (activeFilter === type) {
      setActiveFilter(null);
    } else {
      setActiveFilter(type);
    }
  }, [activeFilter]);

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
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadAlbums())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      {isNewAlbumModalOpen && <AddAlbumModal onAddAlbum={handleAddModal} />}
      <h2 className={styles.title}>Альбомы</h2>
      <p className={styles.description}>
      Создавай альбомы по тематикам и сохраняй в них свою любимые композиции! {'\n'}
      Чтобы добавить композицию в альбом, нажми на +, а затем выбери нужный альбом из списка.
      </p>
      <AlbumInput />
      <div className={styles.filterList}>
        <AlbumFilter isActive={activeFilter === 'date'} onClick={createFilterHandler('date')}>по дате добавления</AlbumFilter>
        <AlbumFilter isActive={activeFilter === 'alp'} onClick={createFilterHandler('alp')}>по алфавиту</AlbumFilter>
      </div>
      {albums && 
        <AlbumList onNewAlbumClick={handleNewAblumClick} albums={albums} />
      }
    </div>
  )
}

export default AlbumListWidget;