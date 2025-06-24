"use client";
import { useEffect, useRef } from "react";
import { Howl, Howler } from "howler";

const AudioPlayer = () => {
  useEffect(() => {
    const sound = new Howl({
      src: ["/audio/sound.mp3"],
      autoplay: true,
      loop: true,
      volume: 1,
      onend: function () {
        console.log("Finished!");
      },
    });
  }, []);
  return <></>;
};

export default AudioPlayer;
