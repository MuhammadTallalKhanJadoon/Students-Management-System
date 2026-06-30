import { SunMedium, Moon } from "lucide-react";

const Mode = ({ dark, setDark }) => {
  return (
    <div className="flex justify-around border rounded-full p-2 gap-3">
      <SunMedium
        onClick={() => setDark(false)}
        className={`cursor-pointer ${
          !dark ? "text-yellow-500" : "text-gray-400"
        }`}
      />

      <Moon
        onClick={() => setDark(true)}
        className={`cursor-pointer ${
          dark ? "text-blue-500" : "text-gray-400"
        }`}
      />
    </div>
  );
};

export default Mode;