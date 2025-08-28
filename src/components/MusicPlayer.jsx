"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [musicPlaying, setMusicPlaying] = useState(true);
  const audioRef = useRef(null);

  const handleAudioCanPlay = () => {
    if (musicPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    }
  };

  const handleAudioError = (event) => {
    console.error("Audio error:", event);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-4 right-4 z-50"
    >
      <motion.button
        onClick={toggleMusic}
        className="bg-pink-500/20 backdrop-blur-sm border border-pink-300/30 rounded-full p-3 text-pink-200 hover:bg-pink-500/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {musicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onCanPlay={handleAudioCanPlay}
        onError={handleAudioError}
      >
        <source src="/audio/bg.mp3" type="audio/mpeg" />
      </audio>
    </motion.div>
  );
}
