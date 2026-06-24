import React from "react";

const Studentcard = ({ storedata, onClick  }) => {
  return (

      <div onClick={onClick } className="[container-type:inline-size] flex flex-col bg-white rounded-[2cqw] shadow-[0_0_1cqw_rgba(37,99,235,0.7)] hover:scale-[1.06] hover:shadow-blue-900 duration-500 transition-all w-[31cqw] h-[20cqw] cursor-pointer">

        <div className="[container-type:inline-size] rounded-tl-[3cqw] rounded-tr-[3cqw] bg-blue-800 flex items-center justify-center uppercase w-full h-[30cqw] font-black">
          <h1 className="text-[5cqw] text-white">
            student card
          </h1>
        </div>

        <div className="[container-type:inline-size] flex h-[70cqw] w-full">
          <div className="capitalize w-[70cqw] box-border px-[8cqw] py-[5cqw]">
            <h3><strong>father name:</strong> {storedata?.father}</h3>
            <h3><strong>gender:</strong> {storedata?.gender}</h3>
            <h3><strong>class:</strong> {storedata?.class}</h3>
            <h3><strong>course:</strong> {storedata?.course}</h3>
            <h3><strong>address:</strong> {storedata?.address}</h3>
          </div>

          <div className="[container-type:inline-size] py-[5cqw] gap-[3cqw] flex flex-col items-center w-[30cqw]">
            <img
              className="[container-type:inline-size] w-[70cqw] h-[70cqw] bg-blue-500 [clip-path:circle(50%)]"
              src={storedata?.image ? URL.createObjectURL(storedata.image) : ""}
              alt=""
            />

            <h2 className="[container-type:inline-size] text-center w-full font-medium">
              {storedata?.name}
            </h2>
          </div>

        </div>
      </div>
   
  );
};

export default Studentcard;