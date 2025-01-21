import Hero from "@/components/fragments/Hero-section";
// import Feed from "@/components/fragments/Feed-section";
// import PopularPlaces from "@/components/fragments/Popular-places-section";
import PopularFeed from "@/components/fragments/Popular-feed-section";
import LatestFeed from "@/components/fragments/Latest-feed-section";
import Footer from "@/components/elements/Footer";
// import Navbar from "@/components/elements/Navbar";
import Donate from "@/components/fragments/Donate-floating-section";

export default function index() {
  return (
    <div>
      <Donate />
      <div className="h-full font-sans flex flex-col gap-4">
        {/* <Navbar /> */}
        <Hero />
        <PopularFeed />
        <LatestFeed />
        {/* <PopularPlaces /> */}
        <Footer />
        {/* <Feed /> */}
      </div>
    </div>
  );
}
