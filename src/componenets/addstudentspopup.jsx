import React from "react";
import {X,Image} from 'lucide-react'

const Addstudentspopup = ({
  setshowpopup,
  studentformdata,
  setstudentformdata,
  setstoredata
}) => {

  const formhendel = (e) => {
  e.preventDefault();

  setstoredata((prev) => [...prev, studentformdata]);

  setshowpopup(null);
};

  return (
    <div className="text-black fixed top-0 left-0 items-center flex justify-center  w-screen h-screen z-[999] bg-blue-500/50 backdrop-blur-sm ">
      <form onSubmit={formhendel}
       
        className="[container-type:inline-size]   w-[70cqw] h-[45cqw] bg-white flex flex-col items-center p-[2cqw] rounded-[2cqw]"
      >
        <div className="flex justify-end w-[100cqw]">
          <X
            className=" cursor-pointer w-[3cqw] h-[3cqw]"
            onClick={() => {
              return setshowpopup(false);
            }}
          />
        </div>
        <h1 className="text-[6cqw] font-black m-0">Student Form</h1>
        <div className="[container-type:inline-size]  w-[90cqw] flex  ">
          <div className="[container-type:inline-size] w-[60cqw] flex flex-col  gap-[2cqw] ">
            <div className=" flex flex-col">
              {" "}
              <label className="font-medium text-[4cqw]" htmlFor="fullname">
                Full Name:
              </label>
              <input required
                className="border-[0.5cqw] rounded-[1cqw] h-[8cqw] p-[1cqw] text-[3.5cqw]"
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter full name"
                value={studentformdata.name}
                onChange={(e) => {
                  setstudentformdata({
                    ...studentformdata,
                    name: e.target.value,
                  });
                }}
              />
            </div>

            <div className=" flex flex-col">
              <label className="font-medium text-[4cqw]" htmlFor="fathername">
                Father Name:
              </label>
              <input required
                className="border-[0.5cqw] rounded-[1cqw] h-[8cqw] p-[1cqw] text-[3.5cqw]"
                type="text"
                id="fathername"
                name="fathername"
                placeholder="Enter father name"
                value={studentformdata.father}
                onChange={(e) => {
                  setstudentformdata({
                    ...studentformdata,
                    father: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="[container-type:inline-size] flex flex-col items-center  w-[40cqw] ">
            <div className=" w-[50cqw] h-[45cqw]  ">
              <input required
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setstudentformdata({
                    ...studentformdata,
                    image: e.target.files[0],
                  });
                }}
              />
              <label htmlFor="picture">
                <Image className="w-full h-full text-blue-400" />
              </label>
            </div>
            <p className="font-medium text-[5cqw] capitalize m-0">
              uplode picture
            </p>
          </div>
        </div>
        <div className="[container-type:inline-size]  w-[90cqw] flex flex-col ">
          <label className="font-medium text-[2.4cqw]" htmlFor="address">
            Address:
          </label>
          <textarea required
            className="border-[0.3cqw] scrollbar-none rounded-[1cqw] h-[5cqw] p-[1cqw] text-[2.15cqw]"
            id="address"
            name="address"
            placeholder="Enter address"
            value={studentformdata.address}
            onChange={(e) => {
              setstudentformdata({
                ...studentformdata,
                address: e.target.value,
              });
            }}
          />
        </div>
        <div className="[container-type:inline-size] pt-[1.8cqw]  w-[90cqw] flex gap-[5cqw]  ">
          <div className="flex flex-col w-[47cqw]">
            <label className="font-medium text-[2.4cqw]" htmlFor="class">
              Class:
            </label>

            <select required
              className="font-medium text-[2.2cqw]   border-[0.3cqw] rounded-[1cqw] h-[5cqw] p-[1cqw] "
              id="class"
              name="class"
              value={studentformdata.class}
              onChange={(e) => {
                setstudentformdata({
                  ...studentformdata,
                  class: e.target.value,
                });
              }}
            >
              <option value="">Select Class</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
          <div className="w-[47cqw] flex flex-col gap-[1cqw]">
            <label className="font-medium text-[2.4cqw]">Gender:</label>

            <div className="flex gap-[5cqw] ">
              <div className="flex gap-[1cqw] items-center ">
                {" "}
                <input
                  className="w-[2cqw] h-[2cqw]"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={studentformdata.gender === "male"}
                  onChange={(e) => {
                    setstudentformdata({
                      ...studentformdata,
                      gender: e.target.value,
                    });
                  }}
                />
                <label className="font-medium text-[2.4cqw]" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="flex gap-[1cqw] items-center ">
                <input
                  className="w-[2cqw] h-[2cqw]"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={studentformdata.gender === "female"}
                  onChange={(e) => {
                    setstudentformdata({
                      ...studentformdata,
                      gender: e.target.value,
                    });
                  }}
                />
                <label className="font-medium text-[2.4cqw]" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className=" [container-type:inline-size] pt-[2cqw] pb-[2cqw] w-[90cqw] flex  gap-[5cqw]">
          <div className="flex flex-col w-[50cqw]">
            {" "}
            <label className="font-medium text-[2.3cqw]" htmlFor="phone">
              Phone Number:
            </label>
            <input required
              className="border-[0.3cqw] rounded-[1cqw] h-[5cqw] p-[1cqw] text-[2.15cqw]"
              type="tel"
              id="phone"
              name="phone"
              placeholder="03XX-XXXXXXX"
              value={studentformdata.phone}
              onChange={(e) => {
                setstudentformdata({
                  ...studentformdata,
                  phone: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex flex-col w-[50cqw]">
            <label className="font-medium text-[2.4cqw]" htmlFor="class">
              course:
            </label>

            <select required
              className="capitalize font-medium text-[2.2cqw] border-[0.3cqw] rounded-[1cqw] h-[5cqw] p-[1cqw] "
              id="class"
              name="class"
              value={studentformdata.course}
              onChange={(e) => {
                setstudentformdata({
                  ...studentformdata,
                  course: e.target.value,
                });
              }}
            >
              <option value="">Select course</option>
              <option value="general science">general science</option>
              <option value="boilogy">boilogy</option>
              <option value="computer science">computer science</option>
              <option value="ICS">ICS</option>
              <option value="pre madical">pre madical</option>
              <option value="pre engemering">pre engemering</option>
            </select>
          </div>
        </div>

        <button className="capitalize  bg-[#2563EB] text-white p-[0.5cqw] rounded-[0.5cqw] border-[0.1cqw] border-[#334155]  flex items-center justify-center   text-[1.7cqw] font-bold w-[20cqw] ">
          add student
        </button>
      </form>
    
    </div>
  );
};

export default Addstudentspopup;
