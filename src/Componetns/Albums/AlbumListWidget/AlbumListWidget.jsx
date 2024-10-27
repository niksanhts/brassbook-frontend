import { useCallback, useState } from "react";
import AlbumFilter from "../AlbumFilter/AlbumFilter";
import AlbumInput from "../AlbumInput/AlbumInput";
import AlbumList from "../AlbumList/AlbumList";
import styles from './AlbumListWidget.module.css';
import AddAlbumModal from "../../modals/AddAlbumModal/AddAlbumModal";

function AlbumListWidget() {
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

  const handleAddModal = useCallback(({ name, image }) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    
  }, [])

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
      <AlbumList onNewAlbumClick={handleNewAblumClick} />
    </div>
  )
}

export default AlbumListWidget;