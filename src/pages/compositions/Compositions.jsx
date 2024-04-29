import SideMenu from "../../Componetns/sideMenu/SideMenu.jsx";
import Player from "../../Componetns/player/Player.jsx";
import styles from "./compositions.module.css"
import Voicerecorder from "../../Componetns/VoiceRecorder/VoiceRecorder.jsx";
import Card from "../../Componetns/Card/Card.jsx";

function Compositions(props) {
  return (
    <main className={styles.compositions}>
      <SideMenu activeSection={'compositions'}/>
      <Card/>
      <Voicerecorder/>
      <Player />
    </main>
  );
}

export default Compositions;