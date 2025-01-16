import { NavLink } from "react-router";
import { FaCircleCheck, FaCommentDots, FaCircleXmark } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import ProgressBar from "@/components/elements/Progress";

export default function Index() {
  const popular_dummy = [
    {
      img_src:
        "https://images.unsplash.com/photo-1490676940747-c906c30765d6?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img_alt: "img_-_news",
      author: "John Redd",
      created_at: "5 minutes ago",
      place_name: "Rammang-rammang",
      place_url: "https://maps.app.goo.gl/bGXXT29tBaiCL6dR7",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      score: 10,
    },
    {
      img_src:
        "https://images.unsplash.com/photo-1707538322543-c934e7ba49ec?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img_alt: "img_-_news",
      author: "Francis White",
      created_at: "10 minutes ago",
      place_name: "Rammang-rammang",
      place_url: "https://maps.app.goo.gl/bGXXT29tBaiCL6dR7",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      score: 17,
    },
    {
      img_src:
        "https://images.unsplash.com/photo-1721661431611-ba5518f20d83?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img_alt: "img_-_news",
      author: "Greg",
      created_at: "15 minutes ago",
      place_name: "Rammang-rammang",
      place_url: "https://maps.app.goo.gl/bGXXT29tBaiCL6dR7",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      score: 20,
    },
    {
      img_src:
        "https://images.unsplash.com/photo-1494947356691-434358cea5a3?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img_alt: "img_-_news",
      author: "Mustofa",
      created_at: "15 minutes ago",
      place_name: "Rammang-rammang",
      place_url: "https://maps.app.goo.gl/bGXXT29tBaiCL6dR7",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      score: 30,
    },
    {
      img_src:
        "https://images.unsplash.com/photo-1674194134311-9ff1d21cd4f1?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      img_alt: "img_-_news",
      author: "Ibrahim",
      created_at: "25 minutes ago",
      place_name: "Rammang-rammang",
      place_url: "https://maps.app.goo.gl/bGXXT29tBaiCL6dR7",
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      score: 40,
    },
  ];
  return (
    <div className="flex flex-col mb-12 px-36">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-[#103f66]"></div>
            <h2 className="font-semibold text-2xl">Latest Feed</h2>
          </div>
          <h5>
            Stay updated with the latest posts, updates, and activities
            happening right now. Explore what's trending and never miss a beat.
          </h5>
        </div>
        <div>
          <NavLink
            to="/feed"
            className="text-sm text-[#ea598e] font-semibold hover:opacity-40 duration-300"
          >
            See all &#8594;
          </NavLink>
        </div>
      </div>
      <div className="mt-4 flex gap-6 items-center justify-center">
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
                <span className="text-xs font-semibold">{item.place_name}</span>
              </a>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <h5 className="text-sm">{item.desc}</h5>
              <div className="mt-6">
                <ProgressBar />
              </div>
              <div className="flex items-center gap-2 mt-4">
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
  );
}
