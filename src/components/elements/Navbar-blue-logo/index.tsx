import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar isBlurred={false}>
      <NavbarContent justify="start">
        <NavbarBrand>
          <img
            src="/owndr-high-resolution-logo-transparent-cropped-blue.svg"
            alt="company-logo"
            width={100}
            height={100}
          />
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
              href="/faq"
              className="hover:opacity-40 duration-300"
            >
              FAQ
            </Link>
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
        <NavbarItem className="lg:flex underline underline-offset-4 text-sm">
          <Link href="#" className="hover:opacity-40 duration-300">
            Already have an account?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="border border-[#ffafcc] text-[#ea598e] rounded-lg py-1 px-4 hover:opacity-40 duration-300"
          >
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
