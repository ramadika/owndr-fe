import AboutContent from "@/components/fragments/About/Content-section";
import Navbar from "@/components/elements/Navbar-blue-logo";
import Footer from "@/components/elements/Footer";

export default function index() {
  return (
    <div>
      <div className="pt-8">
        <Navbar />
      </div>
      <AboutContent />
      <Footer />
    </div>
  );
}
