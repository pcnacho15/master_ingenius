const links = [
  { name: "Nuestros servicios", href: "#" },
  { name: "Cotizaciones", href: "#" },
  { name: "Asesorías", href: "#" },
];
const stats = [
  { name: "Clientes", value: "50+" },
  { name: "Supervisión en cada proyecto", value: "24/7" },
  { name: "Garantía en cada servicio", value: "Ilimitada" },
];

export const Nosotros = () => {
  return (
    <div className="px-auto lg:px-16 mt-36 xl:mt-auto">
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-none sm:rounded shadow-xl mb-10">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#F87E18] to-[#F89E06] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#F87E18] to-[#F89E06] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-14">
          <div className="grid grid-cols-1 gap-0 xl:grid-cols-2 xl:gap-x-4">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-naranja-logo-200 sm:text-6xl">
                Master Ingenius
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                En{" "}
                <span className="text-naranja-logo-200">Master Ingenius</span>,
                nos dedicamos a dar vida a tus proyectos arquitectónicos con un
                enfoque innovador y meticuloso .{" "}
                <span className="text-naranja-logo-200">
                  Somos expertos en el ámbito de la construcción, remodelación y
                  diseño arquitectónico
                </span>
                , ofreciendo una gama completa de servicios que incluyen
                acabados personalizados, mantenimiento especializado de pisos de
                madera, diseño de interiores para hogares y espacios
                comerciales,{" "}
                <span className="text-naranja-logo-200">
                  así como la creación de ambientes únicos y funcionales.
                </span>{" "}
                Con un compromiso inquebrantable con la calidad y la excelencia
                en cada proyecto , nuestro equipo altamente capacitado trabaja
                en estrecha colaboración contigo para convertir tus ideas en
                realidad. Confía en nosotros para{" "}
                <span className="text-naranja-logo-200">
                  transformar tus espacios en experiencias únicas que perduren
                  en el tiempo
                </span>
                .
              </p>
            </div>
            <img
              src={`/src/assets/minimal3d.png`}
              className="hidden xl:block"
            />
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                >
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
