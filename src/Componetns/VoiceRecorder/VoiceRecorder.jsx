import React, { useState } from 'react';
import YellowButton from "../yellowButton/YellowButton";
import classes from './VoiceRecorder.module.css';

function Voicerecorder() {
        const [recording, setRecording] = useState(false);
        const [mediaRecorder, setMediaRecorder] = useState(null);
      
        const startRecording = () => {
          navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
              const recorder = new MediaRecorder(stream);
              recorder.start();
              setRecording(true);
              setMediaRecorder(recorder);
            })
            .catch(error => {
              console.error('Error accessing microphone:', error);
            });
      
        const stopRecording = () => {
          if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
          }
        };
}
  
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
                        {/* <button onClick={startRecording}>Start Recording</button>
                        <button onClick={stopRecording}>Stop Recording</button> */}
                </div>
            </div>
  

    );
}

export default Voicerecorder