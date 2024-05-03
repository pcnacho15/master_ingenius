export const Clientes = () => {
  return (
    <div className="py-24 mt-auto lg:mt-36 xl:mt-auto sm:py-10 mb-5 ">
      <div className="mx-auto max-w-5xl px-6 lg:px-16">
        <h2 className="text-center text-base font-semibold leading-8 text-gray-900 dark:text-gray-300">
          Contamos con la confianza de nuestros
          <span className="text-naranja-logo-100 px-2">
            clientes más reconocidos
          </span>
          a nivel nacional
        </h2>
        <div className="overflow-hidden w-full">
          <div className="whitespace-nowrap animate-scroll mx-auto mt-5 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={`/src/assets/clientes/velez.png`}
              alt="Transistor"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={`/src/assets/clientes/smartfit.svg`}
              alt="Reform"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={`/src/assets/clientes/sura.png`}
              alt="Tuple"
            />
            <img
              className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={`/src/assets/clientes/pablo-tobon.png`}
              alt="Tuple"
            />
            <img
              className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={`/src/assets/clientes/itm.svg`}
              alt="Tuple"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
