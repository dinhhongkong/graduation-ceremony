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
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center md:justify-end text-white"
        style={{ backgroundImage: "url('/img/poster_material.jpg')" }}
      >
        <div className="bg-white text-black bg-opacity-70 p-8 rounded-lg text-center  mx-4 md:mr-16">
          <h1 className="text-4xl font-bold mb-2">
            Lời mời dự lễ tốt nghiệp của anh Kông
          </h1>
          <p className="text-lg mb-4">Ngày 25 tháng 6, 2025 - 10:00 AM</p>
          <p className="text-lg mb-8">Hội trường A, Đại học XYZ</p>
          <button
            onClick={handleScrollToDetails}
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
