import React from "react";
import { Search, ListFilter} from "lucide-react";

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="[container-type:inline-size]  w-[50cqw] flex items-center justify-center ">
      <input
        className="border-[#CBD5E1] focus:border-blue-900 focus:border-[0.4cqw] focus:outline-none bg-[#FFFFFF] dark:bg-black dark:text-slate-200 border-slate-700  text-[rgb(51,65,85)] p-[2.5cqw] border-[0.1cqw] w-[70cqw] h-[6cqw] rounded-tl-[3cqw] rounded-bl-[3cqw] text-[3cqw] "
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="[container-type:inline-size]  bg-[#FFFFFF] dark:bg-black border-slate-700 text-[#334155] items-center justify-center flex border-[0.1cqw] border-[#CBD5E1] rounded-tr-[3cqw] w-[15cqw] h-[6cqw] rounded-br-[3cqw] gap-[2cqw]  border">
        {" "}
        <ListFilter className="[container-type:inline-size] px-[2cqw] cursor-pointer hover:bg-gray-200 w-[30cqw]  h-[30cqw] " />
        <Search className="[container-type:inline-size] px-[2cqw] cursor-pointer  hover:bg-gray-200 w-[30cqw]  h-[30cqw]" />
        
      </div>
    </div>
  );
};

export default Searchbar;
