import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-4">Lời mời từ [Tên người mời]</p>
        <p className="text-sm mb-4">Năm tốt nghiệp: 2025</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm">© 2025 [Tên trường học]. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
