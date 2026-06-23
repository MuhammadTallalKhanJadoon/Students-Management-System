import React, { useState } from "react";
import Navbar from "./componenets/navbar";
import Hero from "./componenets/hero";
import Addstudentspopup from "./componenets/addstudentspopup";


const App = () => {

const [showpopup, setshowpopup] = useState(false)
const [data, setdata] = useState({
  name:'',
  father:'',
  image: null,
  
})
 return (
    <div >
      <Navbar setshowpopup={setshowpopup}/>

      <Hero />

       {showpopup && 
        <Addstudentspopup setshowpopup={setshowpopup} />
      }
      
    </div>
  );
};

export default App;
