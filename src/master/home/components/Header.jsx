import { Button } from "@nextui-org/react";
import { Navbar } from "./Navbar";
import { PlayIcon } from "../../icons/PlayIcon";
import { NavbarUi } from "./NavbarUi";
import { Banner } from "./Banner";

export const Header = () => {
  return (
    <div className="dark:bg-neutral-900">
      <header className="absolute inset-x-1 top-0 z-50">
        {/* Banner */}
        {/* <Banner /> */}
        {/* <Navbar /> */}
        <NavbarUi />
      </header>
      <div className="isolate px-6 pt-14 lg:pt-28 xl:pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F87E18] to-[#F89E06] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-36 lg:py-20 xl:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-[12px] leading-6 font-semibold text-gray-600 dark:text-gray-400 ring-1 ring-naranja-logo-100/15 hover:ring-naranja-logo-100/20">
              Contácanos para darte un acompañamiento a tus proyectos.{" "}
              <a
                href="#"
                className="font-semibold text-naranja-logo-100"
              >
                <span
                  className="absolute inset-0"
                  aria-hidden="true"
                />
                Habla con nosotros <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
              Únete a esta gran familia, donde hacemos tus sueños realidad
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              En{" "}
              <span className="text-naranja-logo-100 font-semibold">
                Master Ingenius
              </span>
              , nos dedicamos a dar vida a tus proyectos arquitectónicos con un
              enfoque innovador y meticuloso.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                color="warning"
                variant="shadow"
                className="text-sm font-semibold text-white shadow-sm"
              >
                <PlayIcon />
                Ver introducción
              </Button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 dark:hover:text-naranja-logo-100"
              >
                Seguir leyendo <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#F87E18] to-[#F89E06] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
