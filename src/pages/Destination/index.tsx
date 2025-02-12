import Navbar from "@/components/elements/Navbar-content";
import Donate from "@/components/fragments/Support-us/Floating-button";
import Header from "@/components/fragments/Destination/Hero-section";
import ListPlaces from "@/components/fragments/Destination/List-of-places-section";

export default function Index() {
  return (
    <div>
      <Donate />
      <Navbar />
      <div className="flex flex-col px-16 py-16">
        <Header />
        <ListPlaces />
      </div>
    </div>
  );
}
