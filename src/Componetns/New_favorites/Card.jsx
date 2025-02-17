import React, { useState, useRef } from "react";
import styles from './card.module.css';
import musics from '../../assets/data';
import {timer} from './timer';

const Card = ({props: { musicNumber, setMusicNumber }}) => {
    const [duration, setDuration] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [play, setPlay] = useState(false);

    const audioRef = useRef();

    function handleLoadStart(e){
        const src = e.nativeEvent.srcElement.src;
        const audio = new Audio(src);
        audio.onloadedmetadata = function(){
            if(audio.readyState > 0){
                setDuration(audio.duration);
            }
        }

        if(play){
            audioRef.current.play()
        };
    }

    function handlePlayingAudio(){
        if(play){
            audioRef.current.pause();
            setPlay(false);
        }else{
            audioRef.current.play();
            setPlay(true);
        }
    }

    function handleTimeUpdate(){
        const currentTime = audioRef.current.currentTime;
        setCurrentTime(currentTime)
    }

    function changeCurrentTime(e){
        const currentTime = Number(e.target.value);
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime);
    }

    function handleNextPrev(n){
        setMusicNumber(value => {
            if(n > 0)                
                return value + n > musics.length - 1 ? 0 : value + n;
            return value + n < 0 ? musics.length - 1 : value + n;
            
        })

    }
    for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
      }
    return(
        <div className={styles.cardContainer}>
            <a href="#" className={styles.takeApart}><img src="/src/assets/images/take-apart.png" alt="" /></a>
            <div className={styles.card}>
                <div className={styles.about}>
                    <div className={styles.image}>
                        <img src={musics[musicNumber].thumbnail} alt="" />
                    </div>
                    <div className={styles.details}>
                        <p className={styles.artist}>{musics[musicNumber].artist}</p>
                        <marquee behavior="alternate" scrolldelay="300" className={styles.title}>{musics[musicNumber].title}</marquee>
                        <p className={styles.version}>Версия от BrassBook</p>
                    </div>
                </div>
                
                <div className={styles.progress}>
                    <input className="styled-slider slider-progress" type="range" min={0} max={duration} value={currentTime} onChange={e => changeCurrentTime(e)} />
                    <div className={styles.timer}>
                        <span>{timer(currentTime)}</span>
                        <span>{timer(duration)}</span>
                    </div>
                </div>

                

                <div className={styles.controls}>
                    <button onClick={() => handleNextPrev(-1)}>
                        <p className="_icon-prev"></p>
                    </button>

                    <div className={styles.play}>
                        <button onClick={handlePlayingAudio}>
                            {play ? <div className="_icon-pause"></div> : <p className="_icon-play-white"></p> }
                        </button>
                    </div>

                    <button onClick={() => handleNextPrev(1)}>
                        <p className="_icon-next"></p>
                    </button>

                    <audio src={musics[musicNumber].src} hidden
                    onLoadStart={handleLoadStart} ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => handleNextPrev(1)}></audio>

                </div>
                <button className={styles.download}>
                    <p>
                        <span className="_icon-download"></span>
                        <span>Скачать композицию</span>
                    </p>
                </button>
                <div className={styles.rate}>
                    <p>Оцени это произведение</p>
                    <div className={styles.rate__container}>
                        <button>
                            <img src="/src/assets/images/face-0.png" alt="" />
                        </button>
                        <button>
                            <img src="/src/assets/images/face-1.png" alt="" />
                        </button>
                        <button>
                            <img src="/src/assets/images/face-2.png" alt="" />
                        </button>
                        <button>
                            <img src="/src/assets/images/face-3.png" alt="" />
                        </button>
                        <button>
                            <img src="/src/assets/images/face-4.png" alt="" />
                        </button>
                    </div>
                
                </div>
            </div>
        </div>

    )
}

export default Card;