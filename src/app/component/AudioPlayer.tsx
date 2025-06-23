"use client";
import { useEffect, useRef } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current?.play();
      document.removeEventListener("click", playAudio); // Gỡ bỏ sau khi đã play
    };

    document.addEventListener("click", playAudio);
    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/audio/minh-cung-nhau-dong-bang.mp3" type="audio/mpeg" />
      Trình duyệt của bạn không hỗ trợ thẻ audio.
    </audio>
  );
};

export default AudioPlayer;
