import Image from "next/image";

const Section2 = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center gap-[66px] max-w-full mt-[-151px] mq1150:gap-[33px] mq800:gap-[16px]">
      <div className="w-full flex flex-row items-center justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-primary-white font-montserrat">
        <div className="w-full flex flex-col items-center justify-start gap-[60px] max-w-full mq800:gap-[30px]">
          <div className="w-full flex flex-col items-start justify-start relative gap-[82px] max-w-full mq1150:gap-[41px] mq450:gap-[20px]">
            <div className="w-full flex flex-row items-center justify-center relative">
              <div className="w-full flex flex-row items-center justify-center gap-14 mq1150:flex-col">
                <div className="flex flex-col gap-4 justify-between items-start max-w-[345px]">
                  <div className="flex flex-row items-end justify-start gap-[20px]">
                    <Image
                      width={32}
                      height={32}
                      alt="Intuitive Dashboards"
                      src="/group-1244833678.svg"
                    />
                    <h5 className="relative leading-[120%] font-semibold mq450:text-lgi mq450:leading-[23px]">
                      Intuitive Dashboards
                    </h5>
                  </div>
                  <p className="self-stretch relative text-base leading-[120%] font-medium text-darkgray mq450:text-base mq450:leading-[19px]">
                    User-friendly interface providing seamless navigation and
                    effortlessly accessible data insights facilitating a
                    streamlined workflow.
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-between items-start max-w-[345px]">
                  <div className="flex flex-row items-end justify-start gap-[20px]">
                    <Image
                      width={32}
                      height={32}
                      alt="Accurate Risk Assessment"
                      src="/group-1244833679@2x.png"
                    />
                    <h5 className="relative leading-[120%] font-semibold mq450:text-lgi mq450:leading-[23px]">
                      Accurate Risk Assessment
                    </h5>
                  </div>
                  <p className="self-stretch relative text-base leading-[120%] font-medium text-darkgray mq450:text-base mq450:leading-[19px]">
                    Analyzing uncertainties and severity of regulations and
                    circulars to safeguard operations and enhance proactive
                    decision-making.
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-between items-start max-w-[345px]">
                  <div className="flex flex-row items-end justify-start gap-[20px]">
                    <Image
                      width={32}
                      height={32}
                      alt=" Compliance Co-Pilot"
                      src="/group-1244833680.svg"
                    />
                    <h5 className="relative leading-[120%] font-semibold mq450:text-lgi mq450:leading-[23px]">
                      Compliance Co-Pilot
                    </h5>
                  </div>
                  <p className="self-stretch relative text-base leading-[120%] font-medium text-darkgray mq450:text-base mq450:leading-[19px]">
                    Navigating regulatory landscapes with precision and ease,
                    your trusted partner in ensuring adherence to industry
                    standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1486px] flex flex-col items-start justify-start relative gap-[82px] max-w-full mq1150:gap-[41px] mq450:gap-[20px]">
              <div className="w-[836px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="h-1.5 w-1.5 relative rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)]" />
              </div>
              <div className="w-1.5 h-1.5 absolute my-0 mx-[!important] top-[16px] right-[196px] rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)]" />
              <div className="w-1.5 h-1.5 absolute my-0 mx-[!important] right-[0px] bottom-[43px] rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)]" />
              <div className="w-1.5 h-1.5 relative rounded-[50%] bg-gray-200 shadow-[0px_0px_8px_rgba(255,_255,_255,_0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
