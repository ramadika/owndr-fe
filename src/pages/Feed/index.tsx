import Sidebar from "@/components/elements/Sidebar";
import FeedContent from "@/components/fragments/Feed-content";
import TopNav from "@/components/fragments/Top-listed-navigation";

export default function index() {
  return (
    <div>
      <Sidebar>
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
      </Sidebar>
    </div>
  );
}
