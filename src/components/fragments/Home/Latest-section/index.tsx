import { Button } from "@nextui-org/react";
import { NavLink } from "react-router";
import { FaCircleCheck, FaCommentDots, FaCircleXmark } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import ProgressBar from "@/components/elements/Progress";
import { popular_dummy } from "@/utils/contants";
import useStore, { setIsCommentOpen } from "@/stores/global";

export default function Index() {
  const isCommentOpenHandler = useStore(setIsCommentOpen);

  return (
    <div className="flex flex-col mb-12 px-36 sm:px-8 xs:px-8">
      <div className="flex justify-between items-start md:flex-col md:gap-2 sm:flex-col sm:gap-2 xs:flex-col xs:gap-2">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-[#103f66]"></div>
            <h2 className="font-semibold text-2xl">Latest Feed</h2>
          </div>
          <h5 className="sm:text-xs xs:text-xs">
            Stay updated with the latest posts, updates, and activities
            happening right now. Explore what's trending and never miss a beat.
          </h5>
        </div>
        <div className="mt-2">
          <NavLink
            to="/feed"
            className="text-sm bg-[#ea598e] text-white rounded-lg px-4 py-1 font-semibold hover:opacity-40 duration-300"
          >
            See all &#8594;
          </NavLink>
        </div>
      </div>
      <div className="mt-4 flex gap-6 items-center justify-center md:flex-wrap sm:flex-wrap xs:flex-wrap">
        {popular_dummy.map((item) => (
          <div className="w-48 flex flex-col gap-2">
            {/* Image */}
            <img
              src={item.img_src}
              alt={item.img_alt}
              width={100}
              height={100}
              className="w-48 h-36 rounded-xl object-cover"
            />

            {/* Overlay Content */}
            <div>
              <div className="flex items-center gap-4">
                <NavLink
                  to={`/profile/${item.author
                    .replace(/[\s-]/g, "")
                    .toLowerCase()}`}
                  className="font-semibold text-xs hover:opacity-40 duration-300"
                >
                  {item.author}
                </NavLink>
                <span className="text-xs text-slate-400">
                  {item.created_at}
                </span>
              </div>
              <NavLink
                to={`/destination/${item.place_name
                  .replace(/[\s-]/g, "")
                  .toLowerCase()}`}
                className="hover:opacity-40 duration-300 flex items-center gap-1 underline underline-offset-4 text-[#0077b6] my-1"
              >
                <IoLocationSharp size={12} />
                <span className="text-xs font-semibold">{item.place_name}</span>
              </NavLink>
              <h2 className="text-lg font-semibold sm:text-base xs:text-base">
                {item.title}
              </h2>
              <h5 className="text-sm sm:text-xs xs:text-xs">{item.desc}</h5>
              <div className="mt-6">
                <ProgressBar />
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs">
                  <FaCircleCheck />
                </Button>
                <Button className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs">
                  <FaCircleXmark />
                </Button>
                <Button
                  onPress={() => isCommentOpenHandler("1")}
                  className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs"
                >
                  <FaCommentDots />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
