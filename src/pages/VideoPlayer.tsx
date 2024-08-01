import React, { useState, useRef } from 'react';
import './styles.css'

function VideoPlayer() {
  const videoRef = useRef(null);
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const currentTime = videoRef.current.currentTime;
    console.log(currentTime);
    
    setNotes([...notes, currentTime]);
  };

  const jumpToNote = (timestamp) => {
    videoRef.current.currentTime = timestamp;
  };

  return (
    <div className="main">
      <video ref={videoRef} controls>
        <source src="/src/assets/sample-5s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={addNote}>Add Note</button>
      <div className="notesTimeline">
        {notes.map((timestamp, index) => (
          <div
            key={index}
            className="noteMarker"
            style={{ left: `${(timestamp / videoRef.current.duration) * 100}%` }}
            onClick={() => jumpToNote(timestamp)}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
