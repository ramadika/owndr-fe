/* eslint-disable @typescript-eslint/no-explicit-any */

const LandingPage = ({ children }: any) => {
  return (
    <div className="relative w-full h-[50vh]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/2169880-uhd_3840_2160_30fps (1).mp4"
        autoPlay
        loop
        muted
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full text-white bg-black/50">
        {children}
      </div>
    </div>
  );
};

export default LandingPage;
