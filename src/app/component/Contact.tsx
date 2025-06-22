import { FaFacebook, FaPhone, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100 text-gray-800">
      <div className="max-w-2xl text-center p-8">
        <h2 className="text-3xl font-bold mb-4">Liên hệ</h2>
        <p className="text-lg mb-8">
          Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi
          qua các kênh sau:
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <FaFacebook className="text-blue-600" size={24} />
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaCommentDots className="text-green-500" size={24} />
            <a
              href="https://zalo.me/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-green-500 hover:underline"
            >
              Zalo
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-700" size={24} />
            <span className="text-lg">Số điện thoại: 0123-456-789</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
