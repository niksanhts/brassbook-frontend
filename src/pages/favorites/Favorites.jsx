import SideMenu from "../../Componetns/sideMenu/SideMenu.jsx";
import styles from "./favorites.module.css"
import FavoritesPage from "../../Componetns/Favorites/FavoritesPage.jsx";
import SearchInput from "../../Componetns/Favorites/SearchInput.jsx";
import FilterGroup from "../../Componetns/Favorites/FilterGroup.jsx";
import { TrackList } from "../../Componetns/Favorites_Tracks/TrackList.jsx";

function Favorites(props) {
  return (
    <main className={styles.favorites}>
      <SideMenu activeSection={'favorites'}/>
      <div className={styles.favorites__content}>
        <FavoritesPage />
        <SearchInput />
        <FilterGroup />
        <TrackList />
      </div>
    </main>
  );
}

export default Favorites;