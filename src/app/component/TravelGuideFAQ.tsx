const TravelGuideFAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100 text-gray-800">
      <div className="max-w-2xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Hướng dẫn di chuyển & FAQ</h2>
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-2">Hướng dẫn di chuyển:</h3>
          <p className="mb-4">
            Địa điểm tổ chức nằm tại Hội trường A, Học viện Công nghệ Bưu chính
            Viễn thông - Cơ sở tại TP. Hồ Chí Minh. Bạn có thể đến bằng các
            phương tiện công cộng như xe buýt số 76. Nếu đi bằng xe cá nhân, có
            bãi đỗ xe trong trường.
          </p>
          <h3 className="text-xl font-semibold mb-2">Câu hỏi thường gặp:</h3>
          <div className="mb-4">
            <p className="font-semibold">Tôi cần mang gì?</p>
            <p>Chỉ cần mang theo tâm hồn đẹp.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Có chỗ giữ xe không?</p>
            <p>Có, trong trường học có bãi đỗ xe.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Nên mặc gì?</p>
            <p>Trang phục lịch sự, phù hợp với sự kiện tốt nghiệp.</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Cần chú ý điều gì không?</p>
            <p>
              Có, hãy cẩn thận bị trộm móc túi. Năm ngoái đã có phụ huynh bị mất
              đồ. Nên hãy cẩn thận.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuideFAQ;
