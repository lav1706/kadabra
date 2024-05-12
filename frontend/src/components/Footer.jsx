import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#8b8b8b]">
      <div className="flex flex-col flex-1 p-5">
        <h1>Raghav.s</h1>
        <p className="my-5">
          An e-commerce site enables online transactions, offering a seamless
          shopping experience with secure payment options and a diverse product
          range. It facilitates global access, fostering international trade and
          business expansion beyond geographical limits.
        </p>
        <div className="flex gap-2 ">
          <div className="w-10 h-10 text-[white] flex items-center justify-center mr-5 rounded-[50%] bg-[#3B5999]">
            <FaFacebookMessenger />
          </div>
          <div className="w-10 h-10 text-[white] flex items-center justify-center mr-5 rounded-[50%] bg-[#E4405F]">
            <CiInstagram />
          </div>
          <div className="w-10 h-10 text-[white] flex items-center justify-center mr-5 rounded-[50%] bg-[#55ACEE]">
            <FaXTwitter />
          </div>
        </div>
      </div>
      <div className="flex-1 p-5 sm:hidden">
        <div className="mb-6">Useful Links</div>
        <ul className="flex flex-wrap m-0 p-0 list-none">
          <li className="w-6/12 mb-2.5">Home</li>
          <li className="w-6/12 mb-2.5">Cart</li>
          <li className="w-6/12 mb-2.5">Man Fashion</li>
          <li className="w-6/12 mb-2.5">Woman Fashion</li>
          <li className="w-6/12 mb-2.5">Accessories</li>
          <li className="w-6/12 mb-2.5">My Account</li>
          <li className="w-6/12 mb-2.5">Order Tracking</li>
          <li className="w-6/12 mb-2.5">Wishlist</li>
          <li className="w-6/12 mb-2.5">Wishlist</li>
          <li className="w-6/12 mb-2.5">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-5 sm:bg-[#fff8f8] text-black">
        <div className="mb-6">Contact</div>
        <div className="flex items-center mb-5">
          <div className="flex items-center mb-5">
            <FaPhoneAlt style={{ marginRight: "10px" }} /> +9100000000
          </div>
          <div className="flex items-center mb-5">
            <IoMdMailOpen style={{ marginRight: "10px" }} />{" "}
            contact@lavnishraghva00@gmail.com
          </div>
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          className="w-[50%] sm:w-full"
        />
      </div>
    </div>
  );
};

export default Footer;
