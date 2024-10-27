import classes from "./UploadImg.module.css";
import { useDispatch, useSelector } from "react-redux";
import { $api } from "../../api";
import { setUser } from "../../store/userSlice";
import EditUserModal from "../modals/EditUserModal/EditUserModal";
import { useCallback, useState } from "react";
import ChangeUserPasswordModal from "../modals/ChangeUserPasswordModal/ChangeUserPasswordModal";
import AlbumListWidget from "../Albums/AlbumListWidget/AlbumListWidget";

const UploadAndDisplayImage = () => {
  const defaultImageUrl = 'public/фото.png'; // Замени на путь к дефолтному изображению
  const dispatch = useDispatch();

  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [invalidPasswordList, setInvalidPasswordList] = useState([]);
  const user = useSelector(state => state.user.user);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;


    const form = new FormData();
    form.append('avatar', file);

    const { data: updatedUserData } = await $api.put('/v1/auth/avatar', form);
    dispatch(setUser(updatedUserData.user))
    console.log('result', updatedUserData)
  };

  const handleUserDataSave = useCallback(async (data) => {
    const { data: updatedUserData } = await $api.put('/v1/auth', data);
    dispatch(setUser(updatedUserData.user))
    setIsEditUserModalOpen(false);
  }, [dispatch]);

  const handleChangePassword = useCallback(async (data) => {
    const { data: updatedUserData } = await $api.put('/v1/auth/registration', data);
    if (updatedUserData?.errorCode && updatedUserData?.errorCode === 'INVALID_PASSWORD') {
      setInvalidPasswordList(list => [...list, data.currentPassword])
      return;
    }
    dispatch(setUser(updatedUserData.user))
    setIsChangePasswordModalOpen(false);
  }, [dispatch]);

  return (
    <div>
      {user && isEditUserModalOpen && <EditUserModal user={user} onClose={() => setIsEditUserModalOpen(false)} onSave={handleUserDataSave} />}
      {isChangePasswordModalOpen && (
        <ChangeUserPasswordModal
          onClose={() => setIsChangePasswordModalOpen(false)}
          onChangePassword={handleChangePassword}
          invalidPasswordList={invalidPasswordList}
        />
      )}
      <img
        alt="not found"
        width="220px"
        height="350px"
        src={user?.avatar ? user.avatar : defaultImageUrl}
        className={classes.img__card}
      />
      <input
        type="file"
        accept="image/*"
        name="myImage"
        className={classes.img__input}
        onChange={handleImageChange}
      />
      <div className={classes.div__inf}>
        <div>
          <p className={classes.p__head}>Имя</p>
          <p className={classes.p__text}>{user?.first_name ? user.first_name : '<Имя не задано>'}</p>
        </div>
        <div>
          <p className={classes.p__head}>Фамилия</p>
          <p className={classes.p__text}>{user?.second_name ? user.second_name : '<Фамилия не задана>'}</p>
        </div>
        <div>
          <p className={classes.p__head}>Почта</p>
          <p className={classes.p__text}>{user ? user.email : ''}</p>
        </div>
      </div>
      <div className={classes.div__description}>
        <p className={classes.p__description1}>
          Композиции, отмеченные тобою{" "}
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs />
            <rect
              id="vuesax/bold/heart"
              rx="4.000000"
              width="20.000000"
              height="20.000000"
              fill="#F70A51"
              fillOpacity="0.100000"
            />
            <path
              id="Vector"
              d="M12.59 4.8C11.53 4.8 10.58 5.32 10 6.1C9.41 5.32 8.46 4.8 7.41 4.8C5.61 4.8 4.16 6.26 4.16 8.06C4.16 8.76 4.27 9.4 4.47 10C5.39 12.91 8.23 14.66 9.63 15.13C9.83 15.2 10.16 15.2 10.36 15.13C11.76 14.66 14.6 12.91 15.53 10C15.72 9.4 15.83 8.76 15.83 8.06C15.83 6.26 14.38 4.8 12.59 4.8Z"
              fill="#F70A51"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <g opacity="0.000000" />
          </svg>
          , находятся в <span className={classes.p__like}> Избранном.</span>
        </p>
        <p className={classes.p__description2}>
          Записи, которые ты делал с помощью{" "}
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip467_469">
                <rect
                  id="vuesax/bold/heart"
                  rx="4.000000"
                  width="20.000000"
                  height="20.000000"
                  fill="white"
                  fillOpacity="1"
                />
              </clipPath>
              <pattern
                id="pattern_467_4750"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlinkHref="#image467_475_0"
                  transform="matrix(0.000501,0,0,0.000735,-0.000853,0)"
                />
              </pattern>
            </defs>
            <rect
              id="vuesax/bold/heart"
              rx="4.000000"
              width="20.000000"
              height="20.000000"
              fill="#F70A51"
              fillOpacity="0.100000"
            />
            <g clipPath="url(#clip467_469)">
              <path
                id="Vector"
                d="M12.59 4.8C11.53 4.8 10.58 5.32 10 6.1C9.41 5.32 8.46 4.8 7.41 4.8C5.61 4.8 4.16 6.26 4.16 8.06C4.16 8.76 4.27 9.4 4.47 10C5.39 12.91 8.23 14.66 9.63 15.13C9.83 15.2 10.16 15.2 10.36 15.13C11.76 14.66 14.6 12.91 15.53 10C15.72 9.4 15.83 8.76 15.83 8.06C15.83 6.26 14.38 4.8 12.59 4.8Z"
                fill="#F70A51"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <g opacity="0.000000" />
              <rect
                id="3d-render-retro-microphone-short-leg-stand-with-headphone-3d-illustration-design 1"
                x="-19.787109"
                y="-1.000000"
                width="42.574467"
                height="29.000000"
                fill="url(#pattern_467_4750)"
                fillOpacity="0.000000"
              />
              <rect
                id="3d-render-retro-microphone-short-leg-stand-with-headphone-3d-illustration-design 1"
                x="-19.787109"
                y="-1.000000"
                width="42574467"
                height="29000000"
                fill="#000000"
                fillOpacity="0.200000"
              />
              <rect
                id="Rectangle27"
                x="-17787109"
                y="-0531860"
                width="39489361"
                height="21595745"
                fill="#6B27FF"
                fillOpacity="0.700000"
              />
            </g>
          </svg>
          <span className={classes.span__violet}>Диктофона,</span>
        </p>
        <p className={classes.p__description3}>
          {" "}
          и загруженные треки находятся в разделе{" "}
          <span className={classes.p__like}>Мои записи.</span>
        </p>
      </div>
      <div className={classes.div__change}>
        <span href="" className={classes.p__change} onClick={() => setIsEditUserModalOpen(true)}>
          Редактировать личные данные{" "}
          <svg
            width="16.000000"
            height="16.000000"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M10.13 6.49L8.82 5.18L6.68 3.04C6.22 2.59 5.45 2.91 5.45 3.55L5.45 7.7L5.45 11.44C5.45 12.08 6.22 12.4 6.68 11.95L10.13 8.5C10.68 7.95 10.68 7.04 10.13 6.49Z"
              fill="#230B3F"
              fillOpacity="0.300000"
              fillRule="nonzero"
            />
            <g opacity="0.000000" />
          </svg>
        </span>
        <a  className={classes.p__change} onClick={() => setIsChangePasswordModalOpen(true)}>
          Изменить пароль{" "}
          <svg
            width="16.000000"
            height="16.000000"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M10.13 6.49L8.82 5.18L6.68 3.04C6.22 2.59 5.45 2.91 5.45 3.55L5.45 7.7L5.45 11.44C5.45 12.08 6.22 12.4 6.68 11.95L10.13 8.5C10.68 7.95 10.68 7.04 10.13 6.49Z"
              fill="#230B3F"
              fillOpacity="0.300000"
              fillRule="nonzero"
            />
            <g opacity="0.000000" />
          </svg>
        </a>
      </div>
      <AlbumListWidget />
    </div>
  );
};
export default UploadAndDisplayImage;
