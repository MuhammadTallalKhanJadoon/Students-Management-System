import React from 'react'
import Image from '/ico1.jpg';

const Hero = () => {
  return (
  <div className="[container-type:inline-size] pt-[10cqw] flex capitalize h-[50cqw] " >
      <div className="[container-type:inline-size] w-[60cqw] flex flex-col  justify-center gap-[4cqw]  pl-[8cqw]">
        <h1 className="text-[10cqw] font-black leading-[10cqw]">student management</h1>
        <ul className="list-disc list-inside font-medium text-[5cqw] ">
            <li>satudent addmisson</li>
            <li>bulk import of students using CV </li>
            <li>compect students profile</li>
            <li>students promotion</li>
        </ul>
      </div>
      <div className="[container-type:inline-size] w-[40cqw] flex justify-end pr-[5cqw] pt-[5cqw]">
        <img className="w-[45cqw] h-[45cqw]" src={Image} />
      </div>
      </div>
  )
}

export default Hero
