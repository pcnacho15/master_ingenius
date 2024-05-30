import { Button } from "@nextui-org/react";
import { CheckIcon } from "../../icons/CheckIcon";

export const Nosotros = () => {
  return (
    <>
      <section className="mt-28 max-w-full px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center pb-7">
            <h2
              className="text-3xl font-bold uppercase mb-5 pb-5 relative text-naranja-logo-100 
              before:content-[''] before:absolute before:block before:w-28 before:h-[1px] 
            before:bg-slate-200 before:bottom-[1px] before:left-[calc(50% - 60px)] before:right-[39%] sm:before:right-[41%] md:before:right-[44%] lg:before:right-[46.1%]
              after:content-[''] after:absolute after:block after:w-[40px] after:h-[3px] after:bg-naranja-logo-100 
              after:bottom-0 after:left-[calc(50% - 20px)] after:right-[47%] md:after:right-[49%]"
            >
              Nosotros
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg leading-8 text-gray-600 dark:text-gray-200">
            <div className="col-span-1">
              <p>
                En{" "}
                <span className="text-naranja-logo-200 font-semibold">
                  Master Ingenius
                </span>
                , nos dedicamos a dar vida a tus proyectos arquitectónicos con
                un enfoque innovador y meticuloso.{" "}
                <span className="text-naranja-logo-200 font-semibold">
                  Somos expertos en el ámbito de la construcción, remodelación y
                  diseño arquitectónico
                </span>
                , ofreciendo una gama completa de servicios que incluyen
                acabados personalizados, mantenimiento especializado de pisos de
                madera, diseño de interiores para hogares y espacios
                comerciales, así como la creación de ambientes únicos y
                funcionales.
              </p>
              <ul className="list-none mt-5 grid gap-3">
                <li className="pl-7 relative">
                  <i className="absolute left-0 top-1 text-xl text-naranja-logo-100">
                    <CheckIcon />
                  </i>
                  Implementamos procesos de mejora continua en todas las áreas
                  de operación para aumentar la eficiencia y reducir los tiempos
                  de entrega.
                </li>
                <li className="pl-7 relative">
                  <i className="absolute left-0 top-1 text-xl text-naranja-logo-100">
                    <CheckIcon />
                  </i>
                  Desarrollamos y mantenemos un riguroso sistema de control de
                  calidad que garantice que todos los proyectos cumplan con los
                  más altos estándares de la industria.{" "}
                </li>
                <li className="pl-7 relative">
                  <i className="absolute left-0 top-1 text-xl text-naranja-logo-100">
                    <CheckIcon />
                  </i>
                  Capacitamos continuamente al personal para asegurar que estén
                  al tanto de las últimas técnicas y tecnologías en construcción
                  y remodelación.
                </li>
              </ul>
            </div>
            <div className="col-span-1 pt-4 lg:pt-0">
              <p>
                Con un compromiso inquebrantable con la calidad y la excelencia
                en cada proyecto, nuestro equipo altamente capacitado trabaja en
                estrecha colaboración contigo para convertir tus ideas en
                realidad. Confía en nosotros para transformar tus espacios en
                experiencias únicas que perduren en el tiempo.
              </p>
              <Button
                color="warning"
                variant="shadow"
                size="lg"
                className="text-white mt-5 font-semibold tracking-tight inline-block pb-[0.5px]"
              >
                Habla con nosotros
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
