import Image from "next/image";

const PersonalInvitation = () => {
  return (
    <div
      id="personal-invitation"
      className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800"
    >
      <div className="max-w-2xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Lời mời từ trái tim</h2>
        {/* <p className="text-lg mb-4">Kính gửi bạn bè và gia đình thân yêu,</p> */}
        <p className="text-lg mb-4">
          Tôi rất vui mừng được mời bạn đến dự lễ tốt nghiệp của tôi. Đây là một
          cột mốc quan trọng, một dấu chấm hết cho những năm tháng hồn nhiên,
          vui tươi của đời sinh viên. Tôi rất mong được sẻ chia khoảnh khắc đặc
          biệt này với những người tôi trân quý nhất. Thật lòng có chút tiếc
          nuối khi phải tạm biệt mái trường, bạn bè, nhưng cũng đầy háo hức về
          những điều sắp đến.
        </p>
        <p className="text-lg mb-4">
          Cảm ơn bạn đã là một phần không thể thiếu trong suốt chặng đường này.
          Nhưng hy vọng chúng ta sẽ có nhiều khoảnh khắc đáng nhớ hơn trong
          tương lai.
        </p>
        <Image
          src="/img/avatar.jpg" // Đảm bảo bạn có hình ảnh này trong thư mục public
          alt="Personal Invitation"
          width={200}
          height={200}
          className="mx-auto rounded-full shadow-lg mb-4"
        />
        <p className="text-lg italic">Trân trọng,</p>
        <p className="text-lg font-semibold">Đinh Hồng Kông</p>
      </div>
    </div>
  );
};

export default PersonalInvitation;
