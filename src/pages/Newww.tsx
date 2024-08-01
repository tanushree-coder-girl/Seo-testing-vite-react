import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const VideoPlayer = () => {
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [notes, setNotes] = useState([]);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const containerRef = useRef(null);
  let timer;
  const [isDragging, setIsDragging] = useState(false);

  const formatTime = (time) => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours === 0) {
      return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const container = containerRef.current;
    const mainVideo = videoRef.current;

    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setShowControls(true);
      }, 3000);
    };

    mainVideo.addEventListener('mousemove', handleMouseMove);

    return () => {
      mainVideo.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const mainVideo = videoRef.current;

    const handleTimeUpdate = () => {
      const currentTime = mainVideo.currentTime;
      const duration = mainVideo.duration;
      const percent = (currentTime / duration) * 100;

      if (!isNaN(percent)) {
        progressBarRef.current.style.width = `${percent}%`;
        setCurrentTime(formatTime(currentTime));
      }
    };

    mainVideo.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      mainVideo.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const draggableProgressBar = (e) => {
    if (isDragging) {
      const mainVideo = videoRef.current;
      const timelineWidth = progressBarRef.current.clientWidth;
      progressBarRef.current.style.width = `${e.nativeEvent.offsetX}px`;
      mainVideo.currentTime = (e.nativeEvent.offsetX / timelineWidth) * mainVideo.duration;
      setCurrentTime(formatTime(mainVideo.currentTime));
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const value = e.target.value;
    setVolume(value);
    videoRef.current.volume = value;
  };

  const handleSpeedChange = (speed) => {
    setPlaybackRate(speed);
    videoRef.current.playbackRate = speed;
  };

  const handleTimelineClick = (e) => {
    const timelineWidth = e.currentTarget.clientWidth;
    const offsetX = e.nativeEvent.offsetX;
    const currentTime = (offsetX / timelineWidth) * videoRef.current.duration;
    videoRef.current.currentTime = currentTime;
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setFullscreen(false);
      });
    }
  };

  const handleAddNoteOnTimeStamp = () => {
    const currentTimestamp = videoRef.current.currentTime;
    setNotes([...notes, { timestamp: currentTimestamp, text: '' }]);
  };

useEffect(() => {
  // Cleanup function to remove red dots when component unmounts or notes change
  const cleanup = () => {
    document.querySelectorAll('.red-dot').forEach(dot => dot.remove());
  };

  // Get the timeline and calculate dot positions for each note
  const timeline = document.querySelector('.video-timeline');
  const timelineWidth = timeline.offsetWidth;
  notes.forEach(note => {
    const dotPosition = (note.timestamp / videoRef.current.duration) * timelineWidth;
    
    // Create red dot element for each note
    const redDot = document.createElement('div');
    redDot.classList.add('red-dot');
    redDot.style.left = `${dotPosition}px`;
    timeline.appendChild(redDot);
  });

  return cleanup;
}, [notes]);

  return (
    <div className={`container ${showControls ? 'show-controls' : ''} ${fullscreen ? 'fullscreen' : ''}`} ref={containerRef}>
      <div className="wrapper">
          <div className="video-timeline" onClick={handleTimelineClick}>
          <div className="progress-area">
            <span>{currentTime}</span>
            <div className="progress-bar" onMouseDown={handleMouseDown} onMouseMove={draggableProgressBar} ref={progressBarRef}></div>
          </div>
        </div>

        <ul className="video-controls">

              <li className="options center">
            <button className="play-pause" onClick={handlePlayPause}>
              {isPlaying ? <PauseIcon /> : <PlayCircleOutlineIcon />}
            </button>
          </li>
          <li className="options left">
            <button className="volume" onClick={() => setVolume(volume === 0 ? 0.5 : 0)}>
              {volume === 0 ? <VolumeOffIcon /> : volume < 0.5 ? <VolumeDownIcon /> : <VolumeUpIcon />}
            </button>
            <input type="range" min="0" max="1" step="any" value={volume} onChange={handleVolumeChange} />
            <div className="video-timer">
              <p className="current-time">{currentTime}</p>
              <p className="separator"> / </p>
              <p className="video-duration">{duration}</p>
            </div>
          </li>
      
          <li className="options right">
            <div className="playback-content">
              <button className="playback-speed" onClick={() => setPlaybackRate(playbackRate === 1 ? 2 : 1)}>
                <span className="material-symbols-rounded">{playbackRate}x</span>
              </button>
            </div>
            <button className="fullscreen" onClick={handleFullScreen}>
              {fullscreen ? <CloseFullscreenIcon /> : <FullscreenIcon />}
            </button>

            <button className='noteAdd' onClick={handleAddNoteOnTimeStamp}>
              <NoteAddIcon />
            </button>
          </li>
        </ul>

      
      </div>
      <video
        src="/src/assets/sample-5s.mp4"
        ref={videoRef}
        onTimeUpdate={() => setCurrentTime(formatTime(videoRef.current.currentTime))}
        onLoadedData={() => {
          setDuration(formatTime(videoRef.current.duration));
          setCurrentTime(formatTime(0));
        }}
      ></video>
    </div>
  );
};

export default VideoPlayer;
