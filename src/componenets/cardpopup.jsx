import React from "react";

const CardPopup = ({ student, closePopup }) => {
  return (
    <div onClick={closePopup} className="[container-type:inline-size] backdrop-blur-sm fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div onClick={(e) => e.stopPropagation()} className="[container-type:inline-size]  bg-white  rounded-[2cqw] w-[40rem] h-[30cqw] shadow-[0_0_1cqw_rgba(0,0,0,0.7)]">
         <div className="[container-type:inline-size] rounded-tl-[3cqw] rounded-tr-[3cqw] bg-blue-800 flex items-center justify-center uppercase w-full h-[15cqw] font-black">
          <h1 className="text-[5cqw] text-white">
            student card
          </h1>
        </div>
         <div className="[container-type:inline-size] flex h-[70cqw] w-full">
          <div className="capitalize w-[70cqw] box-border px-[8cqw] py-[5cqw]">
            <h3><strong>father name:</strong> {student.father}</h3>
            <h3><strong>gender:</strong> {student.gender}</h3>
            <h3><strong>class:</strong> {student.class}</h3>
            <h3><strong>course:</strong> {student.course}</h3>
            <h3><strong>address:</strong> {student.address}</h3>
          </div>

          <div className="[container-type:inline-size] py-[5cqw] gap-[3cqw] flex flex-col items-center w-[30cqw]">
            <img
              className="[container-type:inline-size] w-[70cqw] h-[70cqw] bg-blue-500 [clip-path:circle(50%)]"
              src={student?.image ? URL.createObjectURL(student.image) : ""}
              alt=""
            />

            <h2 className="[container-type:inline-size] text-center w-full font-medium">
              {student.name}
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardPopup;