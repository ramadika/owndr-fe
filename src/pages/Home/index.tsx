import Hero from "@/components/fragments/Hero-section";
import Feed from "@/components/fragments/Feed-section";

export default function index() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 font-sans">
      <Hero />
      <Feed />
    </div>
  );
}
