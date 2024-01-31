import Image from "next/image";
import React from "react";

const footerItems = [
  {
    name: "Contact",
    src: "/xnixlinecall.svg",
    details: "+91 9876543210",
  },
  {
    name: "Email Us",
    src: "/xnixlineenvelope@2x.png",
    details: "xyz123@email.com",
  },
];

const Footer = () => {
  return (
    <footer
      className=" self-stretch flex flex-row items-end justify-between pt-9 pb-8 pr-[103px] pl-[102px] box-border relative 
    gap-[20px] max-w-full text-left  text-primary-white font-inter mb-[-20px]"
      style={{
        backgroundColor: "#00000099",
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
      }}
    >
      <div className="w-full flex items-center ">
        <h5 className="flex-1 m-0 relative text-xs leading-[140%] font-bold ">
          Growhut
        </h5>
        <div className="self-stretch flex flex-row items-start justify-between gap-12 mq800:flex-wrap">
          {footerItems.map(({ name, src, details }) => {
            return (
              <div
                className="flex flex-col items-start justify-start gap-[4px]"
                key={name}
              >
                <div
                  className="flex flex-row items-center justify-start gap-[10px]
                  pb-1.5
                 border-b border-t-0 border-l-0 border-r-0 border-[#9F9F9F] border-solid"
                >
                  <Image
                    width={10}
                    height={10}
                    className="h-5 w-5 relative"
                    loading="eager"
                    alt=""
                    src={src}
                  />
                  <p className="relative leading-[140%] text-base">{name}</p>
                </div>
                <div className="relative leading-[140%] font-semibold text-primary-white whitespace-nowrap text-base">
                  {details}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
