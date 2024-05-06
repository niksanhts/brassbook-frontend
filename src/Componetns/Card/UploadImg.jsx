import React, { useState } from "react";
import classes from "./UploadImg.module.css";

const UploadAndDisplayImage = () => {
  const defaultImageUrl = 'public/фото.png'; // Замени на путь к дефолтному изображению

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <div>
      <img
        alt="not found"
        width="220px"
        height="350px"
        src={selectedImage ? URL.createObjectURL(selectedImage) : defaultImageUrl}
        className={classes.img__card}
      />
      <input
        type="file"
        name="myImage"
        className={classes.img__input}
        onChange={handleImageChange}
      />
      <div className={classes.div__inf}>
        <div>
          <p className={classes.p__head}>Имя</p>
          <p className={classes.p__text}>Валерка</p>
        </div>
        <div>
          <p className={classes.p__head}>Фамилия</p>
          <p className={classes.p__text}>Борисов</p>
        </div>
        <div>
          <p className={classes.p__head}>Почта</p>
          <p className={classes.p__text}>paren@molodec.ru</p>
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
              fill-opacity="0.100000"
            />
            <path
              id="Vector"
              d="M12.59 4.8C11.53 4.8 10.58 5.32 10 6.1C9.41 5.32 8.46 4.8 7.41 4.8C5.61 4.8 4.16 6.26 4.16 8.06C4.16 8.76 4.27 9.4 4.47 10C5.39 12.91 8.23 14.66 9.63 15.13C9.83 15.2 10.16 15.2 10.36 15.13C11.76 14.66 14.6 12.91 15.53 10C15.72 9.4 15.83 8.76 15.83 8.06C15.83 6.26 14.38 4.8 12.59 4.8Z"
              fill="#F70A51"
              fill-opacity="1.000000"
              fill-rule="nonzero"
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
                  fill-opacity="1"
                />
              </clipPath>
              <pattern
                id="pattern_467_4750"
                patternContentUnits="objectBoundingBox"
                width="1.000000"
                height="1.000000"
              >
                <use
                  xlink:href="#image467_475_0"
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
              fill-opacity="0.100000"
            />
            <g clip-path="url(#clip467_469)">
              <path
                id="Vector"
                d="M12.59 4.8C11.53 4.8 10.58 5.32 10 6.1C9.41 5.32 8.46 4.8 7.41 4.8C5.61 4.8 4.16 6.26 4.16 8.06C4.16 8.76 4.27 9.4 4.47 10C5.39 12.91 8.23 14.66 9.63 15.13C9.83 15.2 10.16 15.2 10.36 15.13C11.76 14.66 14.6 12.91 15.53 10C15.72 9.4 15.83 8.76 15.83 8.06C15.83 6.26 14.38 4.8 12.59 4.8Z"
                fill="#F70A51"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
              <g opacity="0.000000" />
              <rect
                id="3d-render-retro-microphone-short-leg-stand-with-headphone-3d-illustration-design 1"
                x="-19.787109"
                y="-1.000000"
                width="42.574467"
                height="29.000000"
                fill="url(#pattern_467_4750)"
                fill-opacity="0.000000"
              />
              <rect
                id="3d-render-retro-microphone-short-leg-stand-with-headphone-3d-illustration-design 1"
                x="-19.787109"
                y="-1.000000"
                width="42574467"
                height="29000000"
                fill="#000000"
                fill-opacity="0.200000"
              />
              <rect
                id="Rectangle27"
                x="-17787109"
                y="-0531860"
                width="39489361"
                height="21595745"
                fill="#6B27FF"
                fill-opacity="0.700000"
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
        <a href="" className={classes.p__change}>
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
              fill-opacity="0.300000"
              fill-rule="nonzero"
            />
            <g opacity="0.000000" />
          </svg>
        </a>
        <a href="" className={classes.p__change}>
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
              fill-opacity="0.300000"
              fill-rule="nonzero"
            />
            <g opacity="0.000000" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default UploadAndDisplayImage;
