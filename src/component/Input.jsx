"use client";
import { addEmail, validateEmail } from "@/redux/slice";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Input = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubmit = () => {
    if (isValidEmail && email !== "") {
      toast.success("Thank you, we've received your email.");
      dispatch(addEmail(email));
      setEmail("");
    } else {
      toast.error("Sorry Invalid Email, please retry !");
    }
  };

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-[20px] max-w-full">
      <div
        className=" rounded-8xs bg-darkslateblue-100 box-border flex flex-row items-center justify-start pt-[15px] px-5 pb-3.5 min-w-[169px] 
      max-w-full z-[1] border-[1.4px] border-solid border-primary-white"
      >
        <div className="h-[54px] w-[460px] relative rounded-8xs bg-darkslateblue-100 box-border hidden max-w-full border-[1.4px] border-solid border-primary-white" />
        <input
          onChange={handleEmailChange}
          value={email}
          className="w-[399px] [border:none] [outline:none] font-montserrat text-[18px] bg-[transparent] h-[25px] relative leading-[140%] text-darkgray text-left flex items-end z-[1]"
          placeholder="Company Email ID"
          type="email"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="cursor-pointer [border:none] py-2.5 pr-3 pl-5 bg-primary-white rounded-[10px] flex flex-row items-center justify-end whitespace-nowrap z-[1] hover:bg-gainsboro"
      >
        <div className="relative text-5xl leading-[140%] font-semibold font-montserrat text-primary-1 text-center">
          Join Waitlist
        </div>
      </button>
    </div>
  );
};

export default Input;
