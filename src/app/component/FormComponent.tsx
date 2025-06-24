import React from "react";

const FormComponent: React.FC = () => {
  return (
    <div className="mx-auto p-4 bg-gray-100">
      <h2 className="text-3xl md:text-4xl text-[#0D3B66] font-bold text-center">
        Nhắn Gửi Yêu Thương
      </h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeL7cHr-N24dFF_AmMpGjzfR-mL0PxYBzDVmt4-odIGWeWogw/viewform?embedded=true"
        width="100%"
        height="1600"
        className="border-none w-full"
        title="Google Form"
      >
        Đang tải…
      </iframe>
    </div>
  );
};

export default FormComponent;
