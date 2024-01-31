import React from "react";

const Header = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[156px] min-h-[620px] max-w-full mq1150:gap-[78px] mq800:gap-[39px]">
      {/* header */}
      <header className="self-stretch bg-darkslateblue-200 [backdrop-filter:blur(16.5px)] flex flex-row items-end justify-start pt-[34px] px-[77px] pb-4 box-border top-[0] z-[99] sticky max-w-full text-left text-17xl text-primary-white font-inter mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[100px] w-[1920px] relative bg-darkslateblue-200 [backdrop-filter:blur(16.5px)] hidden max-w-full" />
        <h3 className="m-0 relative text-inherit leading-[140%] font-bold font-inherit z-[1]">
          Growhut
        </h3>
      </header>
      {/* hero */}
      <div className="w-full flex flex-row items-start justify-start py-0 pr-[46px] pl-5 box-border max-w-full mq1350:pr-[23px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-full flex flex-col items-end justify-start gap-[16px] max-w-full">
              <div className="w-1.5 h-1.5 relative rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)]" />
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="w-full flex items-center justify-center relative max-w-full">
                  <h2 className="m-0 text-inherit leading-[120%] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.4))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-end w-[1099px] mq450:text-[25px] mq450:leading-[30px] mq800:text-[34px] mq800:leading-[40px]">
                    <span className="w-full">
                      <p className="m-0">Compliance Management Redefined</p>
                      <p className="m-0">Simple, Smart, Productive</p>
                    </span>
                  </h2>
                  <div className="absolute top-[0px] left-[1329px] rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)] w-1.5 h-1.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[47px] box-border max-w-full text-5xl font-montserrat mq800:pl-[23px] mq800:box-border">
            <div className="w-[719px] relative leading-[120%] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[23px]">
              Seamless workflows, Crafted by AI Innovation
            </div>
          </div>
          <div className="w-1.5 h-1.5 relative rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
