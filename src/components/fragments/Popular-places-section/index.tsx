import { NavLink } from "react-router";
import { GiSunglasses } from "react-icons/gi";
import { popular_places_dummy } from "@/utils/contants";

export default function Index() {
  return (
    <div className="relative w-full">
      <div className="absolute flex flex-col items-center justify-center inset-0 text-center z-10 text-white">
        <GiSunglasses size={60} />
        <h2 className="text-4xl font-semibold tracking-wider">Stay Tuned</h2>
        <h5 className="text-lg font-semibold tracking-wide">
          for discover more
        </h5>
      </div>

      <div className="relative flex flex-col mb-12 px-36 blur-lg">
        <div>
          <h2 className="font-semibold text-2xl">
            Discover the most sought-after destinations curated by our
            community!
          </h2>
          <h5>
            Our Top Listed Destinations are ranked based on destination scores,
            reflecting the collective insights of travelers just like you.
          </h5>
        </div>
        <div className="mt-4 flex gap-6 items-center justify-center">
          {popular_places_dummy.map((item) => (
            <div className="relative w-48 h-48">
              {/* Image */}
              <img
                src={item.img_src}
                alt={item.img_alt}
                className="w-48 h-48 rounded-xl object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-between items-center bg-black bg-opacity-40 rounded-xl text-white">
                <div className="flex flex-col items-center mt-12">
                  <span className="font-semibold text-base">#{item.rank}</span>
                  <h5 className="text-sm font-semibold">{item.name}</h5>
                  <span className="text-xs">{item.nation}</span>
                </div>
                <div className="mt-4 mb-1 flex justify-between items-center gap-12">
                  <div>
                    <span className="font-semibold text-sm">{item.score}</span>
                    <span className="text-xs font-light">&nbsp;score</span>
                  </div>
                  {/* <span className="text-xs">&nbsp;rating score</span> */}
                  <span className="text-xs">&nbsp;{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <NavLink
            to="/destination"
            className="border rounded-xl px-6 py-2 border-[#103f66] text-sm hover:opacity-40 duration-300"
          >
            Load more destination
          </NavLink>
        </div>
      </div>
    </div>
  );
}
