import React, { useState } from "react";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/hero";
import Addstudentspopup from "./componenets/addstudentspopup";
import Studentcard from "./componenets/studentcard";
import Footer from "./componenets/footer";
import CardPopup from "./componenets/cardpopup";

const App = () => {
  const [showpopup, setshowpopup] = useState(false);
  const [studentformdata, setstudentformdata] = useState({
    name: "",
    father: "",
    image: null,
    address: "",
    class: "",
    gender: "",
    phone: "",
    course: "",
  });
  const [storedata, setstoredata] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div>
      <Navbar setshowpopup={setshowpopup} />

      <Hero />

      {showpopup && (
        <Addstudentspopup
          setshowpopup={setshowpopup}
          studentformdata={studentformdata}
          setstudentformdata={setstudentformdata}
          setstoredata={setstoredata}
        />
      )}
      <div
        className={`[container-type:inline-size] min-h-[20cqw] rounded-2xl border-blue-900 border-1 flex flex-wrap gap-[3cqw] p-[5cqw] ${storedata.length > 0 ? "justify-center border-none" : "justify-center items-center"}`}
      >
        {storedata.length > 0 ? (
          storedata.map((a, index) => (
            <Studentcard
              key={index}
              storedata={a}
              onClick={() => setSelectedStudent(a)}
            />
          ))
        ) : (
          <p className="cursor-default font-medium text-[2cqw] text-red-600">
            {" "}
            No student added yet{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setshowpopup(true);
              }}
              className="text-blue-600 underline cursor-pointer text-[1.5cqw]"
            >
              add student
            </a>{" "}
          </p>
        )}
      </div>
      {selectedStudent && (
        <CardPopup
          student={selectedStudent}
          closePopup={() => setSelectedStudent(null)}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
