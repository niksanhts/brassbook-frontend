import SideMenu from "../../Componetns/sideMenu/SideMenu.jsx";
import styles from "./favorites.module.css"
import FavoritesPage from "../../Componetns/Favorites/FavoritesPage.jsx";
import SearchInput from "../../Componetns/Favorites/SearchInput.jsx";
import FilterGroup from "../../Componetns/Favorites/FilterGroup.jsx";

import Card from "../../Componetns/New_favorites/Card.jsx";
import React, { useState } from "react";
import TrackList from "../../Componetns/New_favorites/TrackList.jsx";
import "./iconfont.css";
function Favorites(props) {
  const [musicNumber, setMusicNumber] = useState(0);
  return (
    <main className={styles.favorites}>
      <SideMenu activeSection={'favorites'}/>
      <div className={styles.favorites__content}>
        <TrackList props={{musicNumber, setMusicNumber}}/>
        <Card props={{musicNumber, setMusicNumber}}/>
      </div>
    </main>
  );
}

export default Favorites;