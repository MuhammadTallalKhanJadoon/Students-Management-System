import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import Mode from "./mode";

const Addstudents = ({ setshowpopup, dark, setDark }) => {
  return (
    <>
      <div className="[container-type:inline-size] w-[20cqw] flex items-center justify-center gap-[1.5cqw]">
        <button
          onClick={()=> setshowpopup(true)}
          className="dark:bg-blue-500 dark:text-slate-300 dark:hover:bg-blue-400 dark:text-black cursor-pointer capitalize bg-[#2563EB] py-[4cqw] p-[5cqw] rounded-[2cqw] border-[0.1cqw] border-[#334155] flex items-center justify-center gap-[2cqw] text-[6cqw] w-[60cqw]"
        >
          <UserPlus className="h-[8cqw] w-[10cqw] pb-[1cqw]" />
          add student
        </button>

        <Mode dark={dark} setDark={setDark} />
      </div>
    </>
  );
};

export default Addstudents;
