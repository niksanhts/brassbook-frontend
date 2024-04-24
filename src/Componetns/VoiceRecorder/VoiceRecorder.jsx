import React from "react";
// import YellowButton from "../yellowButton"
import cl from './VoiceRecorder.module.css'

function Voicerecorder() {
  
        return (
          <div className={cl.voicerecorder}>
                <div className={cl.voicerecorder_title}>
                    Диктофон
                </div>
                <div className={cl.voicerecorder_subtitle}>
                    Ты можешь записать свою игру на инструменте и, если захочешь, она будет проанализирована на ошибки.
                </div>
                {/* <YellowButton to={'/'} className={'voicerecorder_btn button-type-2'}>ЗАПИСАТЬ ПРОИЗВЕДЕНИЕ</YellowButton> */}
               
            </div>
  

    );
}

export default Voicerecorder