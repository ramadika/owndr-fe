export default function index() {
  const top_listed_dummy = [
    {
      _id: 0,
      place_name: "Rammang - rammang",
      place_score: 85,
      img_src:
        "https://awsimages.detik.net.id/community/media/visual/2021/06/18/rammang-rammang_169.jpeg?w=1200",
      img_alt: "rammang_-_rammang",
    },
    {
      _id: 1,
      place_name: "Jawatan Benculuk",
      place_score: 80,
      img_src:
        "https://blog.antavaya.com/wp-content/uploads/2021/01/10-Tempat-Wisata-Banyuwangi-yang-Paling-Indah-dan-Wajib-Dikunjungi.jpg",
      img_alt: "jawatan_-_benculuk",
    },
    {
      _id: 2,
      place_name: "Tumpak Sewu",
      place_score: 78,
      img_src:
        "https://getlost.id/wp-content/uploads/2022/04/@malthezimakoff.jpg",
      img_alt: "tumpak_-_sewu",
    },
  ];
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
