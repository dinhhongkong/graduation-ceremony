"use client";
const AudioPlayer = () => {
  return (
    <audio autoPlay loop>
      <source src="/audio/WeGoWiththeSky.mp3" type="audio/mpeg" />
      Trình duyệt của bạn không hỗ trợ thẻ audio.
    </audio>
  );
};

export default AudioPlayer;
