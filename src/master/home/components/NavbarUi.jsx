import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ToggleButton } from "../helpers/ToggleButton";

export const NavbarUi = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Nosotros", "Clientes", "Servicios", "Contacto"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-none"
    >
      <NavbarContent
        className="sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden pr-3"
        justify="start"
      >
        <NavbarBrand>
          <img
            src={`/src/assets/logo.jpg`}
            alt="Master Ingenius"
            className="h-9"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="start"
      >
        <NavbarBrand>
          <img
            src={`/src/assets/logo.jpg`}
            alt="Master Ingenius"
            className="h-9"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              href="#"
              className="text-gray-900 dark:text-gray-100 font-semibold dark:hover:text-naranja-logo-100 hover:text-naranja-logo-100"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ToggleButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full inline-flex items-center justify-start rounded-md p-2.5 font-semibold leading-7 text-gray-900 hover:text-naranja-logo-100 dark:text-gray-200 hover:bg-gray-100 dark:hover:text-naranja-logo-100 dark:hover:bg-fondo-dark"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
