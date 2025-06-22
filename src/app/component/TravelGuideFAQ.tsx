const TravelGuideFAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white text-gray-800">
      <div className="max-w-2xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Hướng dẫn di chuyển & FAQ</h2>
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">Hướng dẫn di chuyển:</h3>
          <p className="mb-4">
            Địa điểm tổ chức nằm tại Hội trường A, Đại học XYZ. Bạn có thể đến
            bằng các phương tiện công cộng như xe buýt số 10, 20 hoặc 30. Nếu đi
            bằng xe cá nhân, có bãi đỗ xe miễn phí tại cổng chính.
          </p>
          <h3 className="text-xl font-semibold mb-2">Câu hỏi thường gặp:</h3>
          <div className="mb-4">
            <p className="font-semibold">Tôi cần mang gì?</p>
            <p>Vui lòng mang theo thiệp mời và giấy tờ tùy thân.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Có chỗ giữ xe không?</p>
            <p>Có, chúng tôi có bãi đỗ xe miễn phí cho khách mời.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Nên mặc gì?</p>
            <p>Trang phục lịch sự, phù hợp với sự kiện tốt nghiệp.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuideFAQ;
