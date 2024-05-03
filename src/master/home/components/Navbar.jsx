import { Bars3Icon } from "@heroicons/react/24/outline";
import { MobileNavbar } from "./MobileNavbar";
import { useState } from "react";
import { ToggleButton } from "../helpers/ToggleButton";

const navigation = [
  { name: "Nosotros", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Clientes", href: "#" },
  { name: "Contacto", href: "#" },
];

export const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <nav
        className="flex bg-auto mt-auto lg:mt-3 rounded items-center 
        justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-end">
          <a
            href="#"
            className="-m-1.5 p-1.5"
          >
            <img
              className="h-8 w-auto"
              src={`/src/assets/logo.jpg`}
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-bold leading-6 text-gray-900 dark:text-gray-100 dark:hover:text-naranja-logo-100 hover:text-naranja-logo-100"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ToggleButton />
        </div>
      </nav>
      <MobileNavbar
        navigation={navigation}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
};
