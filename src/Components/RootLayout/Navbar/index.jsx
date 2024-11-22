import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel, MdOutlineShoppingCart } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
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
  const usermenu = [
    {
      id: 1,
      item: "Manage My Account",
      link: "#",
      icon: <RiUserLine />,
    },
    {
      id: 2,
      item: "My Order",
      link: "#",
      icon: <LuShoppingBag />,
    },
    {
      id: 3,
      item: "My Cancellations",
      link: "#",
      icon: <MdOutlineCancel />,
    },
    {
      id: 4,
      item: "My Reviews",
      link: "#",
      icon: <FaRegStar />,
    },
    {
      id: 5,
      item: "Logout",
      link: "#",
      icon: <TbLogout2 />,
    },
  ];
  const [Account, setAccount] = useState(false);
  const userAccountRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (userAccountRef.current.contains(event.target)) {
        setAccount(!Account);
      } else {
        setAccount(false);
      }
    });
  }, [Account]);

  // const handelAccount = () => {
  //   setAccount(!Account);
  // };
  console.log(userAccountRef.current);

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
              <div className="w-8 h-8 bg-red_DB4444 rounded-full flex justify-center items-center ">
                <span
                  className="text-white text-xl cursor-pointer "
                  ref={userAccountRef}
                  // onClick={handelAccount}
                >
                  <RiUserLine />
                  {Account && (
                    <ul className="w-[224px] rounded absolute top-full left-0 -translate-x-[43%] translate-y-1 gap-3 flex flex-col bg-gradient-to-b from-gray-800/70 via-gray-900/80 to-gray-800/90 backdrop-blur-lg border-2">
                      {/* bg-gradient-to-r from-text_fafafa to-[#000000]
                       */}
                      {usermenu?.map((menu) => (
                        <li key={menu.id}>
                          <a
                            href={menu.link}
                            className="flex items-center gap-x-4 py-2 px-4 text-sm font-normal font-Poppins leading-6 text-text_fafafa hover:bg-[rgba(255,255,255,0.44)] hover:text-text_black_000"
                          >
                            <span className="text-[28px]">{menu.icon}</span>
                            {menu.item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
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
