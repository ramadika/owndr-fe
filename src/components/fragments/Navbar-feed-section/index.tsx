import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
} from "@nextui-org/react";
import { FaRegPenToSquare } from "react-icons/fa6";

export default function App() {
  return (
    <Navbar className="py-4 backdrop-blur-2xl cursor-pointer">
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link
            color="foreground"
            href="/"
            className="hover:opacity-40 duration-300"
          >
            <img
              src="/owndr-high-resolution-logo-transparent-cropped-blue.svg"
              alt="company-logo"
              width={100}
              height={100}
            />
          </Link>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4 text-sm">
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="hover:opacity-40 duration-300"
            >
              What is Owndr?
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              aria-current="page"
              href="#"
              className="hover:opacity-40 duration-300"
            >
              FAQ
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              aria-current="page"
              href="#"
              className="hover:opacity-40 duration-300"
            >
              Contact us
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              aria-current="page"
              href="#"
              className="hover:opacity-40 duration-300"
            >
              Support us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center gap-1 text-sm border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300">
          <FaRegPenToSquare />
          <Link href="#" className="hover:opacity-40 duration-300">
            Create a story
          </Link>
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
