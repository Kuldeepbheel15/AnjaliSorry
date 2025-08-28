"use client";
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setMusicPlaying(true);
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <div>
      <button onClick={musicPlaying ? pauseMusic : playMusic}>
        {musicPlaying ? "Pause" : "Play"}
      </button>
      <audio ref={audioRef}>
        <source src="/audio/bg.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
