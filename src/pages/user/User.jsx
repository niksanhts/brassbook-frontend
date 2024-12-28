import styles from './user.module.css'
import SideMenu from "../../Componetns/sideMenu/SideMenu.jsx";
import {useSelector} from "react-redux";
import Voicerecorder from "../../Componetns/VoiceRecorder/VoiceRecorder.jsx";
import Card from "../../Componetns/Card/Card.jsx";
import Traks from "../../Componetns/Traks/Traks.jsx";
import Player from "../../Componetns/player/Player.jsx";
import AlbumListWidget from "../../Componetns/Albums/AlbumListWidget/AlbumListWidget.jsx";
import Favorites from '../favorites/Favorites.jsx';


function User(props) {
    return (
        <main className={styles.user}>
            <SideMenu activeSection={'user'}/>
            <div className={styles.user__content}>
                <Card />
                <Traks />
                <AlbumListWidget />
                {/* <Voicerecorder/> */}
                {/* <Player /> */}
            </div>

        </main>
    );
}

export default User;