import { useEffect } from "react";
import { FacebookIcon } from "../../../icons/FacebookIcon";

// aos animation
import AOS from "aos";
import "aos/dist/aos";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export const Servicios = () => {

    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <>
      <section
        id="servicios"
        className="bg-section-bg dark:bg-neutral-950 mt-32 transition-all ease-in-out duration-400"
      >
        <div data-aos="fade-up">
          <div className="text-center pb-[30px] py-20 px-5 lg:px-48">
            <h2
              className="text-3xl font-bold uppercase mb-5 pb-5 relative text-naranja-logo-200 before:content-[''] before:absolute before:block before:w-28 before:h-[1px] 
            before:bg-slate-200 before:bottom-[1px] before:left-[calc(50% - 60px)] before:right-[39%] sm:before:right-[41%] md:before:right-[44%] lg:before:right-[46.1%]
              after:content-[''] after:absolute after:block after:w-[40px] after:h-[3px] after:bg-naranja-logo-100 
              after:bottom-0 after:left-[calc(50% - 20px)] after:right-[47%] md:after:right-[49%]"
            >
              Servicios
            </h2>
            <p className="mb-0 mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              En Master Ingenius, nos especializamos en transformar tus ideas en
              realidades tangibles. Ofrecemos una{" "}
              <span className="text-naranja-logo-100 font-semibold">
                amplia gama de servicios
              </span>{" "}
              de construcción y remodelación, diseñados para{" "}
              <span className="text-naranja-logo-100 font-semibold">
                satisfacer todas tus necesidades
              </span>{" "}
              con la máxima calidad y profesionalismo. Nuestro compromiso es
              brindar{" "}
              <span className="text-naranja-logo-100 font-semibold">
                soluciones innovadoras
              </span>{" "}
              y personalizadas que superen tus expectativas, asegurando siempre
              la{" "}
              <span className="text-naranja-logo-100 font-semibold">
                excelencia en cada detalle
              </span>{" "}
              . A continuación, te presentamos nuestros principales servicios:
            </p>
          </div>

          <div className="grid gap-6 grid-cols-3 place-content-center py-20 px-10 md:px-10 lg:px-32 mt-5">
            <div
              className="col-span-3 md:col-span-1 flex items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7 shadow-none transition-all ease-in-out duration-400 hover:translate-y-[-10px] hover:shadow-lg"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Your day your way
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    Your checklist for better sleep
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src="https://nextui.org/images/card-example-5.jpeg"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src={`/src/assets/simbolo.jpg`}
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">Master Ingenius</p>
                      <p className="text-tiny text-white/60">
                        Rediseño de imagen de fachada
                      </p>
                    </div>
                  </div>
                  <Button
                    radius="full"
                    size="sm"
                  >
                    Ver más
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
