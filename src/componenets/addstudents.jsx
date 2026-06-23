import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import Mode from "./mode";

const Addstudents = ({setshowpopup}) => {
  return (
    <>
      <div className="[container-type:inline-size] w-[20cqw] flex items-center justify-center gap-[1.5cqw]">
        <button
          onClick={()=> setshowpopup(true)}
          className="cursor-pointer capitalize bg-[#2563EB] py-[4cqw] p-[5cqw] rounded-[2cqw] border-[0.1cqw] border-[#334155] flex items-center justify-center gap-[2cqw] text-[6cqw] w-[60cqw]"
        >
          <UserPlus className="h-[8cqw] w-[10cqw] pb-[1cqw]" />
          add student
        </button>

        <Mode />
      </div>
    </>
  );
};

export default Addstudents;
