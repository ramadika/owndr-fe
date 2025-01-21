// import Sidebar from "@/components/elements/Sidebar";
import FeedContent from "@/components/fragments/Feed-content";
import FeedForm from "@/components/fragments/Form-feed-section";
import Discover from "@/components/fragments/Discover-feed-section";
import Destination from "@/components/fragments/Destination-feed-section";
import Navbar from "@/components/fragments/Navbar-feed-section";
import Donate from "@/components/fragments/Donate-floating-section";

export default function index() {
  return (
    <div>
      <Donate />
      <Navbar />
      <div className="flex flex-col px-16 py-8">
        <div className="flex items-start justify-center gap-12">
          <div className="w-9/12">
            <FeedForm />
          </div>
          <div className="w-3/12">
            <Destination />
          </div>
        </div>
        <Discover />
        <FeedContent />
      </div>
    </div>
  );
}

{
  /* <div className="flex items-start justify-center gap-4 px-12">
<div className="flex flex-col gap-2 px-2 w-2/12">
    <ProfileNav />
  </div>
<div className="flex flex-col pr-12">
  <FeedContent />
</div>
<div className="flex flex-col gap-2 px-2 w-3/12">
  <TopNav />
</div>
</div> */
}
