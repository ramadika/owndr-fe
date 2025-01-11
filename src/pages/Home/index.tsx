import Hero from "@/components/fragments/Hero-section";
import Feed from "@/components/fragments/Feed-section";
import Popular from "@/components/fragments/Popular-section";
// import Navbar from "@/components/elements/Navbar";

export default function index() {
  return (
    <div className="h-full font-sans flex flex-col gap-4">
      {/* <Navbar /> */}
      <Hero />
      <Popular />
      <Feed />
    </div>
  );
}
