import Addstudents from './addstudents';
import Logo from './logo';
import Search from './searchbar';


const Navbar = ({setshowpopup}) => {
  return (
    <div className="backdrop-blur-sm fixed z-20 w-full px-[2cqw] flex justify-around items-center bg-[#1E3A8A]/80 text-white">

      <Logo/>
      <Search/>
      <Addstudents setshowpopup={setshowpopup}/>
   

    </div>
  )
}

export default Navbar