import Image from "next/image";
import Input from "./Input";

const Section1 = () => {
  return (
    <div className="relative self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[236px] box-border gap-[93px] max-w-full mt-[-151px] text-5xl font-montserrat mq1150:gap-[46px] mq1150:pb-[99px] mq1150:box-border mq1350:pb-[153px] mq1350:box-border mq450:pb-16 mq450:box-border mq800:gap-[23px]">
      <Image
        fill
        className="w-full absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-full shrink-0 object-cover"
        alt=""
        src="/group-1244833677@2x.png"
      />
      <div className=" w-full flex flex-row items-center justify-center py-0 px-5 box-border max-w-full">
        <div className="w-full flex flex-col items-end justify-start gap-[83px] max-w-full mq1350:gap-[41px] mq800:gap-[21px]">
          <div className="w-1.5 h-1.5 relative rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)] z-[1]" />
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <Input />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border min-h-[408px] max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start gap-[30px] max-w-full">
          <div className="w-[1669px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
            <div className="h-1.5 w-1.5 relative rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)] z-[1]" />
          </div>
          <div className="w-[759px] relative leading-[120%] inline-block max-w-full pl-5 pr-5 z-[1] mq450:text-lgi mq450:leading-[23px]">
            Secure a competitive advantage in
          </div>
          <div className="relative w-full h-[50px]">
            <Image
              fill
              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
              alt=""
              src="/mask-group.svg"
            />
          </div>
        </div>
      </div>
      {/* understand mission */}
      <div className=" mb-20 w-full flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border relative max-w-full text-[60px] text-gray-200 font-inter">
        <div className="h-1.5 w-1.5 absolute my-0 mx-[!important] right-[50px] bottom-[319px] rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)] z-[1]" />
        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
          <div className="w-full flex flex-col items-center justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full">
            <div className="w-full flex flex-row items-start justify-start max-w-full">
              <h1 className="m-0 w-full relative text-inherit leading-[120%] font-normal font-inherit flex items-end justify-center shrink-0 max-w-full z-[1] mq450:text-17xl mq450:leading-[43px] mq800:text-[48px] mq800:leading-[58px]">
                Understand Our Mission
              </h1>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 pr-[30px] pl-0 box-border [row-gap:20px] max-w-full">
              <div className="relative w-full flex items-center justify-center shrink-0 mq1350:min-w-full  pb-20">
                <div className="absolute bottom-12 left-[0px] rounded-[50%] bg-gray-100 [filter:blur(35px)] w-full h-[50px] z-[1]" />
                <div className="top-[0px] left-[150px] rounded-[15px] w-[70%] h-[520px] z-[2] bg-[#34416A]  p-1.5">
                  <div
                    className="relative w-full h-full
              overflow-hidden rounded-[15px]"
                  >
                    <Image
                      fill
                      className="w-full h-full overflow-hidden object-cover [transform:scale(1.183)] "
                      alt=""
                      src="/screenshot-314-1@2x.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[450px] left-[74px] rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)] w-1.5 h-1.5 z-[1]" />
              </div>
              <div className="h-[89px] flex flex-col items-start justify-start ml-[-36px] mq1150:ml-0">
                <div className="w-1.5 h-1.5 relative rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)] z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
