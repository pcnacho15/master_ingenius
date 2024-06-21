import { ServiciosItem } from "./";

import { servicios } from './'

export const Servicios = () => {
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
            {
              servicios.map( (servicio, index) => (
                  
                  <ServiciosItem key={`${servicio.titulo}-${index}`} servicio={ servicio }/>

              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};
