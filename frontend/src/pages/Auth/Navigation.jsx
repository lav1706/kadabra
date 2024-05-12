import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApiSlice";
import { logout } from "../../redux/features/auth/authSlice";
import FavoritesCount from "../Products/FavoritesCount";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="h-[70px] w-[100%] py-[10px] px-[20px] flex items-center bg-[#E09145] p-6 sticky top-0 z-50 border border-b-2 sm:p-1">
      <>
        <div className="flex-1 flex justify-start items-center mt-2 cursor-pointers gap-6   ">
          <Link
            to="/shop"
            className="text-gray-600 flex items-center space-x-2 "
          >
            <BsShop size={30} />
          </Link>

          <Link
            to="/cart"
            className="text-gray-600 flex items-center space-x-2 relative  "
          >
            <span className="flex ">
              <AiOutlineShoppingCart size={30} />
            </span>

            {cartItems.length > 0 && (
              <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full absolute left-4 -top-2">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link
            to="/favorite"
            className="text-gray-600 flex items-center space-x-2  relative"
          >
            <FaHeart size={30} />
            <span>
              <FavoritesCount />
            </span>
          </Link>
        </div>
        <div className="flex-1 font-black text-2xl text-center cursor-pointer font-orbitron ml-6 ">
          <Link to="/">
            <h1 className="text-[2.80rem] text-gray-600 font-black font-orbitron mobile:text-[1.8rem] mobile:flex sm:pd-4 ">
              Ka<span className="text-orange-300">dab</span>ra
            </h1>
          </Link>
        </div>
        <div className=" relative flex-1 flex justify-end cursor-pointer">
          <button
            className="text-gray-600 flex items-center space-x-2 focus:outline-none text-xl capitalize"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {userInfo ? (
              <span className="flex gap-1 align-middle text-[20px]  pr-2 mobile:pr-1 mobile:gap-0">
                {userInfo.username}
                <span className="pt-1">
                  {dropdownOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                </span>
              </span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </button>
          {dropdownOpen && userInfo && (
            <ul className="absolute top-full bg-gray-800 text-white py-3 px-8 rounded text-lg">
              {userInfo.isAdmin && (
                <>
                  <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/admin/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/admin/categorylist">Categories</Link>
                  </li>
                  <li>
                    <Link to="/admin/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/admin/userlist">Users</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </>
    </nav>
  );
};

export default Navigation;
