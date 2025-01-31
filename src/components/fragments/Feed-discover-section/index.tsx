import { FaCircleCheck, FaCommentDots, FaCircleXmark } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import ProgressBar from "@/components/elements/Progress";
import { discover_dummy } from "@/utils/contants";

export default function Index() {
  return (
    <div className="flex flex-col gap-4 mt-4 my-8">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-[#103f66]"></div>
        <h2 className="font-semibold text-2xl">Discover More</h2>
      </div>
      <div className="flex items-start justify-center gap-4 w-full">
        <div className="flex flex-col gap-2">
          <img
            src="https://images.lbc.co.uk/images/670512?width=3537&crop=16_9&signature=fnMovhPozRL5gtbuGuScmXYx0ek="
            alt="traffic_picture"
            className="rounded-lg w-[38rem] h-72 object-cover"
            width={100}
            height={100}
          />
          <div>
            <div className="flex items-center gap-4">
              <h4 className="font-semibold text-xs">Johan Redd</h4>
              <span className="text-xs text-slate-400">Few minutes ago</span>
            </div>
            <a
              target="_blank"
              rel="noopener"
              href="https://maps.app.goo.gl/bGXXT29tBaiCL6dR7"
              className="hover:opacity-40 duration-300 flex items-center gap-1 underline underline-offset-4 text-[#0077b6] my-1"
            >
              <IoLocationSharp size={12} />
              <span className="text-xs font-semibold">Rammang-rammang</span>
            </a>
            <h2 className="text-3xl font-semibold">
              Lorem ipsum dolor sit amet
            </h2>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
            <div className="mt-6">
              <ProgressBar />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                <FaCircleCheck />
                Valid
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                <FaCircleXmark />
                Not Valid
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                <FaCommentDots />
                Comment
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap w-8/12">
          {discover_dummy.map((item) => (
            <div className="flex justify-start gap-2 w-72">
              <div>
                <img
                  src={item.img_src}
                  alt={item.img_alt}
                  className="w-40 h-40 rounded-lg object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <h4 className="font-semibold text-[0.5rem]">{item.author}</h4>
                  <span className="text-[0.5rem] text-slate-400">
                    {item.created_at}
                  </span>
                </div>
                <a
                  target="_blank"
                  rel="noopener"
                  href={item.place_url}
                  className="hover:opacity-40 duration-300 flex items-center gap-1 underline underline-offset-4 text-[#0077b6] my-1"
                >
                  <IoLocationSharp size={12} />
                  <span className="text-[0.5rem] font-semibold">
                    {item.place_name}
                  </span>
                </a>
                <h2 className="text-base font-semibold">{item.title}</h2>
                <div className="mt-2">
                  <ProgressBar />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                    <FaCircleCheck />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                    <FaCircleXmark />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300">
                    <FaCommentDots />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
