import React, { useEffect, useState } from "react";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/hero";
import Addstudentspopup from "./componenets/addstudentspopup";
import Studentcard from "./componenets/studentcard";
import Footer from "./componenets/footer";
import CardPopup from "./componenets/cardpopup";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

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

 const [storedata, setstoredata] = useState(() => {
  const savedStudents = localStorage.getItem("students");
  return savedStudents ? JSON.parse(savedStudents) : [];
});

const [selectedStudent, setSelectedStudent] = useState(null);
const [dark, setDark] = useState(false);
const [search, setSearch] = useState("");
const [editStudent, setEditStudent] = useState(null);

useEffect(() => {
  localStorage.setItem("students", JSON.stringify(storedata));
}, [storedata]);

  const filteredStudents = storedata.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  const deleteStudent = (studentToDelete) => {
  setstoredata((prev) =>
    prev.filter((student) => student !== studentToDelete)
  );

  setSelectedStudent(null);
};
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
  if (editStudent) {
    setstudentformdata(editStudent);
  }
}, [editStudent]);

useEffect(() => {
  console.log("storedata:", storedata);
}, [storedata]);



const exportToExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(file, "students.xlsx");
};


  return (
    <div>
      <Navbar
        setshowpopup={setshowpopup}
        dark={dark}
        setDark={setDark}
        search={search}
        setSearch={setSearch}
      />

      {/* Hero */}
      {search.trim() === "" && <Hero />}

      {/* Add Student Popup */}
      {showpopup && (
    <Addstudentspopup
  setshowpopup={setshowpopup}
  studentformdata={studentformdata}
  setstudentformdata={setstudentformdata}
  setstoredata={setstoredata}
  storedata={storedata}
  editStudent={editStudent}
  setEditStudent={setEditStudent}
/>

      )}

      {/* Normal Student Cards */}
      {search.trim() === "" && (
        <div
          className={`[container-type:inline-size] min-h-[20cqw] rounded-2xl border-blue-900 border-1 flex flex-wrap gap-[3cqw] p-[5cqw] ${
            storedata.length > 0
              ? "justify-center border-none"
              : "justify-center items-center"
          }`}
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
              </a>
            </p>
          )}
        </div>
      )}

      {/* Student Popup */}
     {selectedStudent && (
  <CardPopup
  student={selectedStudent}
  exportToExcel={() => exportToExcel(storedata)}
  closePopup={() => setSelectedStudent(null)}
  deleteStudent={deleteStudent}
  editStudent={(student) => {
    setEditStudent(student);
    setshowpopup(true);
    setSelectedStudent(null);
  }}
/>
)}

      {/* Search Results */}
      {search.trim() !== "" && (
        <div className="fixed top-[8cqw] left-0 right-0 bottom-0 z-10 bg-[#F8FAFC] dark:bg-slate-950 overflow-y-auto">
          <div className="flex flex-wrap justify-center gap-[3cqw] p-[5cqw]">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((a, index) => (
                <Studentcard
                  key={index}
                  storedata={a}
                  onClick={() => setSelectedStudent(a)}
                />
              ))
            ) : (
              <h1 className="text-[3cqw] text-red-500 mt-[10cqw]">
                No Student Found
              </h1>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      {search.trim() === "" && <Footer />}


    </div>
  );
};

export default App;
