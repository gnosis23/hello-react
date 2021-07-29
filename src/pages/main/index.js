import React, {useState} from 'react';
import './index.css';
import Audio from "../../components/Audio";

const mp3One = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';
const mp3Two = 'https://u-play-1259430598.cos.ap-shanghai.myqcloud.com/test/tts/library/question/74988794452918272.wav';

export default function MainPage(props) {
  const [src, setSrc] = useState(0);
  return (
    <div>
      <button onClick={() => setSrc(s => s + 1)}>toggle</button>
      <Audio src={src % 2 === 0 ? mp3One : mp3Two} />
    </div>
  )
}
