"use client";
import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-01T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/img/countdown-bg-1.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center p-4 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Đếm ngược thời gian
        </h2>
        <div className="flex space-x-6 md:space-x-12 lg:space-x-12">
          <div className="text-center">
            <span className="text-4xl md:text-6xl font-semibold">
              {timeLeft.days}
            </span>
            <div className="text-sm md:text-base">Ngày</div>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-6xl font-semibold">
              {timeLeft.hours}
            </span>
            <div className="text-sm md:text-base">Giờ</div>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-6xl font-semibold">
              {timeLeft.minutes}
            </span>
            <div className="text-sm md:text-base">Phút</div>
          </div>
          <div className="text-center">
            <span className="text-4xl md:text-6xl font-semibold">
              {timeLeft.seconds}
            </span>
            <div className="text-sm md:text-base">Giây</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
