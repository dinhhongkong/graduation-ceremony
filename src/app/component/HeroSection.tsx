"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const handleScrollToDetails = () => {
    const element = document.getElementById("personal-invitation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <picture>
        {/* Desktop image: từ sm (640px) trở lên */}
        <source
          media="(min-width: 640px)"
          srcSet="/img/background-desktop.jpg"
        />
        {/* Mobile image (mặc định) */}
        <img
          src="/img/background.avif"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Overlay che tối ảnh một chút */}
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}

      {/* Nội dung chính */}
      <div className="relative z-10 text-center p-8 text-black translate-y-[-60px] sm:translate-y-0">
        <h1 className="text-5xl md:text-8xl font-bold mb-2 font-playball text-[#0D3B66]">
          Đã đến lúc rồi, giờ mình phải ra trường thôi!
        </h1>
        <div className="text-center p-4 space-y-3">
          <h2 className="text-2xl font-bold text-gray-700">
            Ngày mình cùng nhau đóng băng với Kông
          </h2>

          <p className="text-lg font-medium text-blue-400">10:30 - Thứ Ba</p>

          <div className="flex items-center justify-center gap-4 text-base font-light">
            {/* <span className="border-t border-white w-12 mt-2"></span>
            <div>
              <p className="uppercase tracking-widest">Tháng</p>
              <p className="text-4xl font-[500] leading-none">2</p>
              <p className="uppercase tracking-widest">2025</p>
            </div>
            <span className="border-t border-white w-12 mt-2"></span>
            <div className="text-6xl font-great-vibes font-bold -mt-2">22</div>
            <span className="border-t border-white w-12 mt-2"></span> */}
            <div className="font-medium text-blue-400">
              Ngày 01 tháng 7 năm 2025
            </div>
          </div>

          <p className="uppercase font-bold mt-4 text-gray-500 text-sm">
            Học viện Công nghệ Bưu chính Viễn thông - Cơ sở tại TP. Hồ Chí Minh
          </p>
          <p className="uppercase font-bold text-gray-500 text-sm">Sảnh A</p>

          <p className="text-sm font-light text-gray-500">
            số 97, đường Man Thiện, P.Hiệp Phú, TP. Thủ Đức, TP. Hồ Chí Minh
          </p>
        </div>
        <button
          onClick={handleScrollToDetails}
          className="bg-white text-blue-500 mt-4 md:mt-20 px-6 py-3 rounded-full font-semibold"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
