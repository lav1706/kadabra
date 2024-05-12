import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Announcement = () => {
  const [close, setClose] = useState(
    `bg-[#292c35]  text-white h-6 text-center text-sm font-black flex item-center justify-center gap-2 mobile:text-xs mobile:text-center mobile:justify-start mobile:pl-10`
  );
  const handleClose = () => {
    setClose(close + " hidden");
  };
  return (
    <div className={close}>
      Super Deal! Free Dilvery on Order Over ₹1000
      <IoClose className="cursor=pointer " onClick={handleClose} />
    </div>
  );
};

export default Announcement;
