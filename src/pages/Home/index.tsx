import Hero from "@/components/fragments/Home-hero-section";
// import Feed from "@/components/fragments/Feed-section";
import ExploreDestination from "@/components/fragments/Home-explore-destination-section";
import PopularFeed from "@/components/fragments/Home-popular-section";
import LatestFeed from "@/components/fragments/Home-latest-section";
import Footer from "@/components/elements/Footer";
// import Navbar from "@/components/elements/Navbar";
import Donate from "@/components/fragments/Donate-floating-section";

export default function Index() {
  return (
    <div>
      <Donate />
      <div className="h-full font-sans flex flex-col gap-6">
        {/* <Navbar /> */}
        <Hero />
        <PopularFeed />
        <LatestFeed />
        <ExploreDestination />
        <Footer />
        {/* <Feed /> */}
      </div>
    </div>
  );
}
