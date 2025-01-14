import Feed from "@/components/fragments/Feed-section";
import Sidebar from "@/components/elements/Sidebar";

export default function index() {
  return (
    <div>
      <Sidebar>
        <Feed />
      </Sidebar>
    </div>
  );
}
