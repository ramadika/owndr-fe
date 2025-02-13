import { IoClose } from "react-icons/io5"; // Import close icon
import useStore, { setIsLoginOpen } from "@/stores/global";

export default function Index() {
  const isLoginOpenHandler = useStore(setIsLoginOpen);

  return (
    <div className="fixed flex h-4/6 flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-lg max-w-md w-full">
      {/* Close Button */}
      <button
        onClick={() => isLoginOpenHandler(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
      >
        <IoClose size={24} />
      </button>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          alt="owndr-logo"
          src="/owndr-high-resolution-logo-transparent-cropped-blue.svg"
          className="mx-auto h-4 w-8/12"
        />
        <h2 className="mt-4 text-center text-4xl font-bold tracking-tight text-gray-900">
          Welcome back!
        </h2>
        <h5 className="text-sm">Select a login method</h5>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className=" px-6 sm:px-12">
          <div className="mt-6 flex flex-col gap-4">
            <a
              href="#"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                  fill="#EA4335"
                />
                <path
                  d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                  fill="#4285F4"
                />
                <path
                  d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                  fill="#34A853"
                />
              </svg>
              <span className="text-sm/6 font-semibold">
                Continue with Google
              </span>
            </a>

            <a
              href="#"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1877F2"
                  d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073c0 5.992 4.388 10.951 10.125 11.853V15.47H7.078v-3.396h3.047v-2.59c0-3.007 1.791-4.687 4.533-4.687 1.313 0 2.687.235 2.687.235v2.965h-1.513c-1.49 0-1.953.922-1.953 1.875v2.203h3.328l-.532 3.396h-2.796v8.456C19.612 23.024 24 18.065 24 12.073z"
                />
              </svg>

              <span className="text-sm/6 font-semibold">
                Continue with Facebook
              </span>
            </a>

            <a
              href="#"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-apple"
                viewBox="0 0 16 16"
              >
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
              </svg>

              <span className="text-sm/6 font-semibold">
                Continue with Apple
              </span>
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don't have an account?&nbsp;
          <a
            href="#"
            className="font-semibold text-[#103f66] hover:opacity-40 duration-300"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
