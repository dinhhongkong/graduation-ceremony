import Link from "next/link";

const EventDetails = () => {
  return (
    <div
      id="event-details"
      className="flex flex-col items-center justify-center py-2 bg-gray-100 text-gray-800"
    >
      <div className="max-w-2xl text-center p-2">
        <div className="w-full max-w-screen-sm mx-auto text-center px-4 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Thông tin chi tiết buổi lễ
          </h2>
          <p className="text-base sm:text-lg mb-2 whitespace-normal">
            <strong>Thời gian:</strong> Sáng 10:30 - 01/07/2025
          </p>
          <p className="text-base sm:text-lg mb-2 whitespace-normal">
            <strong>Địa điểm:</strong> Học viện Công nghệ Bưu chính Viễn thông -
            Cơ sở tại TP. Hồ Chí Minh
          </p>
          <p className="text-base sm:text-lg mb-4 whitespace-normal">
            <strong>Thời lượng chương trình:</strong> 10:30 AM - 11:30 AM
          </p>
        </div>

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
