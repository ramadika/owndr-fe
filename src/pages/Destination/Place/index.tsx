import Navbar from "@/components/elements/Navbar-content";
import Donate from "@/components/fragments/Support-us/Floating-button";
import DestinationInformation from "@/components/fragments/Destination-Profile/Header-section";
import DestinationPosts from "@/components/fragments/Destination-Profile/Content-section";

export default function Index() {
  return (
    <div>
      <Donate />
      <Navbar />
      <div className="flex flex-col py-16 px-12 mt-12 gap-8 sm:px-8 xs:px-0 sm:mt-0 xs:mt-0">
        <DestinationInformation />
        <div className="w-full">
          <hr />
        </div>
        <DestinationPosts />
      </div>
    </div>
  );
}
