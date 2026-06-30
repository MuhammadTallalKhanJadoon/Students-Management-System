import Addstudents from "./addstudents";
import Logo from "./logo";
import Search from "./searchbar";

const Navbar = ({ setshowpopup, dark, setDark, search, setSearch }) => {
  return (
    <div className="dark:bg-slate-900 dark:border-b-4 dark:shadow-[0_0_2cqw_rgba(0,0,0)] dark:border-black backdrop-blur-sm fixed z-20 w-full px-[2cqw] flex justify-around items-center bg-[#1E3A8A]/80 text-white">
      <Logo />
      <Search search={search} setSearch={setSearch} />

      <Addstudents setshowpopup={setshowpopup} dark={dark} setDark={setDark} />
    </div>
  );
};

export default Navbar;
