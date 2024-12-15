import styles from './user.module.css'
import SideMenu from "../../Componetns/sideMenu/SideMenu.jsx";
import {useSelector} from "react-redux";
import Voicerecorder from "../../Componetns/VoiceRecorder/VoiceRecorder.jsx";
import Card from "../../Componetns/Card/Card.jsx";
import Traks from "../../Componetns/Traks/Traks.jsx";
import Player from "../../Componetns/player/Player.jsx";


function User(props) {
  return (
    <main className={styles.user}>
      <SideMenu activeSection={'user'}/>
      <Card/>
      {/* <Traks/> */}
      {/* <Voicerecorder/> */}
      {/* <Player /> */}
    </main>
  );
}

export default User;