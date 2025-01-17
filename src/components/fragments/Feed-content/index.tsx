// import { useFeed } from "../hooks";
import {
  FaCircleCheck,
  FaCommentDots,
  FaCircleXmark,
  FaPhotoFilm,
} from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import ProgressBar from "@/components/elements/Progress";
import { feed_dummy_data, discover_dummy } from "@/utils/contants";

export default function Index() {
  // const { activeTab, tabs, setActiveTab } = useFeed();

  return (
    <div className="flex flex-col gap-4 py-12">
      <div
        className="w-full border border-[#E6DFF1] rounded-3xl py-12 px-24 flex flex-col gap-2 shadow-md"
        style={{
          backgroundImage: `linear-gradient(grey, grey), url('https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?q=80&w=3021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="relative flex flex-col items-center gap-4">
          <div>
            <h2 className="text-3xl text-white font-semibold tracking-wide">
              Tell us your story here
            </h2>
          </div>
          <form
            className="relative w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              id="posting-name"
              name="posting-name"
              type="text"
              placeholder="What's happening?"
              className="w-full pl-8 pr-20 py-4 text-black bg-white border-0 rounded-full shadow-sm ring-1 ring-inset ring-[#E6DFF1] focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
            />
            <button
              type="submit"
              className="absolute flex items-center gap-1 right-4 top-1/2 -translate-y-1/2 rounded-2xl bg-[#103f66] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-40 duration-300"
            >
              Post
              <RiSendPlaneFill />
            </button>
            <div className="absolute right-28 top-1/2 -translate-y-1/2 rounded-xl px-2 py-2.5 font-semibold hover:opacity-40 duration-300 cursor-pointer">
              <FaPhotoFilm color="#84dcc6" />
            </div>
          </form>
        </div>
      </div>
      {/* <div className="flex flex-col items-center sticky my-4">
        <div className="flex w-full justify-around text-gray-500">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-center ${
                activeTab === tab
                  ? "text-black font-semibold border-b-2 border-[#a594f9]"
                  : "border-b-2 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-full border-t border-gray-300 " />
      </div> */}
      <div className="flex flex-col gap-4 mt-4 my-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-6 bg-[#103f66]"></div>
          <h2 className="font-semibold text-2xl">Discover More</h2>
        </div>
        <div className="flex items-start justify-center gap-4 w-full">
          <div className="flex flex-col gap-2 w-8/12">
            <img
              src="https://images.lbc.co.uk/images/670512?width=3537&crop=16_9&signature=fnMovhPozRL5gtbuGuScmXYx0ek="
              alt="traffic_picture"
              className="rounded-lg w-[36rem] h-72 object-cover"
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
          <div className="flex flex-col gap-4 w-8/12">
            {discover_dummy.map((item) => (
              <div className="flex justify-start gap-2 w-fit">
                <div>
                  <img
                    src={item.img_src}
                    alt={item.img_alt}
                    className="w-48 h-40 rounded-lg object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <h4 className="font-semibold text-xs">{item.author}</h4>
                    <span className="text-xs text-slate-400">
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
                    <span className="text-xs font-semibold">
                      {item.place_name}
                    </span>
                  </a>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
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
      {feed_dummy_data.map((item) => (
        <div className="w-full border border-[#E6DFF1] rounded-xl py-4 px-8 flex flex-col gap-2 shadow-md mb-4">
          <img
            src={item.img_src}
            alt={item.img_alt}
            className="rounded-lg object-cover w-auto h-60"
            width={100}
            height={100}
          />
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            <h4 className="font-semibold text-xs">{item.author}</h4>
            <span className="text-xs text-slate-400">{item.created_at}</span>
          </div>
          <h2 className="text-3xl font-semibold">{item.title}</h2>
          <a
            target="_blank"
            rel="noopener"
            href={item.place_url}
            className="hover:opacity-40 duration-300 flex items-center gap-1 underline underline-offset-4 text-[#0077b6]"
          >
            <IoLocationSharp />
            <span className="text-sm font-semibold">{item.place_name}</span>
          </a>
          <div className="gap-2 flex flex-col tracking-wide text-default-700">
            <h2>{item.desc}</h2>
            <div className="flex justify-between w-fit gap-2 items-center border rounded-full px-4 py-2 text-xs border-slate-800">
              <span>Translate</span>
              <BsTranslate />
            </div>
          </div>
          <div className="mt-2">
            <ProgressBar />
          </div>
          <div className="flex items-center gap-2 mt-2">
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
      ))}
    </div>
  );
}
