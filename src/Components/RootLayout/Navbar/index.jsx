import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoMdStarOutline } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag, LuUser } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiLogoutCircleLine, RiUserLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 1,
      item: "Contact",
    },
    {
      id: 1,
      item: "About",
    },
    {
      id: 1,
      item: "Sign Up",
    },
  ];

  const [Account, setAccount] = useState(false);
  const userAccountRef = useRef(null);
  const handelAccount = () => {
    setAccount(!Account);
  };

  return (
    <>
      <div className="py-5 border-b-2 ">
        <div className="container flex justify-between items-center">
          {/* logo part */}
          <div>
            <h2 className="text-2xl font-bold font-Inter text-text_black_000 cursor-pointer hover:text-black_2_363738">
              Exclusive
            </h2>
          </div>
          {/* logo part */}

          {/* menu part started */}
          <div className="">
            <ul className="flex justify-between gap-x-12">
              {navItem?.map((nav) => (
                <li key={nav.id} className="menu_line">
                  <NavLink
                    to={`/${nav.item}`}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "font-Poppins font-medium text-text_black_000 text-base"
                        : isActive
                        ? "text-red-500"
                        : "font-Poppins font-medium text-text_black_000 text-base"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* menu part end */}

          {/* user login part started */}

          <div className="flex gap-x-6 justify-between items-center">
            <div className=" relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-white_2_F5F5F5 py-[7px] pl-5 pr-10 w-[263px] "
              />
              <span className="cursor-pointer absolute right-1 top-1/2 -translate-y-2/4 text-2xl">
                <IoSearch />
              </span>
            </div>
            <div className="flex gap-x-4 text-[32px] relative ">
              <span className="cursor-pointer">
                <FaRegHeart />
              </span>
              <span className="cart_count cursor-pointer">
                <MdOutlineShoppingCart />
              </span>
              <div className="w-8 h-8 bg-red_DB4444 rounded-full flex justify-center items-center  ">
                <span
                  className="text-white text-xl cursor-pointer "
                  onClick={handelAccount}
                  ref={userAccountRef}
                >
                  <RiUserLine />
                </span>
                {Account && (
                  <div
                    className={`absolute right-[0%] top-[150%] z-99 border-2 border-black bg-[rgba(143,138,138,0.68)] w-[300px] flex flex-col gap-y-5 py-7 rounded `}
                  >
                    <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all hover:text-text_black000000 text-white_F5F5F5 pl-5 hover:cursor-pointer hover:bg-slate-300 hover:text-black">
                      <span className=" text-3xl ">
                        <LuUser />
                      </span>
                      <h3 className="text-xl font-normal font-popins ">
                        Manage My Account
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer hover:bg-slate-300 hover:text-black">
                      <span className=" text-3xl">
                        <LuShoppingBag />
                      </span>
                      <h3 className="text-xl font-normal font-popins">
                        My Order
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer hover:bg-slate-300 hover:text-black">
                      <span className=" text-3xl">
                        <ImCancelCircle />
                      </span>
                      <h3 className=" text-xl font-normal font-popins">
                        My Cancellations
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer hover:bg-slate-300 hover:text-black">
                      <span className=" text-3xl">
                        <IoMdStarOutline />
                      </span>
                      <h3 className="text-xl font-normal font-popins">
                        My Reviews
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-2 hover:bg-white_F5F5F5 hover:py-3 transition-all  hover:text-text_black000000 text-text_whiteFAFAFA pl-5 hover:cursor-pointer hover:bg-slate-300 hover:text-black">
                      <span className="text-3xl">
                        <RiLogoutCircleLine />
                      </span>
                      <h3 className="text-xl font-normal font-popins">
                        Logout
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* user login part end */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
