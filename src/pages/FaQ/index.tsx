import FaQContent from "@/components/fragments/FaQ-content-section";
import Navbar from "@/components/elements/Navbar-blue-logo";
import Footer from "@/components/elements/Footer";

export default function Index() {
  return (
    <div>
      <div className="pt-8">
        <Navbar />
      </div>
      <FaQContent />
      <Footer />
    </div>
  );
}
