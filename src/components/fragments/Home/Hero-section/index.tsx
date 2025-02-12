import { NavLink } from "react-router";
// import BackgroundGradient from "@/components/elements/Background-gradient";
import BackgroundVideo from "@/components/elements/Background-video";
import Navbar from "@/components/elements/Navbar-white-logo";
// import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function index() {
  return (
    <BackgroundVideo>
      <div className="pt-8">
        <Navbar />
      </div>
      <div className="flex px-36 justify-start mt-24">
        <div className="flex flex-col items-start justify-center gap-4">
          <span className="text-4xl font-bold tracking-wide">
            Find your truth wander
          </span>
          <span className="text-sm">
            Experience the freedom to explore with confidence. Our platform
            empowers you to plan trips effortlessly, find destinations that
            resonate with your style, and make every journey a true reflection
            of who you are
          </span>
          <NavLink
            to="/feed"
            className="bg-[#ea598e] text-white rounded-lg px-4 py-1 hover:opacity-40 duration-300"
          >
            Explore Posts &#8594;
          </NavLink>
        </div>
      </div>
    </BackgroundVideo>
  );
}

{
  /* <div className="w-full mt-6">
          <form className="mx-auto max-w-xl">
            <label htmlFor="location-name" className="sr-only">
              Post
            </label>
            <div className="relative flex items-center">
              <div className="relative w-full max-w-xl">
                <input
                  id="location-name"
                  name="location-name"
                  type="text"
                  placeholder="What's happening?"
                  className="w-full pl-12 pr-20 py-4 text-black bg-white border-0 rounded-full shadow-sm ring-1 ring-inset ring-[#E6DFF1] focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
                />
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-gray-400">
                  <HiMiniMagnifyingGlass />
                </div>
              </div>
              <button
                type="submit"
                className="absolute right-2 rounded-full bg-[#9a4adb] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#B389D1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Find me
              </button>
            </div> 
          </form>
        </div> */
}
