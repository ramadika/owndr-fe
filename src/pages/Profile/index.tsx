import Sidebar from "@/components/elements/Sidebar";
import ProfileInformation from "@/components/fragments/Profile/Information-section";
import ProfilePosts from "@/components/fragments/Profile/Content-section";

export default function index() {
  return (
    <Sidebar>
      <div className="flex flex-col py-16">
        <ProfileInformation />
        <div className="my-8">
          <hr />
        </div>
        <ProfilePosts />
      </div>
    </Sidebar>
  );
}
