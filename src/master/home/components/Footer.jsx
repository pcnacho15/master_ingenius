import React from "react";
import { RightIcon } from "../../icons/RightIcon";
import { InstagramIcon } from "../../icons/InstagramIcon";
import { FacebookIcon } from "../../icons/FacebookIcon";
import { WhatsAppIcon } from "../../icons/WhatsAppIcon";
import { Tiktok } from "../../icons/Tiktok";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-sm bg-gray-200 dark:bg-neutral-900 mt-32 transition-all ease-in-out duration-400"
    >
      <div className="pt-[60px] pb-[30px] px-7">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-14">
            <div className="col-span-1 mb-[30px]">
              <h3 className="text-2xl mb-[10px] py-[2px] uppercase font-semibold text-naranja-logo-200">
                Master Ingenius
              </h3>
              <p className="text-sm leading-6 text-gray-500">
                Calle 26 # 43-51 <br />
                Medellin - Antioquia <br />
                Colombia <br />
                <br />
                <strong>Cel:</strong> +57 3016756267
                <br />
                <strong>Correo:</strong> info@masteringenius.com
                <br />
                <strong>NIT:</strong> 901821443 - 0
                <br />
              </p>
            </div>
            <div className="col-span-1 mb-[30px]">
              <h4 className="text-base font-bold text-naranja-logo-100 relative pb-3">
                Enlaces Útiles
              </h4>
              <ul className="list-none p-0 m-0">
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Inicio
                  </a>
                </li>
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Servicios
                  </a>
                </li>
                {/* <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Terms of service
                  </a>
                </li> */}
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3 hover:no-underline hover:text-naranja-logo-100"
                  >
                    Contáctanos
                  </a>
                </li>
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3 hover:no-underline hover:text-naranja-logo-100"
                  >
                    Trabaja con nosotros
                  </a>
                </li>
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3 hover:no-underline hover:text-naranja-logo-100"
                  >
                    Políticas de privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 mb-[30px]">
              <h4 className="text-base font-bold text-naranja-logo-100 relative pb-3">
                Nuestros Servicios
              </h4>
              <ul className="list-none p-0 m-0">
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Diseño Web
                  </a>
                </li>
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Desarrollo Web
                  </a>
                </li>
                {/* <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Product Management
                  </a>
                </li> */}
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3  hover:no-underline hover:text-naranja-logo-100"
                  >
                    Marketing
                  </a>
                </li>
                <li className="py-[10px] px-0 flex items-center first:pt-0">
                  <i className="pr-[2px] text-naranja-logo-100 text-lg leading-3 font-bold">
                    <RightIcon />
                  </i>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 inline-block leading-3 hover:no-underline hover:text-naranja-logo-100"
                  >
                    Diseño Gráfico
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 mb-[30px]">
              <h4 className="text-base font-bold text-naranja-logo-100 relative pb-3">
                Nuestras Redes Sociales
              </h4>
              <p className="text-base">
                Síguenos para que estés enterad@ de nuestros servicios y ofertas
                para tus proyectos
              </p>
              <div className="mt-3 flex">
                <a
                  href="https://www.tiktok.com/@master_ingenius?_t=8mysrG7MZpW&_r=1"
                  target="_blank"
                  className="text-lg inline-block bg-naranja-logo-100 text-white leading-3 py-[10px] px-0 mr-2 rounded-full text-center w-9 h-9 transition-all duration-400 ease-in-out hover:bg-naranja-logo-200 hover:no-underline hover:scale-125"
                >
                  <i className="ml-[1px] grid place-content-center">
                    <Tiktok />
                  </i>
                </a>
                <a
                  href="https://www.facebook.com/share/nsBh92kZiWtgQ6Zy/?mibextid=LQQJ4d"
                  target="_blank"
                  className="text-lg inline-block bg-naranja-logo-100 text-white leading-3 py-[10px] px-0 mr-2 rounded-full text-center w-9 h-9 transition-all duration-400 ease-in-out hover:bg-naranja-logo-200 hover:no-underline hover:scale-125"
                >
                  <i className="ml-[1px] grid place-content-center">
                    <FacebookIcon />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/master_ingenius?igsh=ejBpYTQ3NzNpMXgz"
                  target="_blank"
                  className="text-lg inline-block bg-naranja-logo-100 text-white leading-3 py-[10px] px-0 mr-2 rounded-full text-center w-9 h-9 transition-all duration-400 ease-in-out hover:bg-naranja-logo-200 hover:no-underline hover:scale-125"
                >
                  <i className="ml-[1px] grid place-content-center">
                    <InstagramIcon />
                  </i>
                </a>
                <a
                  href="https://wa.link/chigtk"
                  target="_blank"
                  className="text-lg inline-block bg-naranja-logo-100 text-white leading-3 py-[10px] px-0 mr-2 rounded-full text-center w-9 h-9 transition-all duration-400 ease-in-out hover:bg-naranja-logo-200 hover:no-underline hover:scale-125"
                >
                  <i className="ml-[1px] grid place-content-center">
                    <WhatsAppIcon />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-[30px] text-gray-900 text-sm text-center px-3 bg-gray-300 dark:bg-neutral-950 dark:text-white transition-all ease-in-out duration-200">
        <div className="font-semibold">
          &copy; Copyright{" "}
          <strong>
            <span>Master Ingenius Holding S.A.S</span>
          </strong>
          . Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};
