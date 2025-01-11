"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  // NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["What is Owndr?", "How it works?", "FAQ"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="backdrop-saturate-10">
      <NavbarContent>
        <NavbarBrand>
          <img
            src="/owndr-high-resolution-logo-transparent.svg"
            alt="company-logo"
            width={280}
            height={280}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden md:hidden"
      />
      {/* <NavbarContent className="gap-4 sm:hidden xs:hidden" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-sm">
            What is Owndr?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-sm">
            How it works?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-sm">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
