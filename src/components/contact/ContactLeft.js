import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = ({ data }) => {
  return (
    <div className="w-full lgl:w-[35%] h-full  p-4 lgl:p-8 rounded-lg  flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-designColor ">
          {data?.profiler?.name}
        </h3>
        <p className="text-lg font-normal text-gray-400">
          {data?.profiler?.workAs}
        </p>
        <p className=" text-base text-gray-400 tracking-wide">
          {data?.profiler?.about ? data.profiler?.about : null}
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-lightText">{data?.profiler?.contact}</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">{data?.profiler?.email}</span>
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base uppercase font-titleFont ">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href={`mailto:${data?.banner?.contact[0]?.contactLink}`}>
              <FaGoogle />
            </a>
          </span>
          <span className="bannerIcon">
            <a href={`${data?.banner?.contact[1]?.contactLink}`}>
              <FaLinkedin />
            </a>
          </span>
          <span className="bannerIcon">
            <a href={`${data?.banner?.contact[2]?.contactLink}`}>
              <BsGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
