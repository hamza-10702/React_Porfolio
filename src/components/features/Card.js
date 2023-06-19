import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { image, about, name, technology } }) => {
  return (
    <div
      className="w-full px-12 h-70 py-4 rounded-[10px] shadow-lg shadow-shadowColor flex items-start
        bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
         hover:from-black hover:to-[#1e2024] transition-colors duration-100 group"
    >
      <div className="h-62 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          {/* <div className="w-10 h-8 flex flex-col justify-between">
           
               {image ? (
                 <span className="text-5xl text-designColor">{image}</span>
               ) : (
                 <>
                   <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                   <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                   <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                   <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                 </>
               )}
             </div> */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl  font-titleFont font-bold text-gray-300">
              {name}
            </h2>
            <p className="base">{about}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
