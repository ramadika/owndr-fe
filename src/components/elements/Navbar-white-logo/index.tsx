import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { NavLink } from "react-router";
import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";

export default function App() {
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
              src="/owndr-high-resolution-logo-transparent-cropped.svg"
              alt="company-logo"
              width={100}
              height={100}
            />
          </NavLink>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4 text-sm">
          <NavbarItem>
            <NavLink
              color="foreground"
              to="/about"
              className="hover:opacity-40 duration-300"
            >
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
            <NavLink
              aria-current="page"
              href="#"
              className="hover:opacity-40 duration-300"
            >
              Contact us
            </NavLink>
          </NavbarItem> */}
          <NavbarItem isActive>
            <NavLink
              aria-current="page"
              to="#"
              className="hover:opacity-40 duration-300"
            >
              Empower the Community &#129309;
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex underline underline-offset-4 text-sm">
          <NavLink to="#" className="hover:opacity-40 duration-300">
            Already have an account?
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            color="primary"
            to="#"
            className="flex items-center border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300"
          >
            <FaUserCircle />
            &nbsp; Sign up
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
