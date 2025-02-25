import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router";
import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import useStore, { setIsLoginOpen, setIsSignupOpen } from "@/stores/global";

export default function App() {
  const isLoginOpenHandler = useStore(setIsLoginOpen);
  const isSignupOpenHandler = useStore(setIsSignupOpen);

  return (
    <Navbar isBlurred={false}>
      <NavbarContent justify="start">
        <NavbarBrand>
          <NavLink
            color="foreground"
            to="/"
            className="hover:opacity-40 duration-300"
          >
            <img
              src="/owndr-high-resolution-logo-transparent-cropped-blue.svg"
              alt="company-logo"
              width={100}
              height={100}
            />
          </NavLink>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4 text-sm">
          <NavbarItem>
            <NavLink to="/about" className="hover:opacity-40 duration-300">
              What is Owndr?
            </NavLink>
          </NavbarItem>
          <NavbarItem isActive>
            <NavLink
              to="/faq"
              className="flex items-center hover:opacity-40 duration-300"
            >
              FAQ&nbsp;
              <FaQuestionCircle />
            </NavLink>
          </NavbarItem>
          {/* <NavbarItem isActive>
              <Link
                aria-current="page"
                href="#"
                className="hover:opacity-40 duration-300"
              >
                Contact us
              </Link>
            </NavbarItem> */}
          <NavbarItem isActive>
            <NavLink to="#" className="hover:opacity-40 duration-300">
              Empower the Community &#129309;
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex underline underline-offset-4 text-sm">
          <Button
            onPress={() => isLoginOpenHandler(true)}
            className="hover:opacity-40 duration-300"
          >
            Already have an account?
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            onPress={() => isSignupOpenHandler(true)}
            className="flex items-center border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300"
          >
            <FaUserCircle />
            &nbsp; Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
