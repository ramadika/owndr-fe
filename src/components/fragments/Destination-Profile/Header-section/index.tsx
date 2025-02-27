import { IoLocationSharp } from "react-icons/io5";
import { FaSpa } from "react-icons/fa";
import { FaDirections } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 font-sans sm:px-8 xs:px-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <FaSpa size={80} />
        <h2 className="text-5xl font-bold tracking-widest text-center sm:text-3xl xs:text-3xl">
          Rammang - Rammang
        </h2>
        <span className="text-xs text-slate-400">Geopark</span>
        <div className="flex items-center gap-1">
          <IoLocationSharp />
          <h4 className="text-sm text-gray-500 leading-6 sm:text-xs xs:text-xs">
            South Sulawesi, Indonesia.
          </h4>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="border border-[#103f66] p-3 rounded-full">
          <FaDirections color="#103f66" />
        </div>
        <div className="border border-[#103f66] p-3 rounded-full">
          <CiShare2 color="#103f66" />
        </div>
      </div>
    </div>
  );
}
