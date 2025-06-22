import Link from "next/link";

const EventDetails = () => {
  return (
    <div
      id="event-details"
      className="flex flex-col items-center justify-center py-16 bg-gray-100 text-gray-800"
    >
      <div className="max-w-2xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Thông tin chi tiết buổi lễ</h2>
        <p className="text-lg mb-2">
          <strong>Thời gian:</strong> Ngày 25 tháng 6, 2025 - 10:00 AM
        </p>
        <p className="text-lg mb-2">
          <strong>Địa điểm:</strong> Hội trường A, Đại học XYZ
        </p>
        <p className="text-lg mb-4">
          <strong>Thời lượng chương trình:</strong> 10:00 AM - 12:00 PM
        </p>
        <div className="mb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.516390135586!2d106.78708095497996!3d10.848273232239844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752772b245dff1%3A0xb838977f3d419d!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IENow61uaCBWaeG7hW4gVGjDtG5nIGPGoSBz4bufIHThuqFpIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1750609183800!5m2!1svi!2shttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.516390135586!2d106.78708095497996!3d10.848273232239844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752772b245dff1%3A0xb838977f3d419d!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IENow61uaCBWaeG7hW4gVGjDtG5nIGPGoSBz4bufIHThuqFpIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1750609183800!5m2!1svi!2s"
            width="100%"
            height="300"
            allowFullScreen={false}
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
        <Link
          href="/"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
