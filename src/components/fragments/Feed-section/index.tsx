"use client";

// import ProfileNav from "./Profile-navigation";
import FeedContent from "./Feed-content";
import TopNav from "./Top-listed-navigation";

export default function Index() {
  return (
    <div className="flex items-start justify-center gap-4">
      {/* <div className="flex flex-col gap-2 px-2 w-2/12">
        <ProfileNav />
      </div> */}
      <div className="flex flex-col gap-6 px-12 w-9/12 border-r">
        <FeedContent />
      </div>
      <div className="flex flex-col gap-2 px-2 w-3/12">
        <TopNav />
      </div>
    </div>
  );
}
