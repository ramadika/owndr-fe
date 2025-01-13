import { NavLink } from "react-router";

export default function Index() {
  const popular_dummy = [
    {
      img_src:
        "https://awsimages.detik.net.id/community/media/visual/2021/06/18/rammang-rammang_169.jpeg?w=1200",
      img_alt: "rammang_-_rammang",
      name: "Rammang - rammang",
      nation: "Indonesia",
      score: 85,
      rank: 1,
      type: "Lake",
    },
    {
      img_src:
        "https://blog.antavaya.com/wp-content/uploads/2021/01/10-Tempat-Wisata-Banyuwangi-yang-Paling-Indah-dan-Wajib-Dikunjungi.jpg",
      img_alt: "jawatan_-_benculuk",
      name: "Jawatan Benculuk",
      nation: "Indonesia",
      score: 80,
      rank: 2,
      type: "Garden",
    },
    {
      img_src:
        "https://getlost.id/wp-content/uploads/2022/04/@malthezimakoff.jpg",
      img_alt: "tumpak_-_sewu",
      name: "Tumpak sewu",
      nation: "Indonesia",
      score: 70,
      rank: 3,
      type: "Waterfall",
    },
    {
      img_src:
        "https://www.fivestars-thailand.com/images/article/display/a_1709046726.jpg",
      img_alt: "phuket",
      name: "Phuket",
      nation: "Thailand",
      score: 68,
      rank: 4,
      type: "Beach",
    },
    {
      img_src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ju3-qZKk7MBO36JsYd7fPmfSZmFlRM8gHw&s",
      img_alt: "desert_-_safari",
      name: "Desert Safari",
      nation: "United Arab Emirates",
      score: 65,
      rank: 5,
      type: "Desert",
    },
  ];

  return (
    <div className="flex flex-col mb-12 px-36">
      <div>
        <h2 className="font-semibold text-2xl">
          Discover the most sought-after destinations curated by our community!
        </h2>
        <h5>
          Our Top Listed Destinations are ranked based on destination scores,
          reflecting the collective insights of travelers just like you.
        </h5>
      </div>
      <div className="mt-4 flex gap-6 items-center justify-center">
        {popular_dummy.map((item) => (
          <div className="relative w-48 h-48">
            {/* Image */}
            <img
              src={item.img_src}
              alt={item.img_alt}
              className="w-48 h-48 rounded-xl object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between items-center bg-black bg-opacity-40 rounded-xl text-white">
              <div className="flex flex-col items-center mt-12">
                <span className="font-semibold text-base">#{item.rank}</span>
                <h5 className="text-sm font-semibold">{item.name}</h5>
                <span className="text-xs">{item.nation}</span>
              </div>
              <div className="mt-4 mb-1 flex justify-between items-center gap-12">
                <div>
                  <span className="font-semibold text-sm">{item.score}</span>
                  <span className="text-xs font-light">&nbsp;score</span>
                </div>
                {/* <span className="text-xs">&nbsp;rating score</span> */}
                <span className="text-xs">&nbsp;{item.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <NavLink
          to="/destination"
          className="border rounded-xl px-6 py-2 border-[#103f66] text-sm hover:opacity-40 duration-300"
        >
          Load more destination
        </NavLink>
      </div>
    </div>
  );
}
