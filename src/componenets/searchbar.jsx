import React from 'react'
import { Search } from 'lucide-react';

const Searchbar = () => {
  return (
    <div className="[container-type:inline-size]  w-[50cqw] flex items-center justify-center ">
   <input className="border-[#CBD5E1] bg-[#FFFFFF]  text-[#334155] p-[2.5cqw] border-[0.1cqw] w-[70cqw] h-[6cqw] rounded-tl-[3cqw] rounded-bl-[3cqw] text-[3cqw] " type="text" placeholder="Enter your name" />
   <div className="[container-type:inline-size] bg-[#FFFFFF] text-[#334155] items-center justify-center flex border-[0.1cqw] border-[#CBD5E1] rounded-tr-[3cqw] w-[8cqw] h-[6cqw] rounded-br-[3cqw] "> <Search className="w-[100cqw] h-[50cqw]"  /></div>

    </div>
  )
}

export default Searchbar
