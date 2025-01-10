"use client";

import React from "react";
import { FaCircleCheck, FaCommentDots, FaCircleXmark } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import ProgressBar from "@/src/components/elements/Progress";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 font-sans">
      <div className="w-full">
        <img
          src="https://awsimages.detik.net.id/community/media/visual/2021/06/18/rammang-rammang_169.jpeg?w=1200"
          alt="avatar"
          height={1200}
          width={1200}
          className="w-full h-36 object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-5xl font-semibold tracking-wider">
          Rammang - Rammang
        </h2>
        <h4 className="text-sm text-gray-500 leading-6">
          Rammang-Rammang Hamlet and Kampung Berua Hamlet, Salenrang Village,
          Bontoa Subdistrict, Maros Regency, South Sulawesi, Indonesia.
        </h4>
        <span className="text-xs text-slate-400">Joined Jun 2020</span>
        <div className="grid grid-cols-2 divide-x">
          <div className="flex flex-col items-center justify-center text-slate-600 px-2">
            <span className="text-lg font-semibold">75</span>
            <span className="text-sm">Score</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-600 px-2">
            <span className="text-lg font-semibold">10</span>
            <span className="text-sm">Tag</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <hr />
      </div>
      <div className="flex flex-col gap-6 w-8/12">
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
      </div>
    </div>
  );
}
