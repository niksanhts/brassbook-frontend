import React, { useState } from 'react';
import YellowButton from "../yellowButton/YellowButton";
import classes from './VoiceRecorder.module.css';

function Voicerecorder() {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const recorder = new MediaRecorder(stream);

                recorder.ondataavailable = (e) => {
                    console.log((audioChunks))
                    setAudioChunks([...audioChunks, e.data]);
                };

                recorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/ogg' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const audio = new Audio(audioUrl);
                    audio.play();
                };

                recorder.start();
                setRecording(true);
                setMediaRecorder(recorder);
            })
            .catch(error => {
                console.error('Error accessing microphone:', error);
            });
    };

    const stopRecording = () => {
        if (mediaRecorder && recording) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };
    // const handleClear = () =>{
    //     audioBlob = []
    // }
    const playAudio = () => {
        if (audioChunks.length > 0) {
            const audioBlob = new Blob(audioChunks, { type: 'audio/ogg' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
            setIsPlaying(true);
        }


    };



        return (
          <div className={classes.voicerecorder}>
                <div className={classes.voicerecorder_title}>
                    Диктофон
                </div>
                <div className={classes.voicerecorder_subtitle}>
                    Ты можешь записать свою игру на инструменте и, если захочешь, она будет проанализирована на ошибки.
                </div>
                {/* <YellowButton onClick={startRecording} className={'voicerecorder_btn button-type-2'}>ЗАПИСАТЬ ПРОИЗВЕДЕНИЕ</YellowButton> */}
                <div>
                    <YellowButton onClick={startRecording} disabled={recording}>
                {recording ? 'Идет запись' : 'Начать Запись'}
                    </YellowButton>
                    <YellowButton onClick={stopRecording} disabled={!recording}>
                        Остановить запись
                    </YellowButton>
                    <YellowButton onClick={playAudio} disabled={isPlaying}>
                        Воспроизвести запись
                    </YellowButton>
                    {/* <button onClick={handleClear}>
                        clear
                    </button> */}
        </div>
            </div>
  

    );
}

export default Voicerecorder