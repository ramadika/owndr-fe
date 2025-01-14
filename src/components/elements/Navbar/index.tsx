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
    <Navbar>
      <NavbarContent justify="start">
        <NavbarBrand>
          <img
            src="/owndr-high-resolution-logo-transparent-cropped.svg"
            alt="company-logo"
            width={100}
            height={100}
          />
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-4">
          <NavbarItem>
            <Link color="foreground" href="#">
              What is Owndr?
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" href="#">
              FAQ
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex underline underline-offset-4">
          <Link href="#">Already have an account?</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-[#ea598e] text-white rounded-lg py-1 px-4 hover:opacity-40 duration-100"
          >
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
