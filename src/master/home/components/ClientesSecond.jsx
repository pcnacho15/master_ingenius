export const ClientesSecond = () => {
  return (
    <>
      <section
        id="clients"
        className="py-3 px-0 text-center bg-gray-200 dark:bg-neutral-950"
      >
        <div className="container">
          <div
            className="whitespace-nowrap grid grid-cols-2 gap-x-8 gap-y-3 sm:max-w-none sm:ml-8 sm:gap-x-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3 gap-0 px-8"
            data-aos="zoom-in"
          >
            <div className="flex justify-center items-center col-span-1 object-contain lg:col-span-1 ">
              <img
                src={`/src/assets/clientes/sura.png`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block px-0 filter grayscale-50
                hover:grayscale-0 scale-125 hover:scale-150 max-w-20"
              />
            </div>
            <div className="flex justify-center items-center col-span-1 object-contain lg:col-span-1 ">
              <img
                src={`/src/assets/clientes/smartfit.svg`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block px-0 grayscale-50
                hover:grayscale-0 hover:scale-125 max-w-24"
              />
            </div>
            <div className="flex justify-center items-center col-span-2 sm:col-span-1 object-contain lg:col-span-1 ">
              <img
                src={`/src/assets/clientes/pablo-tobon.png`}
                alt="Cliente"
                className="max-w[45%] transition-all duration-400 ease-in-out inline-block px-0 grayscale-50
                hover:grayscale-0 scale-125 hover:scale-150 max-w-48"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
