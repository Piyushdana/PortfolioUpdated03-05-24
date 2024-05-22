import React from "react";
import CurrentJob from "./CurrentJob";

export default function Skills({ skills }) {
  return (
    <div className="flex space-x-5 ">
      <div className="flex flex-col gap-2 md:gap-10 items-center">
        <img
          id="react"
          className="h-[5rem] w-[5rem] rounded-3xl "
          src={skills.skillImg}
          alt=""
        />
        <CurrentJob text2={skills.skillName} text1="" />
      </div>
    </div>
  );
}
