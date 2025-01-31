export default function index() {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-36 h-36 object-cover rounded-full bg-gray-50"
      />
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Philip Well</h2>
        <h5 className="text-xs">Joined March 2025 &#9702; Indonesia</h5>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="border rounded-full px-4 py-1 flex justify-center items-center gap-2 w-36 shadow-md">
          <span className="font-semibold text-lg">170</span>
          <span className="text-xs">Posts</span>
        </div>
        <div className="border rounded-full px-4 py-1 flex justify-center items-center gap-2 w-36 shadow-md">
          <span className="font-semibold text-lg">89</span>
          <span className="text-xs">Reactions</span>
        </div>
        <div className="border rounded-full px-4 py-1 flex justify-center items-center gap-2 w-36 shadow-md">
          <span className="font-semibold text-lg">50</span>
          <span className="text-xs">Profile Score</span>
        </div>
      </div>
    </div>
  );
}
