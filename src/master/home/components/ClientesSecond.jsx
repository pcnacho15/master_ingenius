export const ClientesSecond = () => {
  return (
    <>
      <section
        id="clients"
        className="py-3 px-0 text-center dark:bg-neutral-800"
      >
        <div className="container">
          <div
            className="whitespace-nowrap grid grid-cols-4 gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5 gap-0 px-8"
            data-aos="zoom-in"
          >
            <div className="flex justify-center items-center col-span-2 object-contain lg:col-span-1 ">
              <img
                src={`/src/assets/clientes/sura.png`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block py-4 px-0 grayscale
                hover:grayscale-0 scale-125 hover:scale-150 max-w-20"
              />
            </div>
            <div className="flex justify-center items-center object-contain lg:col-span-1 ">
              <img
                src={`/src/assets/clientes/pablo-tobon.png`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block py-4 px-0 grayscale
                hover:grayscale-0 scale-125 hover:scale-150 max-w-48"
              />
            </div>
            <div className="flex justify-center items-center object-contain lg:col-span-1 ">
              <img
                src={`/src/assets/clientes/smartfit.svg`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block py-4 px-0 grayscale
                hover:grayscale-0 hover:scale-125 max-w-24"
              />
            </div>
            <div className="flex justify-center items-center col-span-2 sm:col-start-2 lg:col-span-1">
              <img
                src={`/src/assets/clientes/itm.png`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block py-4 px-0 grayscale
                hover:grayscale-0 scale-125 hover:scale-150 max-w-36"
              />
            </div>
            <div className="flex justify-center items-center col-span-2 col-start-2 object-contain sm:col-start-auto lg:col-span-1">
              <img
                src={`/src/assets/clientes/velez.png`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block py-4 px-0 grayscale
                hover:grayscale-0 scale-125 hover:scale-150 w-28"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
