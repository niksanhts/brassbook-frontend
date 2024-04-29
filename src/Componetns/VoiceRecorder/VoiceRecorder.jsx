import React from "react";
import YellowButton from "../yellowButton/YellowButton";
import classes from './VoiceRecorder.module.css';

function Voicerecorder() {
  
        return (
          <div className={classes.voicerecorder}>
                <div className={classes.voicerecorder_title}>
                    Диктофон
                </div>
                <div className={classes.voicerecorder_subtitle}>
                    Ты можешь записать свою игру на инструменте и, если захочешь, она будет проанализирована на ошибки.
                </div>
                <YellowButton to={'/'} className={'voicerecorder_btn button-type-2'}>ЗАПИСАТЬ ПРОИЗВЕДЕНИЕ</YellowButton>
               
            </div>
  

    );
}

export default Voicerecorder