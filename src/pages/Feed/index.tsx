import FeedContent from "@/components/fragments/Feed/Content-section";
import Hero from "@/components/fragments/Feed/Hero-section";
import Discover from "@/components/fragments/Feed/Discover-section";
import Destination from "@/components/fragments/Feed/Explore-destination-section";
import Navbar from "@/components/elements/Navbar-content";
import Donate from "@/components/fragments/Support-us/Floating-button";
import Comment from "@/components/fragments/Feed/Comment-section";
import useStore, { isContentFormOpen, isCommentOpen } from "@/stores/global";
import Modal from "@/components/elements/Modal-dialog";
import ContentForm from "@/components/fragments/Feed/Form-section";

export default function Index() {
  const isContentForm = useStore(isContentFormOpen);
  const isComment = useStore(isCommentOpen);

  return (
    <div>
      <Donate />
      <Navbar />
      <div className="flex flex-col px-16 py-8 mt-20">
        {isComment !== "" && (
          <Modal>
            <Comment />
          </Modal>
        )}
        {isContentForm && (
          <Modal>
            <ContentForm />
          </Modal>
        )}
        <div className="flex items-start justify-center gap-12">
          <div className="w-9/12">
            <Hero />
          </div>
          <div className="w-3/12">
            <Destination />
          </div>
        </div>
        <Discover />
        <FeedContent />
      </div>
    </div>
  );
}

{
  /* <div className="flex items-start justify-center gap-4 px-12">
<div className="flex flex-col gap-2 px-2 w-2/12">
    <ProfileNav />
  </div>
<div className="flex flex-col pr-12">
  <FeedContent />
</div>
<div className="flex flex-col gap-2 px-2 w-3/12">
  <TopNav />
</div>
</div> */
}
