import BackgroundGradient from "@/components/elements/Background-gradient";
// import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function index() {
  return (
    <BackgroundGradient>
      <div className="h-screen flex py-12 px-36 justify-start">
        {/* <img
          src="/owndr-high-resolution-logo-transparent.svg"
          alt="company-logo"
          width={120}
          height={120}
        /> */}
        <div className="flex flex-col items-start justify-center gap-1">
          <span className="text-4xl font-bold tracking-wide ">
            Find your truth wander
          </span>

          <span className="text-sm text-[#4F4F4F]">
            {/* Explore your trips with Confidence at Your Fingertips */}
            Experience the freedom to explore with confidence. Our platform
            empowers you to plan trips effortlessly, find destinations that
            resonate with your style, and make every journey a true reflection
            of who you are
          </span>
        </div>
        {/*  <div className="w-full mt-6">
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
                  placeholder="Where is your destiny?"
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
        </div>*/}
      </div>
    </BackgroundGradient>
  );
}
