import styles from './user.module.css'
import SideMenu from "../../Componetns/sideMenu/SideMenu.jsx";
import {useSelector} from "react-redux";

function User(props) {
  return (
    <main className={styles['user']}>
      <SideMenu activeSection={'user'} />
    </main>
  );
}

export default User;