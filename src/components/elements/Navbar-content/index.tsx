import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
} from "@nextui-org/react";
import { NavLink } from "react-router";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

export default function App() {
  return (
    <Navbar className="py-8 backdrop-blur-2xl cursor-pointer">
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
              aria-current="page"
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
            <NavLink to="#" className="hover:opacity-40 duration-300">
              Empower the Community &#129309;
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-1 text-sm border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300">
          <FaRegPenToSquare />
          <NavLink to="#" className="hover:opacity-40 duration-300">
            Create a story
          </NavLink>
        </NavbarItem>
        <NavbarContent as="div" justify="end">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
