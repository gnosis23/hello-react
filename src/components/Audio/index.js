/**
 * 自定义播放器
 * 默认的 html 5 播放器没法改样式..........
 * FIXME: 修改src无法刷新播放器，和缓存有关
 */
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import React from 'react';
import sx from './index.module.scss';

function secondToHuman(time) {
  let minute = Math.floor(time / 60);
  let second = Math.floor(time) % 60;
  return second < 10 ? `${minute}:0${second}` : `${minute}:${second}`;
}

export default function Audio({ src }) {
  const audioRef = React.useRef(null);
  const [canPlay, setCanPlay] = React.useState(true);
  const [play, setPlay] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [percent, setPercent] = React.useState('0%');

  const togglePlay = React.useCallback(() => {
    if (!canPlay) return;
    if (play) {
      audioRef.current.pause();
      setPlay(false);
    } else {
      audioRef.current.play();
      setPlay(true);
    }
  }, [play, canPlay]);

  React.useEffect(() => {
    let handleCanPlay = () => {
      setCanPlay(true);
      setTime(audioRef.current.duration || 0);
    };
    let handleTimeUpdate = () => {
      setTime(audioRef.current.currentTime);
      try {
        let percent =
          parseInt(
            (audioRef.current.currentTime / audioRef.current.duration) * 100,
            10
          ) + '%';
        setPercent(percent);
      } catch (err) {
        setPercent('0%');
      }
    };
    let handleEnd = () => {
      setTime(audioRef.current.duration || 0);
      setPlay(false);
      setPercent('0%');
    };
    let elem = audioRef.current;
    elem.addEventListener('canplay', handleCanPlay);
    elem.addEventListener('timeupdate', handleTimeUpdate);
    elem.addEventListener('ended', handleEnd);
    setPlay(false);
    setTime(0);
    return () => {
      elem.pause();
      elem.removeEventListener('canplay', handleCanPlay);
      elem.removeEventListener('timeupdate', handleTimeUpdate);
      elem.removeEventListener('ended', handleEnd);
    };
  }, [src]);

  return (
    <>
      <div className={sx.audio}>
        {!play ? (
          <CaretRightOutlined className={sx.icon} onClick={togglePlay} />
        ) : (
          <PauseOutlined className={sx.icon} onClick={togglePlay} />
        )}

        <div className={sx.line}>
          <div className={sx.line0} />
          <div className={sx.line1} style={{ width: percent }} />
        </div>

        <div className={sx.time}>{secondToHuman(time)}</div>
      </div>
      <audio key={src} ref={audioRef}>
        <source src={src} type="audio/mpeg" />
      </audio>
    </>
  );
}
