import { Footer, Header, Section1, Section2 } from "@/component";

export default function Home() {
  return (
    <div className="w-full relative [background:radial-gradient(50%_50%_at_50%_50%,_#1d274b_52.9%,_#131a31)] overflow-hidden flex flex-col items-start justify-start tracking-[normal] text-center text-[42px] text-darkgray font-inter">
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}
