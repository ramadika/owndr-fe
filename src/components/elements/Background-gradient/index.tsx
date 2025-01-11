/* eslint-disable @typescript-eslint/no-explicit-any */

const BackgroundGradient = ({ children }: any) => {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-b from-[#6087a7] to-white">
      {/* Background SVG */}
      <svg
        viewBox="0 0 512 1024"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            r={1}
            cx={0}
            cy={0}
            id="759c1415-0410-454c-8f7c-9a820de03641"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>

      {/* Children */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default BackgroundGradient;
