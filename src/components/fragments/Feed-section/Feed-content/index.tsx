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

export default function Index() {
  // const { activeTab, tabs, setActiveTab } = useFeed();
  const feed_dummy_data = [
    {
      id: 0,
      author: "Johan Redd",
      created_at: "40 minutes ago",
      place_name: "Rammang-rammang",
      place_url: "https://maps.app.goo.gl/bGXXT29tBaiCL6dR7",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img_src:
        "https://asset.kompas.com/crops/SAeslG8sDsn_wAP4IRw0jGb9oaI=/0x1:864x577/1200x800/data/photo/2023/08/13/64d88aceba0c7.png",
      img_alt: "rammang_-_rammang",
    },
    {
      id: 1,
      author: "Thamrin",
      created_at: "44 minutes ago",
      place_name: "Kuta Beach",
      place_url: "https://maps.app.goo.gl/xT1JsYAv73C6Ufy5A",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img_src:
        "https://images.unsplash.com/photo-1663060097347-7be568852b90?q=80&w=2250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img_alt: "kuta_beach",
    },
    {
      id: 2,
      author: "Burhan",
      created_at: "45 minutes ago",
      place_name: "Musi River",
      place_url: "https://maps.app.goo.gl/W93cRGdeEDLuFBj16",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img_src:
        "https://media.istockphoto.com/id/1500771900/photo/boat-are-docking-below-of-ampera-bridge-palembang-transportation-at-musi-river.jpg?s=612x612&w=0&k=20&c=6XdKc-svmcMEp7ajhA4xwnkQLX6K1BHgOpFegCYO7Bk=",
      img_alt: "musi_river",
    },
    {
      id: 3,
      author: "Amin faiz",
      created_at: "47 minutes ago",
      place_name: "Tumpak Sewu Waterfall",
      place_url: "https://maps.app.goo.gl/fx8RYTBw13xFWhrV8",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img_src:
        "https://images.unsplash.com/photo-1703854138568-b0991721b139?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img_alt: "tumpak_sewu_waterfall",
    },
    {
      id: 4,
      author: "Marco alex",
      created_at: "55 minutes ago",
      place_name: "Blue Flames, Ijen",
      place_url: "https://maps.app.goo.gl/xkFyYt4L4L7ZJzJv9",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img_src:
        "https://www.yukbanyuwangi.co.id/wp-content/uploads/2019/07/The-Stunning-Blue-Flame-in-the-Crater-of-Mount-Ijen.jpg",
      img_alt: "ijen",
    },
  ];
  return (
    <div className="flex flex-col gap-4 py-12">
      <div className="relative flex items-center w-full">
        <form className="relative w-full " onSubmit={(e) => e.preventDefault()}>
          <input
            id="posting-name"
            name="posting-name"
            type="text"
            placeholder="What's happening?"
            className="w-full pl-8 pr-20 py-4 text-black bg-white border-0 rounded-xl shadow-sm ring-1 ring-inset ring-[#E6DFF1] focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#103f66] px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#B389D1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <RiSendPlaneFill />
          </button>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 rounded-xl px-2 py-2.5 font-semibold hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <FaPhotoFilm color="#84dcc6" />
          </div>
        </form>
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
      {feed_dummy_data.map((item) => (
        <div className="w-full border border-[#E6DFF1] rounded-xl py-4 px-8 flex flex-col gap-2 shadow-md">
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            <h4 className="font-semibold text-xs">{item.author}</h4>
            <span className="text-xs text-slate-400">{item.created_at}</span>
          </div>
          <h2 className="text-3xl font-semibold">{item.title}</h2>
          <img
            src={item.img_src}
            alt={item.img_alt}
            className="rounded-lg object-cover w-80 h-48"
            width={100}
            height={100}
          />
          <div className="flex items-center gap-1 underline underline-offset-4 text-[#0077b6]">
            <IoLocationSharp />
            <a
              target="_blank"
              rel="noopener"
              href={item.place_url}
              className="hover:opacity-40 duration-100"
            >
              <span className="text-sm font-semibold">{item.place_name}</span>
            </a>
          </div>
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
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2">
              <FaCircleCheck />
              Valid
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2">
              <FaCircleXmark />
              Not Valid
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2">
              <FaCommentDots />
              Comment
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
