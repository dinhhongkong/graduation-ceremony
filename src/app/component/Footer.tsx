import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaT } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg mb-4">Lời mời từ Đinh Hồng Kông</p>
        <p className="text-sm mb-4">Năm tốt nghiệp: 2025</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/dinhhongkong.2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/kongdinhhong/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://x.com/DinhHongKong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm">© 2025 DinhHongKong . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
