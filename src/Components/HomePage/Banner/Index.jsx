import React from "react";
import { Category } from "../../../../Data/Data";
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import bannerMokup from "../../../assets/Banner/bannerMokup.png";
import appleLogo from "../../../assets/Banner/appleLogo.png";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[23%] pt-10 border-r-2 ">
            <ul>
              {Category?.map((item) => (
                <div className="flex items-center justify-between hover:bg-gray-300 ">
                  <li className="hover:pl-4 transition-all text-xs font-Poppins font-normal pl-2 leading-6 py-2 text-text_black_000 cursor-pointer ">
                    {item.category}
                  </li>
                  {item.subCetegory && (
                    <span className="text-xs mr-4 font-Poppins font-normal leading-6 pb-4 text-text_black_000 cursor-pointer">
                      <FaAngleRight />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="w-[77%] ml-10 mt-[45px] ">
            <Slider {...settings}>
              <div className="h-[344px] w-[892px] bg-black flex justify-between text-white">
              <div className="pt-[58px] pl-[64px] pb-[47px]">
                <div className="flex items-center">
                  <img className="h-[49px]" src={appleLogo} alt={appleLogo} />
                  <h3 className="text-text_fafafa font-normal font-Poppins text-base leading-6 pl-6">
                    iPhone 14 Series
                  </h3>
                </div>

                <p className="w-[294px] mt-5 font-Inter text-5xl font-semibold text-text_fafafa leading-[60px] tracking-widest ">
                  Up to 10% off Voucher
                </p>
                <div className="flex items-center mt-[22px]">
                  <a
                    className="mr-[8px] text-base font-Poppins text-text_fafafa banner_line hover:text-text_fafafa"
                    href="#"
                  >
                    Shop Now
                  </a>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
              <div className="w-full h-full">
                <img className="w-full h-full" src={bannerMokup} alt="" />
              </div>
            </div>  
            </Slider>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
