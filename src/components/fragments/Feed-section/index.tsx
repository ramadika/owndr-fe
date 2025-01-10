"use client";

import {
  FaCircleCheck,
  FaCommentDots,
  FaCircleXmark,
  FaPhotoFilm,
} from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsTranslate } from "react-icons/bs";
import { IoMdHome, IoMdPeople } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import ProgressBar from "@/components/elements/Progress";
import { useFeed } from "./hooks";

export default function Index() {
  const { activeTab, tabs, setActiveTab } = useFeed();

  return (
    <div className="flex items-start justify-center gap-4 py-8">
      <div className="flex flex-col gap-2 px-2 w-2/12">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
            alt="avatar"
            height={100}
            width={100}
            className="w-12 h-12 rounded-full object-cover"
          />
          <h2 className="font-semibold">Melissa Denice</h2>
        </div>
        <div className="flex flex-col gap-6 mt-6 pl-4">
          <div className="flex items-center gap-4">
            <IoMdHome />
            Home
          </div>
          <div className="flex items-center gap-4">
            <MdExplore />
            Explore
          </div>
          <div className="flex items-center gap-4">
            <IoMdPeople />
            People
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 w-6/12 border-x px-12">
        <div className="flex flex-col items-center sticky">
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
        </div>
        <div className="w-full border border-[#E6DFF1] rounded-xl py-4 px-8 flex flex-col gap-2 shadow-md">
          <div className="relative flex items-center">
            <div className="relative w-full max-w-xl">
              <input
                id="posting-name"
                name="posting-name"
                type="text"
                placeholder="What's happening?"
                className="w-full pl-8 pr-20 py-4 text-black bg-white border-0 rounded-xl shadow-sm ring-1 ring-inset ring-[#E6DFF1] focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
              />
            </div>
            <button
              type="submit"
              className="absolute right-2 rounded-full bg-[#9a4adb] px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#B389D1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <RiSendPlaneFill />
            </button>
            <div className="absolute right-12 rounded-xl px-2 py-2.5 font-semibold hover:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <FaPhotoFilm color="#84dcc6" />
            </div>
          </div>
        </div>
        <div className="w-full border border-[#E6DFF1] rounded-xl py-4 px-8 flex flex-col gap-2 shadow-md">
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            <h4 className="font-semibold">Johan Redd</h4>
            <span className="text-xs text-slate-400">Few minutes ago</span>
          </div>
          <div className="flex items-center gap-1 underline underline-offset-4 text-[#0077b6]">
            <IoLocationSharp />
            <h2 className="text-sm font-semibold">Rammang - Rammang</h2>
          </div>
          <div className="gap-2 flex flex-col tracking-wide text-default-700">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <div className="flex justify-between w-fit gap-2 items-center border rounded-full px-4 py-2 text-xs border-slate-800">
              <span>Translate</span>
              <BsTranslate />
            </div>
            <img
              src="https://images.lbc.co.uk/images/670512?width=3537&crop=16_9&signature=fnMovhPozRL5gtbuGuScmXYx0ek="
              alt="traffic_picture"
              className="mt-2"
              width={360}
              height={360}
            />
          </div>
          <div className="mt-2">
            <ProgressBar />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-2 rounded-lg bg-[#dfffd6] text-[#59824e] text-sm px-3 py-2">
              <FaCircleCheck />
              Valid
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#ffafcc] text-[#ea598e] text-sm px-3 py-2">
              <FaCircleXmark />
              Not Valid
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#edf2fb] text-[#63728c] text-sm px-3 py-2">
              <FaCommentDots />
              Comment
            </div>
          </div>
        </div>
        <div className="w-full border border-[#E6DFF1] rounded-xl py-4 px-8 flex flex-col gap-2 shadow-md">
          <div className="flex items-center gap-2">
            {/* <img src="" alt="" /> */}
            <h4 className="font-semibold">Francis White</h4>
            <span className="text-xs text-slate-400">2 minutes ago</span>
          </div>
          <div className="flex items-center gap-1 underline underline-offset-4 text-[#0077b6]">
            <IoLocationSharp />
            <h2 className="text-sm font-semibold">Rammang - Rammang</h2>
          </div>
          <div className="gap-4 flex flex-col">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </h2>
            <div className="flex justify-between w-fit gap-2 items-center border rounded-full px-4 py-2 text-xs border-slate-800">
              <span>Translate</span>
              <BsTranslate />
            </div>
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2021/01/02/road-trip_169.jpeg?w=600&q=90"
              alt="traffic_picture"
              width={360}
              height={360}
            />
          </div>
          <div className="mt-2">
            <ProgressBar />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-2 rounded-lg bg-[#dfffd6] text-[#59824e] text-sm px-3 py-2">
              <FaCircleCheck />
              Valid
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#ffafcc] text-[#ea598e] text-sm px-3 py-2">
              <FaCircleXmark />
              Not Valid
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#edf2fb] text-[#63728c] text-sm px-3 py-2">
              <FaCommentDots />
              Comment
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 w-2/12">
        <div>
          <h2 className="font-semibold underline underline-offset-8">
            Top Listed Destination
          </h2>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2021/06/18/rammang-rammang_169.jpeg?w=1200"
              alt="rammang_-_rammang"
              height={100}
              width={100}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h5 className="text-sm font-semibold">Rammang - rammang</h5>
              <span className="font-semibold text-sm text-default-600">85</span>
              &nbsp;
              <span className="text-xs text-default-600">
                Destination Score
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <img
              src="https://blog.antavaya.com/wp-content/uploads/2021/01/10-Tempat-Wisata-Banyuwangi-yang-Paling-Indah-dan-Wajib-Dikunjungi.jpg"
              alt="jawatan_-_benculuk"
              height={100}
              width={100}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h5 className="text-sm font-semibold">Jawatan Benculuk</h5>
              <span className="font-semibold text-sm text-default-600">80</span>
              &nbsp;
              <span className="text-xs text-default-600">
                Destination Score
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <img
              src="https://getlost.id/wp-content/uploads/2022/04/@malthezimakoff.jpg"
              alt="tumpak_-_sewu"
              height={100}
              width={100}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h5 className="text-sm font-semibold">Tumpak Sewu</h5>
              <span className="font-semibold text-sm text-default-600">70</span>
              &nbsp;
              <span className="text-xs text-default-600">
                Destination Score
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
