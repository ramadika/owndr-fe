export default function index() {
  return (
    <div className="py-12">
      <div>
        <h2 className="font-semibold underline underline-offset-8">
          Top Listed Destination
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <img
            src="https://awsimages.detik.net.id/community/media/visual/2021/06/18/rammang-rammang_169.jpeg?w=1200"
            alt="rammang_-_rammang"
            height={100}
            width={100}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h5 className="text-sm font-semibold">Rammang - rammang</h5>
            <span className="font-semibold text-sm text-default-600">85</span>
            &nbsp;
            <span className="text-xs text-default-600">Destination Score</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <img
            src="https://blog.antavaya.com/wp-content/uploads/2021/01/10-Tempat-Wisata-Banyuwangi-yang-Paling-Indah-dan-Wajib-Dikunjungi.jpg"
            alt="jawatan_-_benculuk"
            height={100}
            width={100}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h5 className="text-sm font-semibold">Jawatan Benculuk</h5>
            <span className="font-semibold text-sm text-default-600">80</span>
            &nbsp;
            <span className="text-xs text-default-600">Destination Score</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <img
            src="https://getlost.id/wp-content/uploads/2022/04/@malthezimakoff.jpg"
            alt="tumpak_-_sewu"
            height={100}
            width={100}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h5 className="text-sm font-semibold">Tumpak Sewu</h5>
            <span className="font-semibold text-sm text-default-600">70</span>
            &nbsp;
            <span className="text-xs text-default-600">Destination Score</span>
          </div>
        </div>
      </div>
    </div>
  );
}
