import React from "react";
import { Category } from "../../../../Data/Data";
import { FaAngleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[23%] pt-10 border-r-2 ">
            <ul>
              {Category?.map((item) => (
                <div className="flex items-center justify-between">
                  <li className="text-xs font-Poppins font-normal leading-6 pb-4 text-text_black_000 cursor-pointer">
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
          <div className="w-[77%] bg-yellow-200">b</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
