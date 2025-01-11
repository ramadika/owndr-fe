import { IoMdHome, IoMdPeople } from "react-icons/io";
import { MdExplore } from "react-icons/md";

export default function index() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <img
          src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
          alt="avatar"
          height={100}
          width={100}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h2 className="font-semibold">Melissa Denice</h2>
      </div>
      <div className="flex flex-col gap-6 mt-6 pl-4">
        <div className="flex items-center gap-4">
          <IoMdHome />
          Home
        </div>
        <div className="flex items-center gap-4">
          <MdExplore />
          Explore
        </div>
        <div className="flex items-center gap-4">
          <IoMdPeople />
          People
        </div>
      </div>
    </div>
  );
}
