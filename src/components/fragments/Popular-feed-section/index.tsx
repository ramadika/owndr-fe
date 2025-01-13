import { FaCircleCheck, FaCommentDots, FaCircleXmark } from "react-icons/fa6";
import ProgressBar from "@/components/elements/Progress";

export default function index() {
  return (
    <div className="flex px-36 items-start gap-8 mb-12">
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
        <h2 className="text-3xl font-semibold">Lorem ipsum dolor sit amet</h2>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
        <div className="mt-6">
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
    </div>
  );
}
