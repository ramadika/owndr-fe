import { Button } from "@nextui-org/react";
import { FaCircleCheck, FaCommentDots, FaCircleXmark } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import ProgressBar from "@/components/elements/Progress";
import useStore, { setIsCommentOpen } from "@/stores/global";

export default function Index() {
  const isCommentOpenHandler = useStore(setIsCommentOpen);

  return (
    <div className="flex flex-col gap-4 px-36 mt-8 mb-12 sm:px-8 xs:px-8">
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-[#103f66]"></div>
        <h2 className="font-semibold text-2xl">Featured Highlight</h2>
      </div>
      <div className="flex items-start gap-8 md:flex-col sm:flex-col xs:flex-col">
        <img
          src="https://images.lbc.co.uk/images/670512?width=3537&crop=16_9&signature=fnMovhPozRL5gtbuGuScmXYx0ek="
          alt="traffic_picture"
          className="mt-2 rounded-lg"
          width={480}
          height={480}
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
          <h2 className="text-3xl font-semibold sm:text-xl xs:text-xl">
            Lorem ipsum dolor sit amet
          </h2>
          <h5 className="sm:text-xs xs:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
          <div className="mt-6">
            <ProgressBar />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button className="flex items-center gap-2 rounded-lg border border-[#bbd5b4] text-[#59824e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs">
              <FaCircleCheck />
              Valid
            </Button>
            <Button className="flex items-center gap-2 rounded-lg border border-[#ffafcc] text-[#ea598e] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs">
              <FaCircleXmark />
              Not Valid
            </Button>
            <Button
              onPress={() => isCommentOpenHandler("1")}
              className="flex items-center gap-2 rounded-lg border border-[#acb0b7] text-[#63728c] text-sm px-3 py-2 cursor-pointer hover:opacity-40 duration-300 sm:text-xs xs:text-xs"
            >
              <FaCommentDots />
              Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
