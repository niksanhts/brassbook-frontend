import SideMenu from "../../Componetns/sideMenu/SideMenu.jsx";
import Player from "../../Componetns/player/Player.jsx";
import styles from "./compositions.module.css"

function Compositions(props) {
  return (
    <main className={styles.compositions}>
      <SideMenu />
      <Player />
    </main>
  );
}

export default Compositions;