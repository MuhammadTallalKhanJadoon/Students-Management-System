import React, { useState } from "react";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/hero";
import Addstudentspopup from "./componenets/addstudentspopup";
import Studentcard from "./componenets/studentcard";

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
      <div className="[container-type:inline-size] flex flex-wrap gap-[3cqw] p-[5cqw] ">
  {storedata.map((student, index) => (
    <Studentcard 
      key={index}
      storedata={student}
    />
  ))}
</div>
    </div>
  );
};

export default App;
