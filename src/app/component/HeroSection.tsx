"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const handleScrollToDetails = () => {
    const element = document.getElementById("event-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/img/poster_material.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-1/7 text-center p-8 rounded-lg">
          <h1 className="text-4xl md:text-7xl font-bold mb-2 font-great-vibes">
            Lời mời dự lễ tốt nghiệp Kông
          </h1>
          <button
            onClick={handleScrollToDetails}
            className="bg-white text-blue-500 mt-4 md:mt-20 px-6 py-3 rounded-full font-semibold"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
