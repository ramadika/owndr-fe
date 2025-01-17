import { top_listed_dummy } from "@/utils/contants";

export default function Index() {
  return (
    <div className="py-12">
      <div>
        <h2 className="font-semibold underline underline-offset-8">
          Explore Destinations
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {top_listed_dummy.map((item) => (
          <div className="flex items-center gap-2">
            <img
              src={item.img_src}
              alt={item.img_alt}
              height={100}
              width={100}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h5 className="text-sm font-semibold">{item.place_name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
