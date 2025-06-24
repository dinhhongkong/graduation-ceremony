"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const InvitationCard: React.FC = () => {
  const searchParams = useSearchParams();
  const guest = searchParams.get("guest") || "My homme";
  return (
    <section className="py-12  bg-gray-100">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-black font-playfair text-center mb-8">
          Thiệp mời dự lễ tốt nghiệp
        </h2>
        <div className="bg-white border border-gray-300 p-6 shadow-md">
          <h3 className="text-2xl md:text-4xl text-black font-playfair text-center mb-4">
            Trân trọng gửi lời mời đến
          </h3>
          {/* <img
          src="/img/invitation.jpg"
          alt="Thiệp mời"
          className="w-full h-auto mb-6 rounded"
        /> */}
          <div className="text-center mb-4 mt-7 ">
            <p className="text-4xl md:text-5xl font-bold text-[#C94C4C] font-great-vibes">
              {guest}
            </p>
            <p className="text-black text-xl md:text-2xl mt-3 font-playfair">
              Đến dự lễ tốt nghiệp của Kông
            </p>
          </div>
          <div className="text-center mb-2">
            <span className="text-lg text-black font-semibold">
              10:30 - THỨ BA
            </span>
          </div>
          <div className="flex justify-center items-center text-gray-800 mb-2">
            <div className="mx-2 text-center">
              <div className="text-lg font-playball">Tháng 7</div>
            </div>
            <div className="mx-2 text-center">
              <div className="text-3xl font-bold font-playball">01</div>
            </div>
            <div className="mx-2 text-center">
              <div className="text-lg font-playball">2025</div>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm">
            Nhằm ngày 07 tháng 06 năm Ất Tỵ.
          </div>
          <p className="text-gray-700 underline mt-3 text-center">
            <a
              href="https://maps.app.goo.gl/28kke1E37z8HtLTZ8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tại sảnh A, Học viện Công nghệ Bưu chính Viễn thông - Cơ sở tại
              TP. Hồ Chí Minh
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationCard;
