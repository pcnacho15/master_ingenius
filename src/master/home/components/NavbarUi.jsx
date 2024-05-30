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
  Button
} from "@nextui-org/react";
import { ToggleButton } from "../helpers/ToggleButton";
import { useTheme } from "../../hooks/useTheme";

export const NavbarUi = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { handleChangeDarkMode, dark } = useTheme();

  const menuItems = ["Nosotros", "Servicios", "Contacto", "Trabaja con nosotros"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="dark:bg-neutral-900 mt-1 rounded-sm fixed"
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
            src={dark ? `/src/assets/logo_white.png` : `/src/assets/logo.jpg`}
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
            src={dark ? `/src/assets/logo_white.png` : `/src/assets/logo.jpg`}
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
        <NavbarItem className="hidden md:block">
          <Button
            color="warning"
            variant="shadow"
            size="sm"
            className="text-white text-sm pb-[0.5px] font-semibold"
          >
            Contáctanos
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ToggleButton
            handleChangeDarkMode={handleChangeDarkMode}
            dark={dark}
          />
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
        <NavbarItem className="w-full inline-flex items-center justify-start rounded-md p-2.5">
          <Button
            color="warning"
            variant="shadow"
            size="sm"
            className="font-semibold text-base leading-7 text-white pb-1"
          >
            Contáctanos
          </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
